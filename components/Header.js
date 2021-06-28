import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        On n&apos;apprends Next dans la bonne hummeur !
      </p>
    </div>
  )
}

export default Header