import React, { useContext } from 'react';
import classes from './Counter.module.css';
import CartContext from '../../store/cart-context';
import '@icon-park/react/styles/index.css'
import { Plus } from '@icon-park/react'
import { Minus } from '@icon-park/react'


// 计数器的组件
const Counter = (props) => {
    const ctx = useContext(CartContext)
    const addButtonHandler = () => {
        // ctx.addItem(props.meal)
        ctx.cartDispatch({ type: 'ADD', meal: props.meal });
    }
    const delButtonHandler = () => {
        ctx.cartDispatch({ type: 'REMOVE', meal: props.meal });
    }

    return (

        < div className={classes.Counter} >
            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button
                            onClick={delButtonHandler}
                            className={classes.Sub}><Minus theme="outline" size="16" fill="#333" /></button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </>
                ) : null
            }

            <button
                onClick={addButtonHandler}
                className={classes.Add}>
                <Plus theme="outline" size="16" fill="#333" />
            </button>
        </div >
    );
};

export default Counter;
