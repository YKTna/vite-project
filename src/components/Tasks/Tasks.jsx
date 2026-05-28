import classes from './Tasks.module.css'
import { useEffect, useState } from 'react'

  const arr = [
    {id: 1, name: 'Вытереть пыль', isChecked: false, end: '29.05.2026'},
    {id: 2, name: 'Помыть посуду', isChecked: false, end: '26.05.2026'},
    {id: 4, name: 'Погладить', isChecked: false, end: '30.05.2026'}, 
    {id: 3, name: 'Постирать вещи', isChecked: false, end: '01.06.2026'}, 
    {id: 5, name: 'Помыть пол', isChecked: false, end: '12.06.2026'}
  ];

export default function Tasks() {
  const [task, setTask] = useState('');
  const [dateTask, setDateTask] = useState('');
  const [filteredValue, setFilteredValue] = useState('');
  const [arrTasks, setArrTasks] = useState(arr);
  const [sortingType, setSortingType] = useState('ASC');
  const [sortingTypeName, setSortingTypeName] = useState('ASC');
  const [value, setValue] = useState('');

  const func = ((r) => {
    setArrTasks(r)
    localStorage.setItem('myKey', JSON.stringify(r))
  })

  const handleAddTask = () => {
    if (task !== '' && dateTask !== '') {
      const p = [...arrTasks]
      const date = new Date(dateTask)
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const formattedDate = `${day}.${month}.${year}`;
      const obj = {id: arrTasks.length + 1, name: task, end: formattedDate}
      p.push(obj)
      func(p)
      setTask('')
      setDateTask('')
    }

  };

  const handleDeleteTask = (id) => {
    const filter = arrTasks.filter((el) => el.id !== id)
    func(filter);
  }

  const handleSortedNumber = () => {
    if(sortingType == 'ASC') {
      const arrCopy = [...arrTasks]
      const res = arrCopy.sort((a, b) => a.id - b.id)
      func(res)
      setSortingType('DESC')
    } else {
      const arrCopy = [...arrTasks]
      const res = arrCopy.sort((a, b) => a.id - b.id).reverse()
      func(res)
      setSortingType('ASC')
    }
  }

  const handleSortedName = () => {
    if(sortingTypeName == 'ASC') {
      const arrCopy = [...arrTasks]
      const res = arrCopy.sort((a, b) => a.name.localeCompare(b.name))
      func(res)
      setSortingTypeName('DESC')
    } else {
      const arrCopy = [...arrTasks]
      const res = arrCopy.sort((a, b) => a.name.localeCompare(b.name)).reverse()
      func(res)
      setSortingTypeName('ASC')
    }
  }

  const handleChange = (e) => {
    setFilteredValue(e.target.value)
  };

  const filterValue = () => {
    const res = arrTasks.filter((el) => el.name.toLowerCase().includes(filteredValue.toLowerCase()))

    return res;
  }

  const dateHalfEnd = (e) => {
    const now = new Date();
    const [day, month, year] = e.split('.');
    const dateObject = new Date(year, month - 1, day);
    const res =  Math.abs(dateObject - now)
    const resDays = Math.ceil(res / (1000 * 60 * 60 * 24));
    if(resDays <= 3) {
      return true
    }
  }

  const dateEnd = (e) => {
    const now = new Date();
    const [day, month, year] = e.split('.');
    const dateObject = new Date(year, month - 1, day);
    const res =  Math.abs(dateObject - now)
    const resDays = Math.ceil(res / (1000 * 60 * 60 * 24));
    if(resDays == 0) {
      return true
    }
  }

  const checked = (el, id) => {
    const res = arrTasks.map((e) => {
      if(e.id == id) {
        if(e.isChecked === false) {
          e.isChecked = true
          return e
        } else {
          e.isChecked = false
          return e
        }
      } else {
        return e
      }
    })
    func(res)
  }

  const rows = filterValue().map(function(item) {
    return <tr key={item.id}>
      <td className={classes.border}>{item.id}</td>
      <td className={`${classes.border} 
        ${item.isChecked ? classes.cancel : ''}
        ${dateHalfEnd(item.end) ? classes.halfEnd : ''}
        ${dateEnd(item.end) ? classes.end : ''} `}>{item.name}</td>
      <td className={classes.border}>{item.end}</td>
      <td className={classes.border}>
        <input 
          type="checkbox" 
          checked={item.isChecked}
          onChange={(e) => checked(e, item.id)}
        />
      </td>
      <td className={classes.border}>
        <img 
          src="trash.png"
          alt='Удалить'
          className={`${classes.taskTrash}`}
          onClick={() => handleDeleteTask(item.id)}
        />
      </td>
    </tr>
  })

  return (
    <section className={classes.container}>
      <h1>Задачи на день</h1>
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
            <td className={`${classes.border} ${classes.bold}`}>Удалить</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <div className={classes.addTask}>
        <h2>Добавить задачу</h2>
        <input 
          className={classes.taskInput}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Новая задача..." />
        <div className={classes.divContainer}>
          <label>Введите дату завершения:</label>
          <input
            type="date"
            value={dateTask}
            onChange={(e) => setDateTask(e.target.value)} />
        </div>
        <button className={classes.addTaskButton} onClick={handleAddTask}>Добавить</button>
      </div>
    </section>

  )
}