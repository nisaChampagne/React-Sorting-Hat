import React, { Component } from 'react';
import Home from './components/home-page/Home';
import Questions from './components/questionsandanswers/Questions';
import Results from './components/results-page/Results';

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: 'home',
      result:''
    }
  }
  setPage = page => {
    this.setState({page: page})
  }
  result = result => {
    this.setPage('results')
    this.setState({result: result})
  }

  render() {
    let page
    if(this.state.page === 'home') page = <Home click={this.setPage}/>
    if(this.state.page === 'questions') page = <Questions click={this.result}/>
    if(this.state.page === 'results') page = <Results house={this.state.result}/>
    return (
      <div className="App">
        <div>
           {page}
           <Switch>
             <Route path='/home' component={Home} />
             <Route path='/quiz' component={page} />
           </Switch>
        </div>
      </div>
    );
  }
}

export default App;
