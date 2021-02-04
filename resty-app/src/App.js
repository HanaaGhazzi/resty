import './styles/App.scss';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/form.scss';
import Header from './component/header';
import Footer from './component/footer';
import Form from './component/form';
import Results from './component/results';
import React from 'react';
import { If, Then, Else } from './component/if/if';
import History from './component/history';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, MemoryRouter, HashRouter } from 'react-router-dom';
import Help from './component/help';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      data: {},
      condition: false,
      url: '',
      method: '',
      body: {}
    }
  }

  handleForm = (data, obj) => {
    console.log("inside HandleForm!! ", data);
    this.setState({ count: data.body.count, results: data.body.results, data: data });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.data !== prevState.data) {
      this.setState({ condition: true });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Form handler={this.handleForm} />
              <If condition={this.state.condition}>
                <Then>
                  <Results data={this.state.data} />
                </Then>
                <Else>
                  <p>In else</p>
                  <div>
                    <img src='https://i.gifer.com/YCZH.gif' alt='loading' width='200px'></img>
                  </div>
                </Else>
              </If>
            </Route>
            <Route exact path="/history">
              <section>
                <History />
              </section>
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;