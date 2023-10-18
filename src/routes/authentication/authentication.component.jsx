import { useState } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthContainer } from "./authentication.styles";

const Authentication = () => {

  const [signupView, setSignupView] = useState(false);
  console.log(signupView)

  return (
    <AuthContainer>
      {
        signupView ? <SignUpForm setSignupView={setSignupView} /> : <SignInForm setSignupView={setSignupView} />
      }
    </AuthContainer>
  )
}

export default Authentication;