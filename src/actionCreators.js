import "es6-promise";
import "babel-polyfill";
import "isomorphic-fetch";
import {UserName, Password} from "./private/user.js";

export const GET_FEEDBACK ="GET_FEEDBACK";
export const ADD_FEEDBACK ="ADD_FEEDBACK";
export const SEARCHING ="SEARCHING";
export const ADD_COMMENT = 'ADD_COMMENT'

const baseURLPost = ''
const header = new Headers({'Content-Type': 'application/json',"Authorization": "Basic " + btoa(UserName + ":" + Password)});
const header2 = new Headers({'Content-Type': 'application/json'});



export function search(message){
  return{type:SEARCHING,message}
}

export function getFeedback(url){
  return dispatch => {
    return fetch(url,{method: 'get', headers: header})
    .then(resp => {
        if(!resp.ok) {
          if(resp.status >=400 && resp.status < 500) {
            const message = {notvalid:true,loading:false};
            return resp.json().then(data => dispatch({type:SEARCHING,message}))
          } else {
            let err = {errorMessage: 'Please try again later, server is not responding'};
            throw err;
          }
        }else{
          return resp.json().then(data=>{
            if(data.issues[0] === undefined){
              const message = {notvalid:true,loading:false};
              dispatch({type:SEARCHING,message})
            }else{
              dispatch({type:GET_FEEDBACK,data})
            }
          })
        }
      })
    };
}

export function addFeedback(data){
  return dispatch => {
    return fetch(baseURLPost,{ method: 'post', headers: header2 ,body: JSON.stringify(data)})
      .then(resp => {
       return resp.json();
      })
     .then(data=>dispatch({type:ADD_FEEDBACK,data}))
  };
}

//comment is raw text (string)
//link can be found in the object of the issue under the self key (issue.self)
//index can be found by getting the index of the issue inside of the array.
export function addComment(comment,link,index){
  const data = {"update": {"comment": [{"add": {"body": comment}}]}};
  return dispatch => {
    return fetch(link,
      {method:'put',body: JSON.stringify(data), headers: header})
      .then(resp =>dispatch({type:ADD_COMMENT,comment,index}))
    }
}
