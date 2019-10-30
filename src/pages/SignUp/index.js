import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from 'core/assets/images/logo.svg';
import { Form, Input } from '@rocketseat/unform';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'no minimo 6 caracteres')
    .required('A senha é obrigatório')
});

export default function SignUp() {
  const handleSubmit = (data) => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
