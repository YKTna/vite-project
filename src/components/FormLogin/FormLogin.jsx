import classes from './FormLogin.module.css'
import { useState } from 'react'

export default function FormLogin() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('red')
  const [hasError, sethasError] = useState(false)

  function handlerNameChange(event) {
    setName(event.target.value)
    sethasError(event.target.value.trim().length === 0)
  }
  return (
    <section className={classes.container}>
      <form action="">
        <label htmlFor="name" className={classes.controlLabel}>Введите имя</label>
        <input 
          id="name" 
          type="text" 
          className={classes.controlInput} 
          placeholder='Type Text' 
          value={name}
          onChange={handlerNameChange}
          style={{
            border: hasError ? '1px solid red' : null
          }}
        />
        <select 
          className={classes.controlSelect} 
          value={color} 
          onChange={e => setColor(e.target.value)}>
          <option value="red">Красный</option>
          <option value="green">Зеленый</option>
          <option value="blue">Синий</option>
        </select>
        <button className={classes.controlButton}></button>
        <p>Name: {name}</p>
        <p>Color: {color}</p>
      </form>
    </section>
  )
}