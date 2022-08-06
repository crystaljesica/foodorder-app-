import React, { useState } from 'react'
import '@icon-park/react/styles/index.css'
import { Search } from '@icon-park/react'
import styles from './FilterMeals.module.css'
import { useEffect } from 'react'

const FilterMeals = (props) => {
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        // 当用户停止输入动作一秒后，才做查询
        //开启一个定时器后，应该关掉上一次
        const timer = setTimeout(
            () => {
                props.onFilter(keyword);
            }, 1000
        )

        //可以在这个函数中做一些工作来清除上次Effect执行 所带来的影响
        return () => {
            clearTimeout(timer)
        }

    }, [keyword, props]);

    const inputChangeHandler = e => {
        setKeyword(e.target.value.trim())

    }

    return (
        <>
            <div className={styles.FilterMeals}>

                <div className={styles.InputOuter}>

                    <input
                        value={keyword}
                        className={styles.searchInput} onChange={inputChangeHandler}
                        type="text" placeholder='请输入关键字' />
                    <Search
                        className={styles.searchIcon} theme="outline" size="20" fill="#aaa" />
                </div>
            </div>
        </>
    )
}

export default FilterMeals;

