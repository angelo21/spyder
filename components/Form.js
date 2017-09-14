import React from "react";
import {Button} from "./Button";

export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: "Sign Up For Updates"
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        this.refs.clear.value = "";
        this.setState({
            placeholder: "Thank you for signing up"
        })
    }
    render() {
        return(
            <div className="input">
                <form className="form_input" onSubmit={this.onSubmit} >
                    <input ref="clear" type="email" placeholder={this.state.placeholder} />
                    <Button />
                </form>
            </div>
        );
    }
} 