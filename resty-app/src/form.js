import './form.scss';
import React from 'react';

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
    // update this.state.words with new words
    // this.state is immutable (you can not change it directly)
    this.setState({ url, method });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.onChangeValue}>
          <label>URL</label>
          <input id="url" type="url" name="url" />
          <button type="submit"> GO !</button>
          <div>
            <label htmlFor="method">Get</label>
            <input type="radio" value="Get " name="method" />
            <label htmlFor="method">Post</label>
            <input type="radio" value="Post " name="method" />
            <label htmlFor="method">Delete</label>
            <input type="radio" value="Delete " name="method" />
            <label htmlFor="method">Put</label>
            <input type="radio" value="Put " name="method" />
          </div>

        </form>

        <div className = "content">
          <p>
            {this.state.method}  {this.state.url}
          </p>
        </div>
      </div>
    )
  }
}

export default Form;