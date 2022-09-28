import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
  return (
    <ul className={styles.navigation}>
      <li><Link href="/">Home</Link></li>
      <li><a href="#">Paginacao</a></li>
    </ul>
  )
}