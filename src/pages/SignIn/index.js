import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from 'core/assets/images/logo.svg';
import { actions } from './store/actions';
import { selectors } from './store/reducer';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatório')
});

export default function SignIn() {
  const loading = useSelector(
    (state) => selectors.getLoaders(state).authLoading
  );
  const dispatch = useDispatch();
  const buttonText = loading ? 'Carregando' : 'Acessar';

  const handleSubmit = ({ email, password }) => {
    dispatch(actions.signIn.request(email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{buttonText}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
