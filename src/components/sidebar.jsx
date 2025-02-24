import styles from "./sidebar.module.css";
import img from '../assets/img2.avif';
import { PencilLine } from 'phosphor-react';


export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src={img} />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/126727096?v=4"/>
        <strong>Ig</strong>
        <span>Web Developer </span>
      </div>
      <footer>
        <a href="#">
            <PencilLine/>
            Editar seu perfil 
        </a>
      </footer>
    </aside>
  );
}
