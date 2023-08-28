import './App.css';
import NavBar from './components/NavBar'
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Component } from 'react';

export default class App extends Component {
  apiKey=process.env.API_KEY;
  pagesize=4;
  country="in";
  state={
    progress:0,
  };
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render(){
    return (
      <>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
        />
        <NavBar/>
        <Routes>
          <Route exat path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"news-hunt1"} pagesize={this.pagesize}   country={this.country} category={"general"}/>}></Route>
          <Route exat path="/news-hunt" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"news-hunt"} pagesize={this.pagesize}   country={this.country} category={"general"}/>}></Route>
          <Route exat path="/About" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"about"} pagesize={this.pagesize}   country={this.country} category={"general"}/>}></Route>
          <Route exat path="/Business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"business"} pagesize={this.pagesize}   country={this.country} category={"business"}/>}></Route>
          <Route exat path="/Entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"entertainment"} pagesize={this.pagesize}   country={this.country} category={"entertainment"}/>}></Route>
          <Route exat path="/General" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"general"} pagesize={this.pagesize}   country={this.country} category={"general"}/>}></Route>
          <Route exat path="/Health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"health"} pagesize={this.pagesize}   country={this.country} category={"health"}/>}></Route>
          <Route exat path="/Science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"science"} pagesize={this.pagesize}   country={this.country} category={"science"}/>}></Route>
          <Route exat path="/Sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"sports"} pagesize={this.pagesize}   country={this.country} category={"sports"}/>}></Route>
          <Route exat path="/Technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"technology"} pagesize={this.pagesize}   country={this.country} category={"technology"}/>}></Route>
        </Routes>
      </Router>
      </>
    );
  }
}






