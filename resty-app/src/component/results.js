import '../styles/form.scss';
import React from 'react';
import ReactJson from 'react-json-view'
const Results = (props) => {

    return (
        <>
        <div id="render">
          <ReactJson src={props.data.headers}name="Headers"/>
          <ReactJson src={props.data.body}name="Response"/>
        </div>
        </>
    )
}

export default Results;