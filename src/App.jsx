import { Post } from './components/post'
import './global.css'
import { Header } from './components/header'
import styles from './App.module.css'
import Sidebar from './components/sidebar'

//author : {avatar_url:"", name:"", role:""}
//publishedAt: Date 
//content: String

//cada posição dentro deste array vai ser um objeto
const posts = [
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/nsdYuri.png',
      name:'Yuri Chichedom',
      role:'CTO Solutech'
    },

    content: [
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
      {type:'paragraph', content:'#novoprojeto #nlw #rocketseat'},
      
    ],

    publishedAt:new Date('2022-05-03 20:35:06')
  },


  {
    id: 2,
    author:{
      avatarUrl:'https://github.com/alexandre-oliveira-dev.png',
      name:'Lele',
      role:'CTO TMOB'
    },

    content: [
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
      {type:'paragraph', content:'#novoprojeto #nlw #rocketseat'},
      
    ],

    publishedAt:new Date('2022-05-03 20:35:06')
  },

  {
    id: 3,
    author:{
      avatarUrl:'https://github.com/LucasSpinelli003.png',
      name:'LUquinhas',
      role:'dono TMOB'
    },

    content: [
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
      {type:'paragraph', content:'#novoprojeto #nlw #rocketseat'},
      
    ],

    publishedAt:new Date('2022-05-03 20:35:06')
  },
]

//iteração
//vamos percorrer um array e para cada iteração do array vamos fazer algo


//método foreach() percorre um array porém não tem nenhum retorno 
//método map() percorre um array e retorna algo de dentro dele 

export function App() {
  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
          {posts.map(post => {
            return (
              <Post
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
          </main>
        </div>
        
    </div>
    
  )
}


