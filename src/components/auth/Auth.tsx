import React, { createRef, FormEvent, RefObject } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import ReactDOM from 'react-dom';
import { AppState } from '../../redux/app.state';
import { AuthThunks } from '../../redux/feature/auth/auth.action';
import { connect } from 'react-redux';
import { AuthEndpoints } from '../../endpoint/auth.endpoints';

class Auth extends React.Component<PropsFromConnector & {}> {
  wrapper = createRef();

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    /* Uses DOM node  */
  }

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
      <div ref={this.wrapper as RefObject<HTMLDivElement>} className="rm-auth">
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
              <InputText
                id="login"
                value={this.state.form.login}
                onChange={(event) =>
                  this.updateField({ login: (event.target as HTMLInputElement).value })
                }
              />
            </div>

            <div className="input-field">
              <label htmlFor="password" className="h3">
                Password
              </label>
              <Password
                id="password"
                value={this.state.form.password}
                onChange={(event) =>
                  this.updateField({ password: (event.target as HTMLInputElement).value })
                }
              />
            </div>

            <Button label="Log In" />
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
