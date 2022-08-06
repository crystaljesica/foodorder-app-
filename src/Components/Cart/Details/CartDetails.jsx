import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Delete } from '@icon-park/react'
import styles from './CartDetails.module.css'
import CartContext from '../../store/cart-context';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm'

const CartDetails = () => {
    const ctx = useContext(CartContext);
    const [showConfirm, setShowConfirm] = useState(false);
    const showConfirmHandler = () => {
        setShowConfirm(true);
    }

    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    }

    const okHandler = () => {
        ctx.cartDispatch({ type: 'CLEAR' })
    }

    return (
        <>
            <Backdrop>
                {showConfirm && <Confirm onCancel={cancelHandler} onOk={okHandler} ConfirmText='你确定要清空购物车吗？' />}
                <div className={styles.CartDetails}
                    onClick={e => e.stopPropagation()}
                >
                    <header className={styles.header}>
                        <h2 className={styles.title}>餐品详情</h2>

                        <div className={styles.clear} onClick={showConfirmHandler}>
                            <Delete theme="outline" size="24" fill="#333" />
                            <span> 清空购物车</span>
                        </div>
                    </header>

                    <div className={styles.mealList}>
                        {
                            ctx.items.map(item =>
                                <Meal noDesc key={item.id} meal={item} />)
                        }
                    </div>
                </div>
            </Backdrop>
        </>
    )
}
export default CartDetails;