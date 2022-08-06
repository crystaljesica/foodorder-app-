import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import styles from './Checkout.module.css'
import { CloseSmall } from '@icon-park/react'
import CartContext from '../../store/cart-context'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import PayBar from './PayBar'

const checkoutRoot = document.getElementById('checkout-root')
const Checkout = (props) => {
    const ctx = useContext(CartContext)
    return ReactDOM.createPortal(
        <div className={styles.Checkout}>
            <div className={styles.close} onClick={() => props.onHide()}>
                <CloseSmall theme="outline" size="24" fill="#333" />
            </div>
            <div className={styles.MealsDesc}>
                <header className={styles.header}>
                    <h2>餐品详情</h2>
                </header>
                <div className={styles.Meals}>
                    {ctx.items.map(item => <CheckoutItem key={item.id} meal={item} />)}
                </div>
                <footer className={styles.footer}>
                    <p className={styles.price}>{ctx.totalPrice}</p>
                </footer>
            </div>
            <PayBar />
        </div>,
        checkoutRoot
    )
}
export default Checkout;