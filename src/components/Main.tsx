import FormLogin from './FormLogin/FormLogin.tsx'
import { useState } from 'react'
import Tasks from './Tasks/Tasks.tsx'
import Footer from './Footer/Footer.tsx'

const data = ['Home', 'About as', 'Servoces', 'Contacts']
const textOnPage = {
  'btn1': 'Текст 1',
  'btn2': 'Текст 2',
  'btn3': 'Текст 3',
  'btn4': 'Текст 4'
}

export default function Main() {
  const [contentType, setContentType] = useState(null)
  const altText = 'Text'
  const mainFooter = {
    copyright: '© 2026 О нас. Мы работаем для вас.'
  }

  return (
    <>
      <header>
        <Tasks />
        <Footer info={mainFooter} />
      </header>
      {/* <FormLogin /> */}
    </>
  )
}