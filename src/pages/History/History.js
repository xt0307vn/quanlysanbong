import HistoryBox from "./components/HistoryBox/HistoryBox"
import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './History.module.scss'
import apis from '../../common/apis'

const cx = classNames.bind(styles)

const Home = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        apis.history(localStorage.getItem("idAccount"))
        .then(data => {
            setData(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div className={cx("wrapper")}>
            {
                data.map((item, index) => {
                    return(
                        <HistoryBox data={item} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Home