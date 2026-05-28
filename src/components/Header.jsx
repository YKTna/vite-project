import FormLogin from './FormLogin/FormLogin'
import MenuItem from './MenuItem/MenuItem'
import { useState } from 'react'
import Tasks from './Tasks/Tasks'

const data = ['Home', 'About as', 'Servoces', 'Contacts']
const textOnPage = {
  'btn1': 'Текст 1',
  'btn2': 'Текст 2',
  'btn3': 'Текст 3',
  'btn4': 'Текст 4'
}

export default function Header() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  const altText = 'Text'

  return (
    <>
      <header>
        {/* <ul>
          <MenuItem 
            isActive={contentType==='btn1'} 
            onClick={()=>handleClick('btn1')}
          >{data[0]}</MenuItem>
          <MenuItem 
            isActive={contentType==='btn2'} 
            onClick={()=>handleClick('btn2')}
          >{data[1]}</MenuItem>
          <MenuItem 
            isActive={contentType==='btn3'} 
            onClick={()=>handleClick('btn3')}
          >{data[2]}</MenuItem>
          <MenuItem 
            isActive={contentType==='btn4'} 
            onClick={()=>handleClick('btn4')}
          >{data[3]}</MenuItem>
        </ul>
        
        {contentType ? (<p>{textOnPage[contentType]}</p>) : (<p>Выполните клик по кнопке</p>)} */}
        <Tasks />
      </header>
      {/* <FormLogin /> */}
    </>
  )
}