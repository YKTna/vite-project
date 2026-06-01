import React from 'react';
import { useEffect, useState } from 'react'
import classes from './Footer.module.css'

interface FooterProps {
  info: {
    copyright: string;
  };
}

export default function Footer({info}: FooterProps) {
  return (
    <footer className={classes.footer}>
      <p>{info.copyright}</p>
    </footer>
  )
}

// © 