import classNames from "classnames/bind";

import styles from "./Pitch.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
const Pitch = ({ inactive, data, onClick, current }) => {
    const [ina, setIna] = useState(false);

    return (
        <div
            className={
                inactive == true
                    ? cx("pitch__box", "inactive")
                    : current == data.id_san
                    ? cx("pitch__box", "active")
                    : cx("pitch__box")
            }
            onClick={onClick}
        >
            {data?.tensan}
        </div>
    );
};

export default Pitch;
