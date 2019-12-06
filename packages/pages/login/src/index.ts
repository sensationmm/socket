import Login, { IAuthReducer as _IAuthReducer, IPropsFromReduxState as _IPropsFromReduxState } from './login.container';
import withAuthentication from './with-authentication';

export { withAuthentication };
export type IAuthReducer = _IAuthReducer;
export type IPropsFromReduxState = _IPropsFromReduxState;

export default Login;
