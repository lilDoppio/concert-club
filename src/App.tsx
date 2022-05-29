import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { fetchAllUsers } from './http/userAPI';
import { fetchAllPosts } from './http/postAPI';

function App() {
  const {user, post} = useContext(Context)

  useEffect(() => {
    fetchAllUsers().then(res => user.setUsers(res))
    fetchAllPosts().then(res => post.setPosts(res))
  }, [])

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
