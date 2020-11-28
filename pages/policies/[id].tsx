import { useRouter } from 'next/router'
import styles from 'styles/policy.module.css'

const Policy = () => {
  const router = useRouter()
  const { id } = router.query
  // make request, get record by id

  return <div className={styles.policy}>Policy: {id}</div>
}

export default Policy
