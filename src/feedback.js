import React, { Component } from 'react';
import moment from 'moment';
import { connect } from "react-redux";
import {addComment, search} from "./actionCreators"

class Feedback extends Component {
  constructor(props){
    super(props);
    this.state = {
      show:false,
      comment:""
    }
  }

  toggle=()=> this.setState({show:!this.state.show})

  add=()=> {
    this.props.search({loadCom:true});
    this.props.addComment(this.state.comment,this.props.link,this.props.index);
    this.setState({comment:""});
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.add();
    }
  }

  render() {
    const textClass="row list-group-item-action m-1 "
    const jira ="text-secondary col"
    const us="text-info col text-right"

    let allComments = (<div className={textClass}>
      <div className={us}>Comments</div>
    <div className={jira}>none</div>
    </div>);
    if(this.props.comment.maxResults > 0){

      allComments = this.props.comment.comments.map(comment=>(
          <div className="list-group-item clearfix">
          <div className="text-secondary">{comment.body}</div>
          <div className="small">{comment.author.displayName==="Perez, Anibal"?"Submitter ":comment.author.displayName}
                                  { " on" }  {moment(comment.created).format('MMMM Do YYYY, h:mm a')}</div>
          </div>
      ))
    }

    return (

      <div  style={{width:"80%",cursor:"pointer"}}  className=" card-body border align-self-center m-1" >
        <h6 onClick={this.toggle} className="text-secondary text-center m-2 ml-3">  {this.props.summary} </h6>
        {this.state.show?(
        <div>
        <div className={textClass}>
          <div className={us}>  Title</div>
        <div className={jira}>  {this.props.summary}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  ID</div>
        <div className={jira}>  {this.props.id}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Status</div>
        <div className={jira}> 	{this.props.status.name}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Resolution</div>
        <div className={jira}>  {this.props.resolution !==null?this.props.resolution.name:null}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Requested By </div>
        <div className={jira}> 	{this.props.customfield_13358}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Nature Of Change </div>
          <div className={jira}> 	{this.props.customfield_11920!==null?this.props.customfield_11920.value:null}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Impact</div>
        <div className={jira}> 	{this.props.customfield_10508!==null?this.props.customfield_10508.value:null}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  User Name</div>
        <div className={jira}> 	{this.props.customfield_13203}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Priority</div>
        <div className={jira}>  {this.props.priority.name}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Description</div>
        <div className={jira}>  {this.props.description}</div>
        </div>

        <div className={textClass}>
          <div className={us}>  Change Request</div>
        <div className={jira}>  {this.props.customfield_13026!==null?this.props.customfield_13026.value:null}</div>
        </div>


        <div className={textClass}>
          <div className={us}>  Date Created</div>
        <div className={jira}>  {moment(this.props.created).format('MMMM Do YYYY, h:mm a')}</div>
        </div>
        <div className={textClass}>
          <div className={us}>  Date Updated</div>
        <div className={jira}>  {moment(this.props.updated).format('MMMM Do YYYY, h:mm a')}</div>
        </div>
        <div className={textClass}>
          {this.props.comment.maxResults !== 0?(<div className={us}>Comments</div>):null}
          <div className={jira}> {allComments}</div>
          </div>
        <div className={textClass}>
          {this.props.loadCom?(<img style={{width:"20%",marginRight:"auto",marginLeft:"auto",display:"block"}} alt="" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"/>):null}
          <div className={"list-group-item-action m-1 text-center"}>
            <textarea
               style={{resize:"height",overflow:"auto",width:"100%",height:"40px"}}
              type="text"
              name="comment"
              value={this.state.comment}
              onKeyPress={this.handleKeyPress}
              onChange={(e)=>this.setState({comment:e.target.value})}
              className="form-control mr-auto small"
            />
            <div style={{cursor:"pointer",fontWeight:"bold"}} className="small text-secondary text-right" onClick={this.add}> Add Comment</div>
          </div>
          </div>

        </div>

        ):null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {loadCom:state.loadCom};
}

export default connect(mapStateToProps, {addComment, search})(Feedback);

// <div className={textClass}>
//   <div className={us}>  Change Benefits</div>
// <div className={jira}>  {this.props.customfield_13680}</div>
// </div>
// <div className={textClass}>
//   <div className={us}>  Impacted Teams</div>
// <div className={jira}>  {this.props.customfield_13682}</div>
// </div>
// <div className={textClass}>
//   <div className={us}>  Exec. Sponsor</div>
// <div className={jira}>  {this.props.customfield_13686}</div>
// </div>
