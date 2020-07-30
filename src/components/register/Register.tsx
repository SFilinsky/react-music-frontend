import React, { createRef, FormEvent, RefObject } from 'react';
import './Register.scss';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import ReactDOM from 'react-dom';
import { Button } from 'primereact/button';

class Register extends React.Component {
  wrapper = createRef();

  state = {
    form: {
      login: '',
      password: '',
      email: '',
      validPassword: '',
      match: true,
    },
  };

  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
  }

  private handleSubmit(event: FormEvent) {
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

  private checkPasswords(first: string, second: string) {
    this.updateField({ match: first === second });
  }

  private buildLabel() {
    const { match } = this.state.form;
    let label;
    if (match) {
      label = <label></label>;
    } else {
      label = (
        <div className="margi">
          <label className="h5">Passwords do not match</label>
        </div>
      );
    }
    return label;
  }

  private getForm() {
    return (
      <form>
        <div className="input-field">
          <label className="h3"> Username</label>
          <InputText
            className=""
            value={this.state.form.login}
            onChange={(event) =>
              this.updateField({ login: (event.target as HTMLInputElement).value })
            }
          />
        </div>
        <div className="input-field">
          <label className="h3"> E-mail </label>
          <InputText
            value={this.state.form.email}
            onChange={(event) =>
              this.updateField({ email: (event.target as HTMLInputElement).value })
            }
          />
        </div>
        <div className="input-field">
          <label className="h3"> Password </label>
          <Password
            value={this.state.form.password}
            onChange={(event) =>
              this.updateField({ password: (event.target as HTMLInputElement).value })
            }
          />
        </div>
        <div className="input-field">
          <label className="h3"> Confirm your password </label>
          <Password
            value={this.state.form.validPassword}
            onChange={(event) => {
              this.updateField({ validPassword: (event.target as HTMLInputElement).value });
              this.checkPasswords(
                this.state.form.password,
                (event.target as HTMLInputElement).value,
              );
            }}
          />
        </div>
        {this.buildLabel()}
        <Button label="Sign Up" />
      </form>
    );
  }

  render() {
    return (
      <div ref={this.wrapper as RefObject<HTMLDivElement>} className="rm-register">
        <Card>{this.getForm()}</Card>
      </div>
    );
  }
}

export default Register;
