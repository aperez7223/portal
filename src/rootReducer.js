import {GET_FEEDBACK} from "./actionCreators";
import {ADD_FEEDBACK} from "./actionCreators";
import {SEARCHING} from "./actionCreators";
import {ADD_COMMENT} from "./actionCreators";

const store = {
  results:{issues:[]},
  loading:false,
  option:"Title",
  response:{},
  loadkey:false,
  showkey:false,
  notvalid:false,
  loadCom:false
}

export default function rootReducer(state = store, action) {
  switch (action.type) {
    case GET_FEEDBACK:
      return{...state, results:action.data, loading:false}
    case ADD_FEEDBACK:
      return{...state, response:action.data, loadkey:false, showkey:true}
    case ADD_COMMENT:
      const newIssues = state.results.issues.map(item=>(item));
      newIssues[action.index].fields.comment.maxResults += 1;
      newIssues[action.index].fields.comment.comments.push({
                  author:{displayName:"User"},
                  body:action.comment,
                  created:new Date()
                });
      return{...state, results:{issues:newIssues},loadCom:false}
    case SEARCHING:
      return{...state, ...action.message}
    default:
      return state;
  }
}
