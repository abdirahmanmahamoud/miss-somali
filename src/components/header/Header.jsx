import style from './header.module.scss'
const Header = () => {
  return (
    <div>
        <header className={style.header}>
            <ul>
                <li><a href="#" className={style.logo}>Miss Somali</a></li>
                <li><a href="#">All Competitors</a></li>
            </ul>
        </header>
    </div>
  )
}

export default Header