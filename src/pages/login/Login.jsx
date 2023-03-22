import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import UserService from '../services/UserService';
import { userLogin } from '../store/actions/AuthAction';
import ShortenTextInput from '../../utilities/customFormControl/ShortenTextInput';
import { Button,Message } from "semantic-ui-react";
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Login() {
  
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleLogin = (user) => {
        dispatch(userLogin(user));
    };
    const userService = new UserService()
    const initialValues = { email: "", password: "" }
    const schema = Yup.object().shape({

        email: Yup.string()
            .required("Email alanı zorunludur")
            .email("Geçerli bir email değil"),
        password: Yup.string()
            .required("Şifre zorunludur")
            .min(6, "Şifre en az 6 karakter uzunlugunda olmalıdır")

    });

  return (
    <div><div style={{ margin: "auto", marginLeft: "50px" }}>
    <Formik initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
            userService.login(values).then((result) => {
                handleLogin(result.data.data)
                toast.success(result.data.message)
                navigate("/")
                
            }).catch((error) => {
                console.log(error)
            })
        }}   >

        <Form className='ui form'>
            <ShortenTextInput name="email" placeholder='E-mail' />
            <ShortenTextInput name="password" type="password" placeholder='Şifre' />
            <Button color='green' type='submit'>Giriş yap</Button>
        </Form>
        
    </Formik>
    <Message info color="black">
You're not registered? - 
<b>
  <Link to={"/user/register"} > Register Now</Link>
</b>
</Message>
</div></div>
  )
}
