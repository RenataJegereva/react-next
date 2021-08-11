import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Test</span> text
      </h1>
      <p className={headerStyles.description}>
        Something to show on every page
      </p>
    </div>
  )
}

export default Header