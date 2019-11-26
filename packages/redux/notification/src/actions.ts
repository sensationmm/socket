import {
  CLEAR_ALL_NOTIFICATIONS,
  CREATE_NOTIFICATION,
  IClearAllNotifications,
  ICreateNotification,
  IRemoveNotification,
  REMOVE_NOTIFICATION,
} from './types';

export const createNotification = (title: string, message: string, domain: string): ICreateNotification => ({
  type: CREATE_NOTIFICATION,
  payload: {
    title,
    message,
    domain,
  },
});

export const removeNotification = (id: string): IRemoveNotification => ({
  type: REMOVE_NOTIFICATION,
  payload: {
    id,
  },
});

export const clearAllNotifications = (): IClearAllNotifications => ({
  type: CLEAR_ALL_NOTIFICATIONS,
});
