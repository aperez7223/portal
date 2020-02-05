import React, { Component } from 'react';
import {addFeedback,search} from "./actionCreators.js"
import { connect } from "react-redux";

class NewFeedback extends Component {
  constructor(props){
    super(props);
    this.state = {

      summary:"",
      customfield_13358:"",
      customfield_11920:"",
      customfield_10508:"",
      customfield_13203:"",
      priority:"",
      description:"",
      customfield_13680:"",
      customfield_13682:"",
      customfield_13026:"",
      customfield_13685:"",
      customfield_13686:"",
    }
  }

  handleChange=(evt)=>this.setState({ [evt.target.name]: evt.target.value});


  toggleKey=()=>this.props.search({showkey:false});

  handleUpdate=()=>{
    let data={
              fields: {
                 project:
                 {
                    key: "SPMFDBK"
                 },
                 summary: this.state.summary,
                 issuetype: {
                    name: "SPM Feedback"
                 },
                 customfield_13358:this.state.customfield_13358,
                 customfield_13203:this.state.customfield_13203,
                 description:this.state.description,
                 }
              }
            if(this.state.customfield_10508 !==""){
              data={...data,fields:{...data.fields,customfield_10508:{value:this.state.customfield_10508}}}
            }
            if(this.state.priority !==""){
              data={...data,fields:{...data.fields,priority:{name:this.state.priority}}}
            }
            if(this.state.customfield_11920 !==""){
              data={...data,fields:{...data.fields,customfield_11920:{value:this.state.customfield_11920}}}
            }
            if(this.state.customfield_13026 !==""){
              data={...data,fields:{...data.fields,customfield_13026:{value:this.state.customfield_13026}}}
            }
            // if(this.state.customfield_13685 !==""){
            //   data={...data,fields:{...data.fields,customfield_13685:{value:this.state.customfield_13685}}}
            // }
          this.props.search({loadkey:true})
          this.props.addFeedback(data);
          this.setState({
            summary:"",
            customfield_13358:"",
            customfield_11920:"",
            customfield_10508:"",
            customfield_13203:"",
            priority:"",
            description:"",
            customfield_13680:"",
            customfield_13682:"",
            customfield_13026:"",
            customfield_13685:"",
            customfield_13686:"",
          });
  }

  render() {


    return (
        <div>
        <button type="button" data-toggle="modal" data-target="#exampleModalCenter7" style={{marginRight:"auto",marginLeft:"auto",display:"block"}} className="btn btn-secondary mt-3 mb-3">New Feedback</button>

        <div className="modal fade" id="exampleModalCenter7" role="dialog" aria-labelledby="exampleModalCenterTitle7" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle2">Add Feedback</h5>
            </div>
            <div className="modal-body">
            {this.props.loadkey?(<img style={{width:"50%",marginRight:"auto",marginLeft:"auto",display:"block"}} alt="" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"/>):(

            <div>
            {this.props.showkey?(<div>New feedback ID: {this.props.response.key}</div>):(
            <div>
            <div className="needs-validation" novalidate>

              <div className="was-validated m-2">
              <label for="validationServer02">Title</label>
              <input
                type="text"
                placeholder="Title"
                name="summary"
                value={this.state.summary}
                onChange={this.handleChange}
                className="form-control"
                required
                />
                <div class="valid-feedback">
                </div>
                <div class="invalid-feedback">
                 Please enter a Title.
               </div>
              </div>

                  <div className="m-2">
                    <label for="validationServer02">Requested By</label>
                    <input
                        type="text"
                        name="customfield_13358"
                        placeholder=""
                        onBlur={this.handleBlur}
                        value={this.state.customfield_13358}
                        onChange={this.handleChange}
                        className="form-control"
                        required
                        />
                    <div class="text small">Functional Team Request. ex. SPM, DSP, SKU, etc.</div>
                    <div class="invalid-feedback">Please provide a Functional Team Request.</div>
                  </div>

                  <div class="form-group m-2">
                    <label for="validationServer02">Change Request</label>
                    <select name="customfield_13026" class="custom-select" onChange={this.handleChange} required>
                      <option value="">Please select Request Justification</option>
                    </select>
                    <div class="valid-feedback"></div>
                    <div class="test small">Request Justification</div>
                  </div>

                  <div class="form-group m-2">
                    <label for="validationServer02">Nature of Change</label>
                    <select name="customfield_11920" class="custom-select" onChange={this.handleChange} required>
                      <option value="">Please select Request Type</option>
                    </select>
                    <div class="valid-feedback"></div>
                    <div class="text small">Please the Request Type</div>
                  </div>

                  <div class="form-group m-2">
                    <label for="validationServer02">Impact</label>
                    <select name="customfield_10508" title="SDP = LEMC & CNS = LDELL" class="custom-select" onChange={this.handleChange} required>
                      <option title="SDP = LEMC & CNS = LDELL" value="">Please choose team</option>

                    </select>
                    <div class="valid-feedback"></div>
                    <div class="text small">Impacted team. ex: SDP = LEMC; CNS = LDELL</div>
                  </div>

                  <div className="m-2">
                    <label for="validationServer02">User Name (Last, First)</label>
                    <input
                        type="text"
                        name="customfield_13203"
                        placeholder="User Name"
                        onBlur={this.handleBlur}
                        value={this.state.customfield_13203}
                        onChange={this.handleChange}
                        className="form-control"
                        required
                        />
                      {this.state.customfield_13203.match(/[A-Z][a-z]+,\s[A-Z][a-z]+/g)===null?(
                        <span class="text-danger small">Please provide a Submitter Name format Last, First</span>
                      ):(<span class="text-success small">Looks good!</span>)}
                  </div>

                  <div class="form-group m-2">
                    <label for="validationServer02">Priority</label>
                    <select name="priority" title="High = 20 or more hours, Med = 8 to 20 hours, Low = less than 8 hours" class="custom-select" onChange={this.handleChange} required>
                      <option title="High = 20 or more hours, Med = 8 to 20 hours, Low = less than 8 hours" value="">Please choose priority</option>
                    </select>
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback">Please select priority</div>
                  </div>

                  <div className="form-group m-2">
                    <label for="validationServer02">Description</label>
                    <textarea
                        maxlength="3000"
                        type="text"
                        name="description"
                        placeholder="Please limit to 3000 Characters"
                        onBlur={this.handleBlur}
                        value={this.state.description}
                        onChange={this.handleChange}
                        className="form-control"
                        />
                    <div class="invalid-feedback">Please provide a Description</div>
                  </div>







              </div>

            <button onClick={this.state.summary===""|| this.state.customfield_13203.match(/[A-Z][a-z]+,\s[A-Z][a-z]+/g)===null?null:this.handleUpdate} className={this.state.summary===""|| this.state.customfield_13203.match(/[A-Z][a-z]+,\s[A-Z][a-z]+/g)===null?("btn text-light btn-light m-3"):("btn btn-success m-3")}>Add</button>
            </div>)}
              </div>)}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={this.toggleKey} data-dismiss="modal" >Close</button>
            </div>
          </div>
        </div>
      </div>

        </div>
      );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {addFeedback, search})(NewFeedback);
