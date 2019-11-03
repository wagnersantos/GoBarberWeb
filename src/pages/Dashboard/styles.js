import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0px auto;
  margin-top: 50px;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.div`
  display: block;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${({ past }) => (past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${({ available }) => (available ? '#7159c1' : '#999')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${({ available }) => (available ? '#999' : '#666')};
  }
`;
