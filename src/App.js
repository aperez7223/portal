import React, { Component } from 'react';
import Search from "./Search.js"
import NewFeedback from "./NewFeedback.js"
import Results from "./results.js"

class App extends Component {

  render() {
    return (
      <div  className="container mt-2">

        <h5 className="display-3 text-center text-secondary">SPM Feedback Portal</h5>
        <NewFeedback/>
        <Search/>
        <Results/>

      </div>
    );
  }
}

export default App;
