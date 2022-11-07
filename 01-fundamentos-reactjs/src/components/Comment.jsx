import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/72740970?v=4" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Boscolo</strong>

                            <data title="03 de Novembro de 2022 às 08:50" dateTime="2022/11/03 08:50">Cerca de 1h atrás</data>
                        </div>

                        <button title="deletar">
                                <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Dev, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}