import { useSelector } from 'react-redux';
import { authStateType } from './types.ts';

import Auth from './components/Auth.tsx';
import Counter from './components/Counter.tsx';
import Header from './components/Header.tsx';
import UserProfile from './components/UserProfile.tsx';

function App() {
  const isAuth = useSelector((state: authStateType) => state.auth.isAuth);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
