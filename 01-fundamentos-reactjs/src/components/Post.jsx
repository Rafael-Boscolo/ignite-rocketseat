import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar 
                        hasBorder
                        src="https://avatars.githubusercontent.com/diego3g"
                    />

                    <div className={styles.authorInfo}>
                        <strong>Rafael Boscolo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <data title="03 de Novembro de 2022 às 08:50" dateTime="2022/11/03 08:50">Publicado há 1h atrás</data>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
                    O nome do projeto é DoctorCare 🚀
                </p>
                <p><a href=""
                    target="_blank">👉 rafael.boscolo/web developer</a>
                </p>
                <p>
                    <a href="" >#novoprojeto </a>{' '}
                    <a href="" >#nlw</a>{' '}
                    <a href="" >#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.comentForm} >
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário" />

                <footer>
                        <button type="submit" >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}