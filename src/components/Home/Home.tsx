import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks.tsx"
import { getTitle, setTaskTitle } from "../../store/task.tsx"


export default function Home() {
  const title = useAppSelector(getTitle)
  const dispatch = useAppDispatch()
  
  const handletitle = () => {
    dispatch(setTaskTitle('влмтдвмтл'))
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handletitle}>Поменять</button>

    </div>
  )
}