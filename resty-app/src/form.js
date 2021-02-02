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
            <label htmlFor="method">Get</label>
            <input type="radio" value="Get " defaultChecked name="method" />
            <label htmlFor="method">Post</label>
            <input type="radio" value="Post " name="method" />
            <label htmlFor="method">Delete</label>
            <input type="radio" value="Delete " name="method" />
            <label htmlFor="method">Put</label>
            <input type="radio" value="Put " name="method" />
          </div>

        </form>

    
      </div>
    )
  }
}

export default Form;