import { useEffect, useState } from 'react'
import classes from './SectionAbout.module.css'
import Footer from '../../Footer/Footer.tsx'

export default function SectionAbout() {
  const aboutFooter = {
    copyright: '© 2026 О нас. Год лошади.'
  }
  return (
    <>
      <section className={classes.container}>
        <h2 className={classes.cWhite}>Как найти нас в социальных сетях:</h2>
        <div className={classes.containerLinks}>
          <div className={classes.divLink}>
            <img src='./vk.svg' alt="Логотип вк" />
            <a href="#" className={classes.link}>Ссылка на наш паблик</a>
          </div>
          <div className={classes.divLink}>
            <img src='./maks.svg' alt="Логотип макс" />
            <a href="#" className={classes.link}>Ссылка на наш Макс</a>
          </div>
          <div className={classes.divLink}>
            <img src='./inst.svg' alt="Логотип Инстаграмм" />
            <a href="#" className={classes.link}>Ссылка на наш Инстаграмм</a>
          </div>
          <div className={classes.divLink}>
            <img src='./youTube.svg' alt="Логотип Ютуб" />
            <a href="#" className={classes.link}>Ссылка на наш Ютуб</a>
          </div>
          <div className={classes.divLink}>
            <img src='./telega.svg' alt="Логотип Телеграм" />
            <a href="#" className={classes.link}>Ссылка на наш Телеграм</a>
          </div>
          <div className={classes.divLink}>
            <img src='./twitter.svg' alt="Логотип Твиттер" />
            <a href="#" className={classes.link}>Ссылка на наш Твиттер</a>
          </div>
        </div>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3edec1e6966efbf16dba8b1a4993aa6e978615cce943105fa27d00da3ceeb53c&amp;source=constructor" style={{ border: 'none' }} width="500" height="500" ></iframe>
      </section>
      <Footer info={aboutFooter} />
    </>
  )
}

