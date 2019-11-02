import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
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

        <button type="submit">Atualizar</button>
      </Form>

      <button type="button">Sair</button>
    </Container>
  );
}
