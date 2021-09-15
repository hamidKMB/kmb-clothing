import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import styled from "styled-components";

const SigninSignupPage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: 30px auto;
`;

const SignInSignUp = () => {
  return (
    <SigninSignupPage>
      <SignIn />
      <SignUp />
    </SigninSignupPage>
  );
};

export default SignInSignUp;
