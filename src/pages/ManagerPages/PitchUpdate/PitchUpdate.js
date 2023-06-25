import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./PitchUpdate.module.scss";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);


const PitchUpdate = () => {
    
    return(
        <div className={cx("wrapper")}>
            <div className={cx("pitch__wrapper")}>
                <div className={cx("image__box")}>
                    <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></img>
                    <button>Tải ảnh lên</button>
                </div>
                <div className={cx("info__box")}>
                    <div className={cx("info__item")}>
                        <h2>Tên sân</h2>
                        <input type="text"></input>
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Loại sân</h4>
                        <select>
                            <option disabled>Chọn loại sân</option>
                            <option>Sân 5</option>
                            <option>Sân 7</option>
                            <option>Sân 11</option>
                        </select>
                    </div>
                    
                    <div className={cx("info__item")}>
                        <h4>Khung giờ</h4>
                        <select>
                            <option disabled selected>Chọn khung giờ</option>
                            <option>5h - 6h</option>
                            <option>5h - 6h</option>
                            <option>5h - 6h</option>
                        </select>
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Giá tiền</h4>
                        <input type="text"></input>
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Trạng thái</h4>
                        <select>
                            <option disabled>Đang hoạt động</option>
                            <option>Đang hoạt động</option>
                            <option>Tạm ngưng hoạt động</option>
                            <option>Ngưng hoạt động</option>
                        </select>
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Mô tả</h4>
                        <textarea type="text"></textarea>
                    </div>
                    <div className={cx("action__box")}>
                        <button className={cx("btn--done")}>Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PitchUpdate