import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./HistoryBox.module.scss";

const cx = classNames.bind(styles);

const HistoryBox = ({data}) => {
    return (
        <div className={cx("history__box")}>
            <div className={cx("left__box")}>
                <h3>
                    Sân bóng: <span>{data?.tensanbong}</span>
                </h3>
                <p>
                    Sân: <span>{data?.tensanbong}</span>
                </p>

                <p>
                    Khung giờ: <span>{data?.thoigianbatdau.slice(0,2) + "h" + "-" + data?.thoigianketthuc.slice(0,2) + "h"}</span>
                </p>
            </div>
            <div className={cx("right__box")}>
                <p>
                    Ngày đặt: <span>{data?.ngaydat.slice(0,10)}</span>
                </p>
                <h4>{data?.id_trangthai_datsan == 4 ? "Đã thanh toán" : "Đã hủy"}</h4>
            </div>
        </div>
    );
};

export default HistoryBox;
