import { Avatar } from './avatar'
import {Comment} from './comment'
import styles from './post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src="https://github.com/santanaIgot.png" />
                    <div className={styles.authorInfo}>
                        <strong>Igor Ferreira Santana</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de maio as 08:13:14' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href=''>👉 jane.design/doctorcare</a></p>
                <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
                
            </div>
            {/* COMENTÁRIO */}
            <form className={styles.commentForm} action="">
                <strong>Preencha seu formulário</strong>

                <textarea
                    placeholder='Deixe seu comentário '
                />

                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}