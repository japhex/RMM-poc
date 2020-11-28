import Link from 'next/link'
import classnames from 'classnames'
import styles from 'styles/layout.module.css'

const Navigation = () => (
  <nav className={classnames(styles.baseContainer, styles.navigation)}>
    <ul>
      <li>
        <Link href="/sites">Sites</Link>
      </li>
      <li>
        <Link href="/devices">Devices</Link>
      </li>
      <li>
        <Link href="/jobs">Jobs</Link>
      </li>
      <li>
        <Link href="/policies">Policies</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
