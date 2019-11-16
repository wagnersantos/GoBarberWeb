import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from 'core/assets/images/logo-purple.svg';
import Notifications from 'components/Notifications';
import { Container, Content, Profile } from './styles';
import { conditionalRender } from 'core/utils/functions';

export default function Header() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading((l) => !l);
    }, 5000);

    return () => timeout.clear();
  }, []);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{conditionalRender(loading, 'Wagner Santos')}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            {conditionalRender(
              loading,
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy"
                alt="Wagner Santos"
              />,
              { rounded: true, height: '2rem', width: '2rem' }
            )}
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
