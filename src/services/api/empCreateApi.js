import axios from "axios";

export const AuthApi = axios.create({
  baseURL : process.env.REACT_APP_SPRING_IP,
  headers : {
    'Content-Type' : 'application/json',
  }
})

export const SignupAPI = async({e_birth, e_name, e_phone, dept_name, e_email, e_password, e_auth})=> {
  const data = {e_birth, e_name, e_phone, dept_name, e_email, e_password, e_auth}
  const response = await AuthApi.post(`/empcreate/signup`, data);
  console.log(response.data)
  return response.data

}

export const DeptNameDB = async() => {
  const response = await AuthApi.get(`/empcreate/deptname`)
  console.log(response.data)
  return response.data
}