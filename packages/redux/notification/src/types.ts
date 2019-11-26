export const CLEAR_ALL_NOTIFICATIONS = '@SOCKET/CLEAR_ALL_NOTIFICATIONS';
export const CREATE_NOTIFICATION = '@SOCKET/CREATE_NOTIFICATION';
export const REMOVE_NOTIFICATION = '@SOCKET/REMOVE_NOTIFICATION';

export type Action = ICreateNotification | IRemoveNotification | IClearAllNotifications;

export interface IClearAllNotifications {
  type: typeof CLEAR_ALL_NOTIFICATIONS;
}

export interface ICreateNotification {
  type: typeof CREATE_NOTIFICATION;
  payload: {
    title: string;
    message: string;
    domain: string;
  };
}

export interface IRemoveNotification {
  type: typeof REMOVE_NOTIFICATION;
  payload: {
    id: string;
  };
}

export interface INotification {
  id: string;
  title: string;
  message: string;
  domain: string;
}
