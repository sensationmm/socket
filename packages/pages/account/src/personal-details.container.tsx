import { connect } from 'react-redux';

import { IAuthReducer } from '@somo/pda-pages-login/src';

export interface IPropsFromReduxState {
  userId: string;
  token: string;
  tokenType: string;
}

import PersonalDetails from './personal-details.component';

export const mapStateToProps = (state: { user: IAuthReducer }): IPropsFromReduxState => {
  const { user } = state;

  return {
    userId: user.userId,
    token: user.accessToken,
    tokenType: user.tokenType,
  };
};

export default connect(mapStateToProps)(PersonalDetails);
