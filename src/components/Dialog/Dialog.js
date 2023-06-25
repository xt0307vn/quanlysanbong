import classNames from "classnames/bind";

import styles from "./Dialog.module.scss";

const cx = classNames.bind(styles);
const Dialog = ({ message }) => {
    return (
        <div className={cx("notify__wrapper")}>
            <div>{message}</div>
        </div>
    );
};

export default Dialog;
