import '../styles/App.scss';
import '../styles/form.scss';
import React from 'react';
import superagent from 'superagent';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      body: {}
    }
  }
  handleChange = async (e) => {
    e.preventDefault();
    let url = e.target.url.value;
    let method = e.target.method.value;
    let body = e.target.text.value;

    if (!body) {
      this.setState({ url, method });
    } else {
      this.setState({ url, method, body });
    }
  }     
  componentDidUpdate = async (prevProps, prevState, snapshot) => {
    try {
      if (this.state.method !== prevState.method && this.state.url!== prevState.url) {
        if (this.state.method === 'get' || this.state.method === 'delete') {
          let data = await superagent(this.state.method, this.state.url)
          this.props.handler(data,this.state);
          
        }
        else if (this.state.method === 'put' || this.state.method === 'post') {
          
          let body = JSON.parse(this.state.body)
          let record = await superagent(this.state.method, this.state.url).send(body)
          this.props.handler(record,this.state);
          
        }
        let check;
        if (localStorage.getItem('queries')) {
          let queries = JSON.parse(localStorage.getItem('queries'));
          console.log(queries)
         
            queries.some(obj=>{
              if(obj.method===this.state.method&&obj.url===this.state.url&&JSON.stringify(obj.body)===JSON.stringify(this.state.body)){
                return check = true; 
              }else { return check = false }
            });
        
          if (!check) {
            let queryArray = JSON.parse(localStorage.getItem('queries'));;
            queryArray.push(this.state);
            localStorage.setItem('queries', JSON.stringify(queryArray))
          }
        } else {
          let queryArray = [];
          queryArray.push(this.state);
          localStorage.setItem('queries', JSON.stringify(queryArray))
        }
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleChange}>
          <label>Url</label>
            <input id='url' type='url' name='url'className='input'  />
            <label>Body</label>
            <input type='textArea' name='text'  className='input'/>
            <div id='div'>
              <label>GET</label>
              <input value='get' defaultChecked type='radio' name='method' />
              <label>PUT</label>
              <input value='put' type='radio' name='method' />
              <label>DELETE</label>
              <input value='delete' type='radio' name='method' />
              <label>POST</label>
              <input value='post' type='radio' name='method' />
              <label>PATCH</label>
              <input value='patch' type='radio' name='method' />
              <button type='submit'>GO!</button>
            </div>
          </form>
        </div> 
      </>
    )
  }
}
export default Form;
// clickHandler={this.clickHandel}