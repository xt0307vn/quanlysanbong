import classNames from "classnames/bind";

import styles from "./PitchOverview.module.scss";

const cx = classNames.bind(styles);
const PitchOverview = ({data, onClick}) => {
    
    return (
        <div className={cx("overview__box")} onClick={onClick}>
            <div className={cx("image__box")}>
                <img
                    className={cx("overview__image")}
                    src={data.hinhanh}
                    alt=""
                />
            </div>
            <div className={cx("overview__info")}>
                <div>
                    <h3>
                        Sân bóng: <span>{data.tensanbong}</span>
                    </h3>
                </div>
                <div className={cx("address")}>
                    Địa chỉ:
                    <span>{data.diachicuthe}</span>
                </div>
            </div>
        </div>
    );
};

export default PitchOverview;
