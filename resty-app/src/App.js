import React from 'react';
import './App.scss';
import Header from './header.js'
import Footer from './footer.js'
import Form from './form.js'
import Results from './results.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers :[]
     
    }
  }

  handleForm = (data) => {
    console.log("data ---> before setState" ,data)
    let count = data.body.count;
    let results= data.body;
    let headers = data.headers
    this.setState({count : count , 
      results: results, 
      headers : headers
    });
    console.log("headers ---> after setState" ,data.headers)


  }
  render() {
    return (
      <>
        <Header />
        <Form handler={this.handleForm}/>
        <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
        <Footer />
      </>
    )
  }
}

export default App;
