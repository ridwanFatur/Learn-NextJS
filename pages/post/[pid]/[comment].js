import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { pid , comment} = router.query

  return <p>Pid: {pid},  Comment: {comment}</p>
}

export default Comment