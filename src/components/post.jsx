import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './avatar'
import {Comment} from './comment'
import styles from './post.module.css'
import { useState } from 'react'

 
 

export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        'Post muito bacana hein ?!'
    ])

    const [newCommentText , setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    } )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix:true
    })

    function handleCreateNewComment(e) {
        console.log('oi');

        //const newCommentText = event.target.comment.value
        //Ao pegar o comentário deixar o campo vazio 
        //event.target.comment.value = ''
        console.log(event.target.comment.value);
        //retorna o formulário 
        //quando colocamos um atributo name na tag <textarea/>
        // e vamos dar um log nela. conseguimos acessar as propriedades que tem nela 
        //para pegar o valor dessa textArea basta pegar o 'value'
        
        setNewCommentText('')
        //estado que armazena o conteúdo da nossa textArea 
         
        e.preventDefault();
        //imutabilidade 
        setComments([...comments, newCommentText]);
        console.log(comments);
        
    }


    function handleNewCommentChange(params) {
        console.log('teste');
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        
    }

    function handleNewComentInvalid(params) {
        event.target.setCustomValidity('Este campo é obrigatório')   
    }

    function deleteComment(comment) {
        console.log(`deletar comentário ${comment}`);
        //imutabilidade - as variáveis não sofrem mutação.Nunca alteramos uma variável na memória
        //nos criamos um novo valor(espaço)
        //isso quer dizer que quando chamamos a função setComments , nos não estamos atualizando o valor dela 
        // nos estamos criando um novo espaço na memória
        //imutabilidade nos permite ser mais performático criando um novo vaor para var comment 
        
        const commentsWhithoutDeleteOne = comments.filter(commentToDelete => {
            return comment != commentToDelete;
        })
        setComments(commentsWhithoutDeleteOne)
        
    }


    const isNewCommentInputEmpty = newCommentText.length === 0;
    
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
                    return <p key={line.content}>{line.content}</p>
                }else if(line.type === 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
               })}
                
            </div>
            {/* COMENTÁRIO */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm} action="">
                <strong>Preencha seu formulário</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    //este value vai limpar todo o campo após fazer uma publicação
                    //value define o valor da textArea. Que é o valor inicial que começa teoricamente em branco 
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewComentInvalid}
                    required 
                />

                
                <footer>
                    <button type="submit" disabled={isNewCommentInputEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )
                })}
            </div>
        </article>
    )
}