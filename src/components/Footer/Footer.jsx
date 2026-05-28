import { useEffect, useState } from 'react'
import classes from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>© Какая-то супер-пупер компания</p>
    </footer>
  )
}