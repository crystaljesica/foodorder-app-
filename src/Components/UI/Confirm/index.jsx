import React from 'react'
import styles from './Confirm.module.css'
import Backdrop from '../Backdrop/Backdrop'

const confirm = (props) => {
    return (
        <>
            <Backdrop onClick={props.onCancel} className={styles.ConfirmOuter}>

                <div className={styles.Confirm} >
                    <p className={styles.ConfirmText}>{props.ConfirmText}</p>

                    <div>
                        <button onClick={(e) => props.onCancel(e)} className={styles.Cancel}>取消</button>
                        <button onClick={(e) => props.onOk(e)} className={styles.OK}>确认</button>
                    </div>
                </div>
            </Backdrop>
        </>
    )
}
export default confirm;