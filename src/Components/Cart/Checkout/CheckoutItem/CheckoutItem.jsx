import React from 'react'
import styles from './CheckoutItem.module.css';
import Counter from '../../../UI/Counter';

const index = (props) => {
    return (
        <>
            <div className={styles.CheckoutItemOuter}>
                <div className={styles.MealImg}>
                    <img src={props.meal.img} alt="汉堡" />
                </div>

                <div className={styles.Desc}>
                    <h2 className={styles.title}>{props.meal.title}</h2>
                    <div className={styles.PriceOuter}>
                        <Counter meal={props.meal} />
                        <div className={styles.Price}>{props.meal.price * props.meal.amount}</div>


                    </div>
                </div>

            </div>
        </>
    )
}
export default index;