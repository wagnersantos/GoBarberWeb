import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>

          <Notification>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>

          <Notification>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>

          <Notification>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>

          <Notification>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>

          <Notification>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>

          <Notification>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>

          <Notification>
            <p> voce possui um novo agendamento para conferir</p>
            <time>há 2 dias</time>
            <button type="button">Macar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
