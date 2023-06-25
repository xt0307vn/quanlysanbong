import classNames from "classnames/bind";

import styles from "./DialogRighttoLeft.module.scss";

const cx = classNames.bind(styles);
const DialogRighttoLeft = ({ message }) => {
    return (
        <div className={cx("notify__wrapper")}>
            <div>{message}</div>
        </div>
    );
};

export default DialogRighttoLeft;
