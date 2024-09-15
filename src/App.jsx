import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  apiKey = import.meta.env.VITE_NEWS_API;

  state={
    progress:0
  }
  setProgress=(progress)=>{
     this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
          <Routes>
          <Route path="/" element={<Navigate to="/general" />} />
            <Route path="/general" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general"pagesize={6} country="us" category="general" />} />
            <Route path="/business" element={<News  setProgress={this.setProgress} apiKey={this.apiKey}key="bsuiness"pagesize={6} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"pagesize={6} country="us" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="health" pagesize={6} country="us" category="health" />} />
            <Route path="/sports" element={<News  setProgress={this.setProgress}apiKey={this.apiKey} key="sports"pagesize={6} country="us" category="sports" />} />
            <Route path="/technology" element={<News  setProgress={this.setProgress}apiKey={this.apiKey}key="technology" pagesize={6} country="us" category="technology" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="science" pagesize={6} country="us" category="science" />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
