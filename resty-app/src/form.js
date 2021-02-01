import './form.scss';
import React from 'react';
import superagent from 'superagent'

class Form extends React.Component {

  constructor(props) {
    super(props);
    // add state.words here and initialize it
    this.state = {
      url: ' ',
      method: ' '
    }
  }

  onChangeValue = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    let url = e.target.url.value;
    let method = e.target.method.value;
    this.setState({ url, method });

    superagent.get(url)
    .then(data => {
    
      // let count = data.body.count; 
      // let results = data.body.results;
      
     this.props.handler(data)

       
       })

  }



  render() {
    return (
      <div>
        <form onSubmit={this.onChangeValue} className = "content">
          <label>URL</label>
          <input id="url" type="url" name="url" />
          <button type="submit"> GO !</button>
          <div>
            <label for="method">Get</label>
            <input type="radio" defaultChecked value="Get " name="method" />
            <label for="method">Post</label>
            <input type="radio" value="Post " name="method" />
            <label for="method">Delete</label>
            <input type="radio" value="Delete " name="method" />
            <label for="method">Put</label>
            <input type="radio" value="Put " name="method" />
          </div>

        </form>

    
      </div>
    )
  }
}

export default Form;