import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt={user.name} />
          <Profile>
            <img src={user.avatar_url} alt="André Tavares" />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
