import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from  "./Form";
import {Text} from "./Text";
import './index.css';

class Index extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return(
            <div className="background">
                    <Text />
                    <Form />
            </div>
        );
    }
}

ReactDOM.render(
    <Index />, 
    document.getElementById('root')
);

