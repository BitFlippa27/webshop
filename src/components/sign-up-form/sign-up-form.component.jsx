import { useState } from "react";
import { createAuthEmailUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); 
  const { displayName, email, password, confirmPassword } = formFields;

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
      console.log(user)
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
    <div className="sign-up-container">
      <h1>Dont have an Account ?</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          inputOptions = {{
            type:"text", 
            name:"displayName", 
            value: displayName,
            onChange:handleChange, 
            required: true
          }} 
           />
        <FormInput 
          label="Email"
          inputOptions = {{
            type:"email",
            name:"email", 
            value:email ,
            onChange:handleChange,
            required: true
          }}
           />
        <FormInput 
          label="Password"
          inputOptions = {{
            type:"password", 
            name:"password", 
            value:password, 
            onChange:handleChange, 
            required: true
          }}
           />
        <FormInput 
          label="Confirm Password"
          inputOptions = {{
            type:"password", 
            name:"confirmPassword", 
            value:confirmPassword, 
            onChange:handleChange, 
            required: true
          }}
           />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;