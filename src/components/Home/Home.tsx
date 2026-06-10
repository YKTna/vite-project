import classes from './Home.module.css'
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks.tsx"
import { getArrTable, getTitle, addTask, setTaskTitle, deleteTask, sortingTypeNumber, sortingNumber, sortingTypeName, sortingName, ArrTable, checked } from "../../store/task.tsx"
import { useEffect, useState } from 'react'


export default function Home() {
  const [addInputValue, setAddInputValue] = useState('')
  const [dateTask, setDateTask] = useState('');
  const [filteredValue, setFilteredValue] = useState('');
  const [filteredArray, setFilteredArray] = useState<ArrTable[]>([]);
  const title = useAppSelector(getTitle)
  const dispatch = useAppDispatch()
  const handletitle = () => {
    dispatch(setTaskTitle('влмтдвмтл'))
  }
  const arrTable = useAppSelector(getArrTable)
  const handleArr = () => {
    dispatch(addTask({
      addInputValue: addInputValue, 
      dateTask: dateTask
  }))
    setAddInputValue('')
  }
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
  }

  const sortingTypeN = useAppSelector(sortingTypeNumber)
  const handleSortedNumber = () => {
    dispatch(sortingNumber(sortingTypeN))
  }

  const sortingTypeNam = useAppSelector(sortingTypeName)
  const handleSortedName = () => {
    dispatch(sortingName(sortingTypeNam))
    console.log(sortingTypeNam)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredValue(e.target.value)
  };

  useEffect(() => {
    if(filteredValue != '') {
      setFilteredArray(arrTable.filter((el) => el.name.toLowerCase().includes(filteredValue.toLowerCase())))
    } else {
      setFilteredArray(arrTable)
    }
  }, [filteredValue, arrTable])

  const handleChecked = ( id: number) => {
    dispatch(checked(id))
  }

  const dateHalfEnd = (e: string) => {
    const now = new Date();
    const [day, month, year] = e.split('.');
    const dateObject = new Date(Number(year), Number(month) - 1, Number(day));
    const res =  Math.abs(dateObject.getTime() - now.getTime())
    const resDays = Math.ceil(res / (1000 * 60 * 60 * 24));
    if(resDays <= 3) {
      return true
    }
  }

  const dateEnd = (e: string) => {
    const now = new Date();
    const [day, month, year] = e.split('.');
    const dateObject = new Date(Number(year), Number(month) - 1, Number(day));
    const res =  Math.abs(dateObject.getTime() - now.getTime())
    const resDays = Math.ceil(res / (1000 * 60 * 60 * 24));
    if(resDays == 0) {
      return true
    }
  }

  const completed = (e: boolean) => {
    console.log(e)
    if(e) {

    }
  }



  const rows = filteredArray.map(function(item) {
    return <tr key={item.id}>
      <td className={classes.border}>{item.id}</td>
      <td className={`${classes.border}
        ${dateHalfEnd(item.end) ? classes.halfEnd : ''}
        ${dateEnd(item.end) ? classes.end : ''}
        ${item.isChecked ? classes.cancel : ''}`}
      >{item.name}</td>
      <td className={classes.border}>{item.end}</td>
      <td className={classes.border}>
        <input 
          type="checkbox" 
          checked={item.isChecked}
          onChange={() => handleChecked(item.id)}
        />
      </td>
      <td className={classes.border}>
        <button onClick={() => handleDelete(item.id)}>Удалить</button>
      </td>
    </tr>
  })

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handletitle} className={classes.taskButton}>Поменять Заголовок</button>
      <div className={classes.divContainer}>
        <button className={classes.taskButton} onClick={handleSortedNumber}>Сортировка по номеру</button>
        <button className={classes.taskButton} onClick={handleSortedName}>Сортировка по названию</button>
      </div>
      <div className={classes.divInput}>
        <h2>Поиск по списку</h2>
        <input 
        className={classes.taskInput}
        onChange={handleChange}
        placeholder="Поиск по задачам..." />
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <td className={`${classes.border} ${classes.bold}`}>Номер</td>
            <td className={`${classes.border} ${classes.bold}`}>Название</td>
            <td className={`${classes.border} ${classes.bold}`}>Дата окончания</td>
            <td className={`${classes.border} ${classes.bold}`}>Выполнение</td>
            <td className={`${classes.border} ${classes.bold}`}>Удаление</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <div className={classes.addTask}>
        <input 
        value={addInputValue} 
        onChange={(e) => setAddInputValue(e.target.value)} 
        className={classes.taskInput}
        placeholder="Новая задача..."/>
        <div className={classes.divContainer}>
          <label>Введите дату завершения:</label>
          <input
            type="date"
            value={dateTask}
            onChange={(e) => setDateTask(e.target.value)} />
        </div>
        <button onClick={handleArr} className={classes.taskButton}>Добавить</button>
      </div>
    </div>
  )
}