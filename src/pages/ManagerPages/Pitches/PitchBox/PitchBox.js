import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

import styles from "./PitchBox.module.scss";

const cx = classNames.bind(styles);
const PitchBox = ({data, onClickDelete}) => {
    return (
        <div className={cx("pitch__box")}>
            <div className={cx("pitch__image")}>
                <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
            </div>
            <div className={cx("info__wrapper")}>
                <h3>{data?.tensan}</h3>
                <p>Sân: 7</p>
            </div>

            <div className={cx("action__box")}>
                <button className={cx("btn", "btn--edit")}>Sửa</button>
                <button className={cx("btn", "btn--delete")} onClick={onClickDelete}>Xóa</button>
            </div>
        </div>
    );
};

export default PitchBox;
