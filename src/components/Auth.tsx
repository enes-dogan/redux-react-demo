import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth.ts';

const Auth = () => {
  const dispatch = useDispatch();

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    form.reset();

    dispatch(authActions.login());
  }

  return (
    <main className="auth">
      <section>
        <form onSubmit={handleLogin}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
