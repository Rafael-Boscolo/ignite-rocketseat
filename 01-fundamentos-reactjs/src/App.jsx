import { Post } from './components/Post.jsx';
import { Header } from './components/header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
