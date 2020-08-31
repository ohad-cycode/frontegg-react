import React from 'react';
import { FRONTEGG_AFTER_AUTH_REDIRECT_URL } from '../constants';
import { Loader } from 'semantic-ui-react';
import { AuthActions, AuthState } from '../Api';
import { withAuth } from '../HOCs';
import { Redirect } from 'react-router';

const mapper = {
  state: ({ routes, onRedirectTo }: AuthState) => ({ routes, onRedirectTo }),
  actions: ({ resetLoginState }: AuthActions) => ({ resetLoginState }),
};
type Props = ReturnType<typeof mapper.state> & ReturnType<typeof mapper.actions>

class LoginSuccessRedirect extends React.Component<Props> {
  componentDidMount() {
    const { onRedirectTo, resetLoginState } = this.props;
    let { routes: { authenticatedUrl } } = this.props;
    const afterAuthRedirect = window.localStorage.getItem(FRONTEGG_AFTER_AUTH_REDIRECT_URL);
    if (afterAuthRedirect) {
      authenticatedUrl = afterAuthRedirect;
      window.localStorage.removeItem(FRONTEGG_AFTER_AUTH_REDIRECT_URL);
    }
    setTimeout(() => {
      resetLoginState();
      onRedirectTo(authenticatedUrl);
    }, 500);
  }

  render() {
    return <div className='fe-login-success'>
      Authentication Succeeded
      <Loader active={true} inline={true}/>
    </div>;
  }
}


export default withAuth(LoginSuccessRedirect, mapper);