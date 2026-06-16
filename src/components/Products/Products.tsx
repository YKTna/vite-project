import { useEffect, useState } from 'react';
import classes from './Products.module.css'
import { useAppDispatch } from "../../hooks/redux.hooks.tsx"
import { fetchProducts, toggleProducts } from "../../store/products.tsx"
import { RootState } from '../../store/store.tsx'; 
import { useDispatch, useSelector } from 'react-redux';


export default function ProductsPage() {
  const {status, error, items } = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const toggle = async (id: number) => {
    await dispatch(toggleProducts(id))
    await dispatch(fetchProducts())
  }

  return (
    <div className={classes.container}>
      <h1>Товары</h1>
      {status === 'loading' && <h2>Идет загрузка</h2>}
      {error && <h2>Error: {error}</h2>}
      <div className={classes.cards}>
        {items.map(product => (
          <>
            <div className={classes.card} key={product.id}>
              <img src={product.image} />
              <h3>{product.name}</h3>
              <p className={classes.text}>{product.description}</p>
              <p>Цена: {product.price} руб.</p>
              <button onClick={() => toggle(product.id)}>Изменить</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}