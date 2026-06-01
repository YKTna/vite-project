import { useEffect, useState } from 'react'
import classes from './Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Задачник</h1>
      <div className={classes.divContainer}>
        <a href="/" className={classes.link}>Главная</a>
        <a href="/about" className={classes.link}>О нас</a>
        <a href="/basket" className={classes.link}>🛒 Корзина</a>
      </div>
    </header>
  )
}