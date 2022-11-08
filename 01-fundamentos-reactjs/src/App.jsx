import { Post } from './components/Post.jsx';
import { Header } from './components/header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/72740970?v=4',
      name: 'Rafael Boscolo',
      role: 'Developer Web @mg'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},

      { type: 'link', content: '👉 rafael.boscolo/web developer'},
      // <a href="" >#novoprojeto </a>{' '}
      // <a href="" >#nlw</a>{' '}
      // <a href="" >#rocketseat</a>{' '}
    ],

    publishedAt: new Date('2022-11-05 14:00:00')
  },

  {
    id: 2 ,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/72740970?v=4',
      name: 'Leandro Jo',
      role: 'Educator Full Stack @mg'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},

      { type: 'link', content: '👉 rafael.boscolo/web developer'},
      // <a href="" >#novoprojeto </a>{' '}
      // <a href="" >#nlw</a>{' '}
      // <a href="" >#rocketseat</a>{' '}
    ],

    publishedAt: new Date('2022-11-07 16:00:00')
  },
];

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
          })}
        </main>
      </div>
    </div>
  )
}
