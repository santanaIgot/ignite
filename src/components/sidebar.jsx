import styles from "./sidebar.module.css";
import { PencilLine } from 'phosphor-react';
import {Avatar} from "./avatar";


export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://avatars.githubusercontent.com/u/126727096?v=4"/>
      <div className={styles.profile}>
        <Avatar src="https://github.com/LucasSpinelli003.png"/>
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
