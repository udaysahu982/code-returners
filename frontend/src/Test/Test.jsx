import React, { useState } from 'react'

const Test = () => {

  const [form, setForm] = useState({
    name : "",
    email: "",
    phone: ""
  });

  const handleChange = (e) =>{
    setForm({
      ...form,[e.target.name]:e.target.value
    });
  };

  return (
    <div>
      <h1>Enter your name </h1>
      <input
      name="name"
      value={form.name}
      onChange={handleChange}
       />
        <h1>Enter your email </h1>
      <input
      name="email"
      value={form.email}
      onChange={handleChange}
       />
        <h1>Enter your phone </h1>
      <input
      name="phone"
      value={form.phone}
      onChange={handleChange}
       />


    <h3>your name: {form.name}</h3>
    <h3>your name: {form.email}</h3>
    <h3>your name: {form.phone}</h3>

    </div>
  )
}

export default Test
