import classNames from "classnames/bind";

import styles from "./Interval.module.scss";

const cx = classNames.bind(styles);
const Interval = ({ data, inactive, onClick, current }) => {
    return (
        <div
            className={
                inactive == true
                    ? cx("interval__box", "inactive")
                    : current == data.id_khunggio ? cx("interval__box", "active") : cx("interval__box")
            }
            onClick={onClick}
        >
            {data?.thoigianbatdau.slice(0, 2)}h -{" "}
            {data?.thoigianketthuc.slice(0, 2)}h{" "}
        </div>
    );
};

export default Interval;
