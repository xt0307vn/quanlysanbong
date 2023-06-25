import classNames from "classnames/bind";

import styles from "./OverviewFootbllPitch.module.scss";
import { useNavigate } from "react-router-dom";



const cx = classNames.bind(styles)
const OverviewFootbllPitch = ({data}) => {
    const navigate = useNavigate()
    return (
        <div
            className={cx("footballpitch__overview")}
            onClick={() => {
                navigate("sanbong1");
            }}
        >
            <img
                className={cx("footballpitch__image")}
                src={data.hinhanh}
            ></img>
            <div className={cx("footballpitch__quickview")}>
                <h3>
                    Sân bóng: <span>{data.tensanbong}</span>
                </h3>
                <p>
                    Địa chỉ <span>{data.diachi}</span>
                </p>
            </div>
        </div>
    );
};

export default OverviewFootbllPitch;
