import React from "react"
import CustomButton from "../custom-button/custom-button.component"

import FormInput from "../form-input/form-input.component"
import "./sign-in.styles.scss"

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state={
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({ email:'' , password:'' })
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({ [name] : value })
        console.log(this.state);
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I Already have an Account</h2>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        label="Email"
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="Password"
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;