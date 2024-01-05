import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth.ts';

import { authStateType } from '../types.ts';

const Header = () => {
  const isAuth = useSelector((state: authStateType) => state.auth.isAuth);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logout());
  }

  return (
    <header className="header">
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
