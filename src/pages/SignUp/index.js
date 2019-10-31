import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import logo from 'core/assets/images/logo.svg';
import { actions } from './store/actions';
import { selectors } from './store/reducer';
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
  const loading = useSelector(
    (state) => selectors.getLoaders(state).signupLoading
  );
  const dispatch = useDispatch();
  const buttonText = loading ? 'Carregando' : 'Criar conta';

  const handleSubmit = ({ name, email, password }) => {
    dispatch(actions.signUp.request(name, email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{buttonText}</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
