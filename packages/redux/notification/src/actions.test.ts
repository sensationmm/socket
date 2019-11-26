import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actions, types } from '.';

const { createNotification, removeNotification, clearAllNotifications } = actions;

const { CREATE_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_ALL_NOTIFICATIONS } = types;

const mockStore = configureMockStore([thunk]);

describe('Notification actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('clearAllNotifications', () => {
    store.dispatch(clearAllNotifications());
    expect(store.getActions()).toEqual([{ type: CLEAR_ALL_NOTIFICATIONS }]);
  });

  test('createNotification', () => {
    store.dispatch(createNotification('title', 'message', 'domain'));
    expect(store.getActions()).toEqual([
      { type: CREATE_NOTIFICATION, payload: { title: 'title', message: 'message', domain: 'domain' } },
    ]);
  });

  test('removeNotification', () => {
    store.dispatch(removeNotification('uniqueId'));
    expect(store.getActions()).toEqual([{ type: REMOVE_NOTIFICATION, payload: { id: 'uniqueId' } }]);
  });
});
