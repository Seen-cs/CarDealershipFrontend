import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import UserService from '../services/UserService';
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify';
import ShortenTextInput from '../../utilities/customFormControl/ShortenTextInput';

export default function Register() {
  const userService = new UserService()
  const initialValues = { email: "", password:"" }
  const schema = Yup.object().shape({

    email: Yup.string()
      .required("Email alanı zorunludur")
      .email("Geçerli bir email değil"),
    password: Yup.string()
      .required("Şifre zorunludur")
      .min(6, "Şifre en az 6 karakter uzunlugunda olmalıdır")
    
  });

  return (
    <div style={{ margin: "auto", marginLeft: "50px" }}>
     <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={ (values) => {
                  userService.addUser(values).then((result)=>{
                        toast.success(result.data.message)
                    }).catch((result)=>{
                        console.log(result.data.message)
                    })
                }}   >

                <Form className='ui form'>
                    <ShortenTextInput style={{ width: "30%" }}  name="email" placeholder='E-mail' />
                    <ShortenTextInput style={{ width: "30%" }} name="password" type="password" placeholder='Şifre' />
                    <Button color='green' type='submit'>Kayıt Ol</Button>
                </Form>
            </Formik>
    </div>
  )
}
