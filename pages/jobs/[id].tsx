import { useRouter } from 'next/router'
import styles from 'styles/policy.module.css'

const Job = () => {
  const router = useRouter()
  const { id } = router.query

  return <div className={styles.job}>Job: {id}</div>
}

export default Job
