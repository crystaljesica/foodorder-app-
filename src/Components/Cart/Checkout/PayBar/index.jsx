import React from 'react'
import styles from './PayBar.module.css'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

const PayBar = () => {
    const ctx = useContext(CartContext)
    return (
        <>
            <div className={styles.Cart} >

                {ctx.totalAmount === 0 ? <p className={styles.noMeal}>未选购商品</p> : <p className={styles.Price}>{ctx.totalPrice}</p>}

                <button className={`${styles.Button} ${ctx.totalAmount === 0 ? styles.Disabled : ''}`} >去支付</button>
            </div>
        </>
    )
}
export default PayBar;