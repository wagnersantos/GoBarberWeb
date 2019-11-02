import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

const data = [
  {
    id: '1',
    hour: '08:00',
    provider: 'Wagner Santos',
    available: false,
    past: true
  },
  {
    id: '2',
    hour: '09:00',
    provider: 'Wagner Santos',
    available: true,
    past: true
  },
  {
    id: '3',
    hour: '10:00',
    provider: 'Wagner Santos',
    available: true,
    past: false
  },
  {
    id: '4',
    hour: '11:00',
    provider: 'Wagner Santos',
    available: false,
    past: false
  }
];

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {data.map((e) => (
          <Time key={e.id} past={e.past} available={e.available}>
            <strong>{e.hour}</strong>
            <span>{e.provider}</span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
