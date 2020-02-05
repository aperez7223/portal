import React, { Component } from 'react';
import Feedback from "./feedback.js"
import { connect } from "react-redux";

class Results extends Component {


  render() {

    let results = this.props.results.issues.map((item,index)=>(
          <Feedback key={item.key} index={index} link={item.self} id={item.key} {...item.fields}/>
    ));

    if(this.props.notvalid){
      results = (<div className="text-secondary text-center">No Results Found</div>)
    }


    return (
      <div>

        {this.props.loading?(<img  style={{width:"10%",marginRight:"auto",marginLeft:"auto",display:"block"}} alt="" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"/>):(
          <div className="list-group">
            {results}
          </div>
        )}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {})(Results);
