import { useRouter } from 'next/router'
import styles from 'styles/policy.module.css'

const Sites = () => {
  const router = useRouter()
  const { id } = router.query

  return <div className={styles.sites}>Sites: {id}</div>
}

export default Sites
