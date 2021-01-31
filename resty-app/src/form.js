import './form.scss';

class Form extends React.Component {
 
    constructor(props) {
      super(props);
      // add state.words here and initialize it
      this.state = {
        url : ' ',
        method: ' '
      }
    }
  
    onChangeValue = (e) => {

        console.log(e.target.value);

      let url = e.target.url.value;
      let method = e.target.method.value; 
      // update this.state.words with new words
      // this.state is immutable (you can not change it directly)
      this.setState({url , method});
    }
  
    handleClick = (event) => {
        event.preventDefault();
        console.log('from click')
    }


  
    render() {
      return (
        <div>
        <form >
        <label>URL</label>
        <input type="radio" value= 'get' checked={this.state.method === "get"} onChange={this.onChangeValue}>GET</input>
        <input type="radio" value= 'post' checked={this.state.method === "post"} onChange={this.onChangeValue}>POST</input>
        <input type="radio" value= 'update' checked={this.state.method === "update"} onChange={this.onChangeValue}>UPDATE</input>
        <input type="radio" value= 'delete' checked={this.state.method === "delete"} onChange={this.onChangeValue}>DELETE</input>
          <button type='submit' onClick={this.handleClick}>GO !</button>
          </form>
        </div>
      )
    }
  }
  
  export default Form;