import { IStateProps, mapDispatchToProps, mapStateToProps } from './notification-list.container';

describe('Notification container', () => {
  describe('mapStateToProps', () => {
    let state;
    beforeAll(() => {
      state = {
        notification: [
          {
            id: '1',
            title: 'title',
            message: 'msg',
            domain: 'domain',
          },
          {
            id: '2',
            title: 'title',
            message: 'msg',
            domain: 'domain',
          },
        ],
      };
    });

    it('maps state correctly', () => {
      const props: IStateProps = mapStateToProps(state);
      expect(props.notifications).toBe(state.notification);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    it('should return an object containing actions', () => {
      expect(props.clearNotification).toBeDefined();
      props.clearNotification('id');
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
