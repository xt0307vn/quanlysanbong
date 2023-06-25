import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./PitchDetail.module.scss";

const cx = classNames.bind(styles);


const PitchDetail = () => {
    return(
        <div className={cx("wrapper")}>
            <div className={cx("pitch__wrapper")}>
                <div className={cx("image__box")}>
                    <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></img>
                </div>
                <div className={cx("info__box")}>
                    <div className={cx("info__item")}>
                        <h2>Tên sân</h2>
                        <h2>Thanh Bình</h2>
                        
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Loại sân</h4>
                        <h4>Sân 5</h4>
                        
                    </div>
                    
                    <div className={cx("info__item")}>
                        <h4>Khung giờ</h4>
                        <h4>6h - 7h</h4>
                        
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Giá tiền</h4>
                        <h4>200000 đồng</h4>
                        
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Trạng thái</h4>
                        <h4>Đang hoạt động</h4>
                    </div>
                    <div className={cx("info__item", "desc")}>
                        <h4>Mô tả</h4>
                        <p>Mô tả Mô tả Mô tả Mô tả Mô tả Mô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tả
                        Mô tả Mô tả Mô tả Mô tả Mô tả Mô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tả
                        Mô tả Mô tả Mô tả Mô tả Mô tả Mô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tả
                        Mô tả Mô tả Mô tả Mô tả Mô tả Mô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tả

                        </p>
                        
                    </div>
                    <div className={cx("action__box")}>
                        <button className={cx("btn--done")}>Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PitchDetail