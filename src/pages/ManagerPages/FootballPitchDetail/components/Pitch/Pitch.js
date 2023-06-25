import classNames from "classnames/bind"

import styles from './Pitch.module.scss'

const cx = classNames.bind(styles)
const Pitch = () => {
    return(
        <div className={cx('pitch__box')}>Sân 1</div>
    )
}

export default Pitch