import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';
import { AppState } from '../../redux/app.state';
import { AuthThunks } from '../../redux/feature/auth/auth.action';
import { connect } from 'react-redux';
import { AuthEndpoints } from '../../endpoint/auth.endpoints';
import { Button, Card, InputGroup } from '@blueprintjs/core';

class Auth extends React.Component<PropsFromConnector & {}> {
  state = {
    form: {
      login: '',
      password: '',
    },
  };

  constructor(props: PropsFromConnector & {}) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSubmit(event: FormEvent) {
    this.login(this.state.form.login, this.state.form.password);
    event.preventDefault();
  }

  private updateField(patch: any) {
    this.setState((state: any) => ({
      ...state,
      form: {
        ...state.form,
        ...patch,
      },
    }));
  }

  private login(username: string, password: string) {
    AuthEndpoints.login(username, password).then((data: { accessToken: string }) =>
      this.props.onAuthSuccess({ token: data.accessToken }),
    );
  }

  render() {
    return (
      <div className="rm-auth">
        <Card>
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
          >
            <div className="input-field">
              <label htmlFor="login" className="h3">
                Username
              </label>
              <InputGroup
                id="login"
                type="text"
                value={this.state.form.login}
                onChange={(event: any) =>
                  this.updateField({ login: (event.target as HTMLInputElement).value })
                }
              />
            </div>

            <div className="input-field">
              <label htmlFor="password" className="h3">
                Password
              </label>
              <InputGroup
                id="password"
                type="password"
                value={this.state.form.password}
                onChange={(event: any) =>
                  this.updateField({ password: (event.target as HTMLInputElement).value })
                }
              />
            </div>

            <Button type={'submit'}> Log In </Button>
            <Link to="/register" className="register-link">
              {' '}
              Not registered yet?{' '}
            </Link>
          </form>
        </Card>
      </div>
    );
  }
}

const mapState = (state: AppState) => ({});

const mapDispatch = {
  onAuthSuccess: ({ token }: { token: string }) => AuthThunks.saveToken({ token }),
};

const connector = connect(mapState, mapDispatch);

type stateProps = ReturnType<typeof mapState>;
type dispatchProps = typeof mapDispatch;

type PropsFromConnector = stateProps & dispatchProps;

// @ts-ignore
export default connector(Auth);
