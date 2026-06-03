import React from 'react';
import { useEffect, useState } from 'react'
import classes from './Counter.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks.tsx';
import { decrementBy, getCount, incrementBy } from '../../store/counter.tsx';

export default function Counter() {
  const count = useAppSelector(getCount)
  const dispatch = useAppDispatch()
  const handleIncrement = () => {
    dispatch(incrementBy(3))
  }
  const handleDecrement = () => {
    dispatch(decrementBy(2))
  }

  return (
    <div className={classes.container}>
      <h2>Число из стора: {count}</h2>
      <div className={classes.buttons}>
        <button onClick={handleIncrement} className={classes.button}> Увеличить число на 3</button>
        <button onClick={handleDecrement} className={classes.button}> Уменьшить число на 2</button>
      </div>
    </div>
  )
}