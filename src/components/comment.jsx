import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

    //iniciar o estado com alguma informação que seja do mesmo tipo da informação que vamos armazenar 
    const [likeCount, setLikeCount] = useState(0)

    //Precisa aumentar o numero de likes no nosso comentário
    function handleLikeComment(params) {
        const newLikeCount = likeCount + 1; 

        setLikeCount(newLikeCount)
        //precisa saber quantos likes já tem para adicionar mais um 
    }

    function handleDeleteComment() {
        console.log('DEletar');
        onDeleteComment(content)
    }

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
                            <Trash onClick={handleDeleteComment} size={24}/>
                        </button>
                    </header>
                    {/* Este <p> vai ser o conteúdo do comentário*/}
                        {content}
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}