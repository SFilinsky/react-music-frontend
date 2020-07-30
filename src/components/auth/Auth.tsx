import React, { createRef, FormEvent, RefObject } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import ReactDOM from 'react-dom';

class Auth extends React.Component {
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

  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSubmit(event: FormEvent) {
    // Console.log(this.state);
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

  render() {
    return (
      <div ref={this.wrapper as RefObject<HTMLDivElement>} className="rm-auth">
        <Card>
          <form onSubmit={this.handleSubmit}>
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

export default Auth;
