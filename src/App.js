import './App.css';
// import {React} from 'react-router-dom'
// import propTypes from "prop-types"
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
// import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  // static propTypes = {}
    pageSize = 15;
    state = {
      progress : 0
    }
    setProgress = (progress) => {
        this.setState({progress : progress})
    }
  render() {
    return (
      <>
      <div>
        <NavBar />
        <LoadingBar color='#f11946' progress={this.state.progress}/>
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress}  key="science"pageSize={this.pageSize} counry="us" category="general" />} />
        <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business"pageSize={this.pageSize} country="us" category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment"pageSize={this.pageSize} country="us" category="entertainment" />} />
        <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general"pageSize={this.pageSize} country="us" category="general" />} />
        <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health"pageSize={this.pageSize} country="us" category="health" />} />
        <Route exact path="/science" element={<News setProgress={this.setProgress}  key=""pageSize={this.pageSize} country="us" category="science" />} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology"pageSize={this.pageSize} country="us" category="technology" />} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports"pageSize={this.pageSize} country="us" category="sports" />} />

        </Routes>
      </div>
      </>
    );
  }
  }

// export default App;