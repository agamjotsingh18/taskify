"use client";

import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TaskBoard from '../components/TaskBoard';
import Login from '../components/Login';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      {user ? <TaskBoard /> : <Login />}
    </div>
  );
};

export default Home;
