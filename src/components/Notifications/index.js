import React, { useState, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      read: false,
      content: 'voce possui um novo agendamento para conferir',
      createAt: '2019-10-30T10:56Z'
    },
    {
      id: '2',
      read: true,
      content: 'voce possui um novo agendamento para conferir',
      createAt: '2019-10-30T10:56Z'
    }
  ]);

  const handleToogleVisible = () => setVisible(!visible);

  const markAsRead = (id) =>
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  const formatDate = (date) =>
    formatDistance(parseISO(date), new Date(), { addSuffix: true, locale: pt });

  return (
    <Container>
      <Badge onClick={handleToogleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification key={notification.id} unread={!notification.read}>
              <p> {notification.content}</p>
              <time>{formatDate(notification.createAt)}</time>
              <button type="button" onClick={() => markAsRead(notification.id)}>
                Macar como lida
              </button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
