import { useEffect, useState } from 'react'
import classes from './SectionAbout.module.css'
import Footer from '../../Footer/Footer.tsx'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks.tsx'
import { getTitle, getMapLink, getArrLink, getFooter, setTitle, setFooter } from '../../../store/about.tsx'

export default function SectionAbout() {
  const aboutFooter = useAppSelector(getFooter)
  const title = useAppSelector(getTitle)
  const mapLink = useAppSelector(getMapLink)
  const arrLink = useAppSelector(getArrLink)
  console.log(aboutFooter)

  const dispatch = useAppDispatch()

  const handle = () => {
    dispatch(setTitle('влмтдвмтл'))
  }

  const handleFooter = () => {
    dispatch(setFooter({copyright: 'влмтдвмтл'}))
  }


  return (
    <>
      <section className={classes.container}>
        <h2 className={classes.cWhite}>{title}</h2>
        <button onClick={handle}>Поменять</button>
        <div className={classes.containerLinks}>
          {arrLink.map((item, index) => (
            <div className={classes.divLink}  key={index}>
              <img src={item.src} alt={item.alt} />
              <a href="#" className={classes.link}>{item.name}</a>
            </div>
          ))}
        </div>
        <iframe src={mapLink} style={{ border: 'none' }} width="500" height="500" ></iframe>
      </section>
      <Footer info={aboutFooter} />
      <button onClick={handleFooter}>Поменять</button>

    </>
  )
}

