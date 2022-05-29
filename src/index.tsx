import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IContextProvider } from './components/models/ContextProvider';
import PostStore from './store/PostStore';
import UserStore from './store/UserStore';
import CommentStore from "./store/CommentStore";

const user = new UserStore()
const post = new PostStore()
const comment = new CommentStore()

export const Context = createContext<IContextProvider>({user, post, comment})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    post: new PostStore(),
    comment: new CommentStore(),
  }}>
    <App />
  </Context.Provider>
);