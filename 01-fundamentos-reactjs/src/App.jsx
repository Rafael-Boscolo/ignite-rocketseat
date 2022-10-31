import { Post } from './Post.jsx';
import { Header } from './components/header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
          author="Rafael"
          content="Primeiro post de teste da aplicação"
          />

          <Post 
            author="Jhon"
            content="Segundo post de teste da aplicação"
          />

          <Post 
            author="Leandro"
            content="Terceiro posr de testes da aplicação"
          />
        </main>
      </div>
    </div>
  )
}
