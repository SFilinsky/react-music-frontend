export const AuthEndpoints = {
  login: (username: string, password: string): Promise<{ accessToken: string }> => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };
    return fetch('http://localhost:30000/auth/login', requestOptions).then((response: Response) =>
      response.json(),
    );
  },

  register: (username: string, password: string, email: string) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://localhost:3000',
      },
      body: JSON.stringify({ username, password, email }),
    };
    return fetch('http://localhost:30000/auth/register', requestOptions);
  },
};
