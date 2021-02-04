import React from 'react';
import '../styles/history.scss';
import List from "./list";

class History extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         method:'',
         url:'',
         body:{}
       }
    }
    click=(data)=>{
        console.log('data from the button',data)
       let inputUrl=document.getElementById("url");
        console.log(inputUrl)
    }
     
    render(){
        let queries = localStorage.getItem('queries') ? JSON.parse(localStorage.getItem('queries')) : [];
        let items = queries.map((obj,indx) => {
          return <li className="history" key={indx}>{JSON.stringify(obj)}<button onClick={this.click(obj)}>Re-Run</button></li>
        });
        console.log('items=====>',items)
        return (
            <ul>
             <List>{items}</List>
            </ul>
        )
        
    }
}

export default History;