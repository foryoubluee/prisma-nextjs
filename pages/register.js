import axios from "axios"
import React from "react"
import { useForm } from "react-hook-form"

const Register = () => {
  const { register, handleSubmit } = useForm()

  const postData = async (data) => {
    try {
      const userData = await axios.post("/api/register", { data })
      return userData
    } catch (err) {
      throw new Error(err)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit((data) => postData({...data, role: 'USER'}))}>
        <input {...register("username")} type="text" placeholder="Username" />
        <input {...register("email")} type="email" placeholder="Email" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register
