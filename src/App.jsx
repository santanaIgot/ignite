import { Post } from './components/post'
import './global.css'
import { Header } from './components/header'
import styles from './App.module.css'
import Sidebar from './components/sidebar'

export function App() {
  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
          <Post 
            author="Iguete" 
            content="lorem"
          />
            <Post 
            author="Iguete" 
            content="lorem"
          />
          </main>
        </div>
        
    </div>
    
  )
}


