import { useState, useContext } from "react";
import { createAuthEmailUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); 
  const { displayName, email, password, confirmPassword } = formFields;

  console.log("Hit!")

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Passwords do not match !")
      return;
    }

    try {
      const { user } = await createAuthEmailUser(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      clearFormFields();

    } catch (error) {
      if(error.code === "auth/email-already-in-use") {
        alert("Email already in use")
      }
      else {
        console.log("createEmailUser", error)
      }
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  }

  return (
    <SignUpContainer>
      <h2>Dont have an Account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
            type="text" 
            name="displayName"
            value={displayName}
            onChange={handleChange} 
            required
        />
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
        <FormInput 
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required= {true}
        />
        <Button buttonType="google" type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm;