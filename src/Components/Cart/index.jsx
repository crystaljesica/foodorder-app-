import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
//这是私有的目录，服务器访问不到，所以在这里引入
import iconImg from '../../asset/bag.png'
import CartContext from '../../Components/store/cart-context'
import CartDetails from './Details/CartDetails'
import Checkout from './Checkout'


const Cart = () => {
    const ctx = useContext(CartContext);
    //设置结账页的显示与隐藏
    const [showCheckout, setShowCheckout] = useState(false);
    //添加一个state来设置详情是否显示
    const [showDetails, setShowDetails] = useState(false);
    //组件每次重新渲染的适合，检查商品总数量，如果数量为0，则修改showDetails为false
    useEffect(() => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            setShowCheckout(false);
        }
    }, [ctx, setShowDetails, setShowCheckout])



    // 关闭模态框
    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    }

    //添加一个显示详情页的函数
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            return;
        }
        setShowDetails(prevState => !prevState);
    }

    const showCheckoutHandler = () => {
        if (ctx.totalAmount === 0) return;
        setShowCheckout(true)
    }


    return (
        <>
            <div className={styles.Cart} onClick={toggleDetailsHandler}>
                {/* todo：这里有一个bug */}
                {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
                {showDetails && <CartDetails />}

                <div className={styles.Icon}>
                    <img src={iconImg} alt="购物袋" />
                    {ctx.totalAmount === 0 ? null : <span className={styles.TotalAmount}>{ctx.totalAmount}</span>}

                </div>
                {ctx.totalAmount === 0 ? <p className={styles.noMeal}>未选购商品</p> : <p className={styles.Price}>{ctx.totalPrice}</p>}

                <button className={`${styles.Button} ${ctx.totalAmount === 0 ? styles.Disabled : ''}`} onClick={showCheckoutHandler}>去结算</button>
            </div>
        </>
    )
}
export default Cart;