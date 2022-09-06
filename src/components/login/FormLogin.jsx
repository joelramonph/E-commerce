import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

const { register, handleSubmit, reset } = useForm();

const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
     axios.post(URL,data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  reset({
    email: "",
    password: "",
  });
};

const FormLogin = () => {
  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <h2 className="login__title">Welcome Login</h2>
      <div className="login__div-email">
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="text" id="email" />
      </div>
      <div className="login__div-password">
        <label htmlFor="password"></label>
        <input {...register("password")} className="login__input" type="text" />
      </div>
    </form>
  );
};

export default FormLogin;
