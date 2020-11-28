import Link from 'next/link'
import classnames from 'classnames'
import styles from 'styles/layout.module.css'

const Header = () => (
  <header className={classnames(styles.baseContainer, styles.header)}>
    <Link href="/">
      <img src="https://www.datto.com/grid-assets/img/datto-logo-blue-datto.0f6cddcb.svg" />
    </Link>
  </header>
)

export default Header
