import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'

export function Comment() {


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/santanaIgot.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    {/* este header vai ser onde vai ficar o nome */}
                    <header>
                        {/* dentro do header vamos ter uma seção que vai ficar por dentro do nome e data da publicação */}
                        <div className={styles.authorAndTime}>
                            <strong>Igor ferreira</strong>
                            <time title='11 de maio as 08:13:14' dateTime='2022-05-11 08:13:30'>Cerca de 1h</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    {/* Este <p> vai ser o conteúdo do comentário*/}
                    <p>Muito bom parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}