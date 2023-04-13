import { useState } from 'react'

import Input from './form-fields/Input'

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    ConfirmPassword: ""
  })

  const fromFields = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage: "Username should be 3-16 charactors and should't include any special character!",
      autocomplete: "off"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      autocomplete: "off",
      errorMessage: "It should e valid emal address"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      autocomplete: "off",
      errorMessage: "Passwordd should be 8-20 characters and inlude at least 1 latter Uppercase and Lowercase, 1 number and 1 special character!",
      pattern: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$"
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      autocomplete: "off",
      pattern:values.password,
      errorMessage: "Password should be match!"
    }
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {fromFields.map((field) => {
        return (
          <div>
            <Input key={field.id} {...field} onChange={onChange} value={values[field.name]} />
          </div>
        )
      })}
      <button className='button'>Submit</button>
    </form>
  )
}

export default App
