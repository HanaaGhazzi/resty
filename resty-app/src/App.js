import React from 'react';
import './App.scss';
import Header from './header.js'
import Footer from './footer.js'
import Form from './form.js'



class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer/>
      </>
    )
  }
}

export default App;
