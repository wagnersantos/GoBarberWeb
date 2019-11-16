import React, { useState, useMemo, useEffect } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';
import { conditionalRender } from 'core/utils/functions';

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
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading((l) => !l);
    }, 5000);

    return () => timeout.clear();
  }, []);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const handlePrevDays = () => setDate(subDays(date, 1));
  const handleNextDays = () => setDate(addDays(date, 1));

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDays}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{conditionalRender(loading, dateFormatted)}</strong>
        <button type="button" onClick={handleNextDays}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {data.map((e) => (
          <Time key={e.id} past={e.past} available={e.available}>
            <strong>{conditionalRender(loading, e.hour)}</strong>
            <span>{conditionalRender(loading, e.provider)}</span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
