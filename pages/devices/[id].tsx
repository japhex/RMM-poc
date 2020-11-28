import { useRouter } from 'next/router'

const Device = () => {
  const router = useRouter()
  const { id } = router.query

  return (
      <>Device: {id}</>
  )
}

export default Device
