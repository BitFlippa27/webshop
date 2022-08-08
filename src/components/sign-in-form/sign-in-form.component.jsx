import { useState } from "react";
import { 
  createAuthEmailUser, 
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  loginAuthEmailUser
 } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); 
  const { email, password } = formFields;

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginAuthEmailUser(email, password);
      console.log(response);
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
    <div className="sign-up-container">
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
        <div className="buttons-container">
          <Button type="submit">Login</Button>
          <Button type="button" buttonType="google" onClick={loginWithGoogle}>Google Login</Button>
        </div>
        
      </form>
    </div>
  )
}

export default SignInForm;