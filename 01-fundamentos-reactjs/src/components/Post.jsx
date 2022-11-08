import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';

import styles from './Post.module.css';

export function Post(props) {
    console.log(props)

    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar 
                        hasBorder
                        src="https://avatars.githubusercontent.com/diego3g"
                    />

                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <data title="03 de Novembro de 2022 às 08:50" dateTime="2022/11/03 08:50">Publicado há 1h atrás</data>
            </header>

            <div className={styles.content}>
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