import React from 'react';
import ReactJson from 'react-json-view'

const Results = (props) => {

    return (
        <div>
            <div>
                <ReactJson name="headers" src={props.headers} />
                <ReactJson name="response" src={props.results} />

            </div>
        </div>
    )

}

export default Results