import { reducers, types } from '.';

const { initialState, notification } = reducers;
const { CREATE_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_ALL_NOTIFICATIONS } = types;

jest.mock('shortid', () => ({
  generate: jest.fn(() => 'uniqueId'),
}));

describe('notifications reducer', () => {
  test('CLEAR_ALL_NOTIFICATIONS', () => {
    const action: types.IClearAllNotifications = {
      type: CLEAR_ALL_NOTIFICATIONS,
    };
    const state = [
      {
        id: '1',
        title: 'title',
        message: 'message',
        domain: 'domain',
      },
      {
        id: '2',
        title: 'title2',
        message: 'message2',
        domain: 'domain2',
      },
    ];
    const expectedState = [];

    expect(notification(state, action)).toEqual(expectedState);
  });

  test('CREATE_NOTIFICATION', () => {
    const action: types.ICreateNotification = {
      type: CREATE_NOTIFICATION,
      payload: {
        title: 'title',
        message: 'message',
        domain: 'domain',
      },
    };

    const expectedState: types.INotification[] = [
      {
        id: 'uniqueId',
        title: 'title',
        message: 'message',
        domain: 'domain',
      },
    ];

    expect(notification(initialState, action)).toEqual(expectedState);
  });

  test('REMOVE_NOTIFICATION', () => {
    const action: types.IRemoveNotification = {
      type: REMOVE_NOTIFICATION,
      payload: {
        id: 'idToRemove',
      },
    };

    const state: types.INotification[] = [
      {
        id: 'idToRemove',
        title: 'title',
        message: 'message',
        domain: 'domain',
      },
      {
        id: '1',
        title: 'title',
        message: 'message',
        domain: 'domain',
      },
    ];

    const expectedState: types.INotification[] = [
      {
        id: '1',
        title: 'title',
        message: 'message',
        domain: 'domain',
      },
    ];

    expect(notification(state, action)).toEqual(expectedState);
  });
});
