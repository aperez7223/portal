import React, { Component } from 'react';
import {getFeedback} from "./actionCreators.js"
import { connect } from "react-redux";
import {getType } from "./helper.js"
import {search} from "./actionCreators"

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      search:"",
      option:"Title",
    }
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.handleSearch();
    }
  }

  handleSearch =()=>{
    this.props.search({notvalid:false,loading:true});
    this.props.getFeedback(getType(this.state.option,this.state.search));
  }

  onSelect=(e)=>this.setState({option: e.target.options[e.target.options.selectedIndex].getAttribute('value'),search:""})

  handleChange=(evt)=>this.setState({ [evt.target.name]: evt.target.value});

  render() {

    let options = (<input onKeyPress={this.handleKeyPress} name="search" value={this.state.search} onChange={this.handleChange} type="text" className="form-control" placeholder={this.state.option ==="Functional Team Request"?("ex. SPM, DSP, SKU, etc."):("* availabe in search")}/>)

    if(this.state.option ==="Status"){
      options=(
        <select name="search" class="custom-select" value={this.state.search} onChange={this.handleChange} required>
        <option value="">Please choose</option>

        
      </select>
    )}else if(this.state.option ==="Request Type"){
      options=(
        <select name="search" class="custom-select" value={this.state.search} onChange={this.handleChange} required>
        <option value="">Please choose</option>

      </select>
    )}else if(this.state.option ==="Team"){
      options=(
        <select name="search" class="custom-select" value={this.state.search} onChange={this.handleChange} required>
        <option value="">Please choose team </option>

      </select>
    )}else if(this.state.option ==="Priority"){
      options=(
        <select name="search" class="custom-select" value={this.state.search} onChange={this.handleChange} required>
        <option value="">Please choose priority</option>

      </select>
    )}else if(this.state.option ==="Change Request"){
      options=(
        <select name="search" class="custom-select" value={this.state.search} onChange={this.handleChange} required>
        <option value="">Please choose Justification</option>

      </select>
    )}else if (this.state.option ==="Nature of Change"){
      options=(
        <select name="search" class="custom-select" value={this.state.search} onChange={this.handleChange} required>
        <option value="">Please choose Request Type</option>

    </select>
    )}else if (this.state.option ==="Impact"){
      options=(
      <select name="search"class="custom-select" value={this.state.search} onChange={this.handleChange} required>
      <option value="">Please choose team</option>

    </select>
   )}

    return (
        <div style={{width:'80%',margin:"auto"}} className="input-group mb-3 align-self-center">
          <div class="input-group-prepend">
            <label class="input-group-text" >Search by</label>
          </div>
          <select onChange={this.onSelect} class="custom-select">
            <option value="Select Option">Select Option</option>

          </select>
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">{this.state.option}</label>
          </div>
          {options}
          <div className="input-group-append">
            <button onClick={this.handleSearch} className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getFeedback, search})(Search);
