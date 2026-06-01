import React from 'react';
import { useEffect, useState } from 'react'
import classes from './Footer.module.css'

export default function Footer({info}) {
  return (
    <footer className={classes.footer}>
      <p>{info.copyright}</p>
    </footer>
  )
}

// © 