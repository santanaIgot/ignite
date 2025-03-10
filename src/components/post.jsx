import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './avatar'
import {Comment} from './comment'
import styles from './post.module.css'
import { useState } from 'react'

 
 

export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        1,
        2,
    ])

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    } )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix:true
    })

    function handleCreateNewComment(e) {
        console.log('oi');
         
        e.preventDefault();
        //imutabilidade 
        setComments([...comments, comments.length + 1]);
        console.log(comments);
        
    }


    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}            
                </time>
            </header>
            <div className={styles.content}>
                
               {content.map(line => {
                if(line.type === 'paragraph'){
                    return <p>{line.content}</p>
                }else if(line.type === 'link'){
                    return <p><a href="#">{line.content}</a></p>
                }
               })}
                
            </div>
            {/* COMENTÁRIO */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm} action="">
                <strong>Preencha seu formulário</strong>

                <textarea
                    placeholder='Deixe seu comentário '
                />

                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment/>
                })}
            </div>
        </article>
    )
}