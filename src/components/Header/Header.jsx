import { useEffect, useState } from 'react'
import classes from './Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
      <h1>Задачник</h1>
      <div className={classes.divContainer}>
        <a href="/" className={classes.link}>Главная</a>
        <a href="/about" className={classes.link}>О нас</a>
      </div>
    </header>
  )
}