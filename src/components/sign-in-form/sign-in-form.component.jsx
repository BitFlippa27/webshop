import { useState, useContext } from "react"; 
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); 
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const loginWithGoogle = async () => {
    dispatch(googleSignInStart());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      clearFormFields();
    } catch (error) {
      switch(error.code) {
        case "auth/wrong-password":
          alert("Incorrect Email or Password");
          break;
        case "auth/user-not-found":
          alert("No such User found");
          break;
        default: console.log(error);
      }
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  }

  return (
    <SignInContainer>
      <h2>Already have an Account ?</h2>
      <span>Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          type="email"
          name="email" 
          value={email} 
          onChange={handleChange}
          required
        />
        <FormInput 
          label="Password"
          type="password" 
          name="password"
          value={password} 
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Login</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={loginWithGoogle}>Google Login</Button>
        </ButtonsContainer>
        
      </form>
    </SignInContainer>
  )
}

export default SignInForm;