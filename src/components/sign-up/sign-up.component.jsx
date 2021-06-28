import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth , createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss"

class SignUp extends React.Component {
    constructor() {
        super()

        this.state={
            displayName:'' ,
            email: '' ,
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword ){ // when the password Was Wrong
            alert("Passwords Not Match! Try again")
            return;
        };
        
        try{ 
            const{ user } =
            await auth.createUserWithEmailAndPassword(
                email,
                password
                ); // save the user Athenticated
                await createUserProfileDocument(user, {displayName});
            //save the user detail in firestore
            
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            // Blank the form fields after user sign up Complete

        }catch(error){
            console.log("error in Sign-Up" , error.message);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState ({ [name] : value })
    }   

    render() {
        const{displayName, email, password, confirmPassword} = this.state;
        return (
          <div className="sign-up">
            <h2 className="title">I do not have an Account</h2>
            <span>Sign Up With Your Email and Password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                label="Display Name"
                onChange={this.handleChange}
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                label="Email"
                onChange={this.handleChange}
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                label="password"
                onChange={this.handleChange}
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm Password"
                onChange={this.handleChange}
                required
              />
              <CustomButton type="submit"> SIGN UP </CustomButton>
            </form>
          </div>
        );
    }
}

export default SignUp