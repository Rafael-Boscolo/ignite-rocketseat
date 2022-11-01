import styles from './Post.module.css';

export function Post(props) {
    return (
        <div>
            <article className={styles.Post}>
                <header>
                    <div className={styles.author}>
                        <img src="https://avatars.githubusercontent.com/u/72740970?v=4" />
                        <div className={styles.authorInfo}>
                            <strong>Rafael Boscolo</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </header>
            </article>
        </div>
    )
}