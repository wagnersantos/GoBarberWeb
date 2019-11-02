import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import { selectors } from './store/reducer';
import { actions } from './store/actions';

import AvatarInput from './component/AvatarInput';

export default function Profile() {
  const profile = useSelector((state) => selectors.getProfile(state));
  const dispatch = useDispatch();
  const updateProfile = (data) => dispatch(actions.request(data));

  const handleSubmit = (data) => updateProfile(data);

  return (
    <Container>
      <Form initialData={profile}>
        <AvatarInput name="avatar_id" />

        <Input name="name" type="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit" onClick={handleSubmit}>
          Atualizar
        </button>
      </Form>

      <button type="button">Sair</button>
    </Container>
  );
}
