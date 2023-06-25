import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

import styles from "./PitchCreate.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewPitch } from "../../../store/slices/ManagerSlice";

const cx = classNames.bind(styles);

const PitchCreate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [pitch, setPitch] = useState({
        id_loaisan: null,
        tensan: "",
        id_trangthai_san: null,
        hinhanh: "",
        mota: "",
    });

    function handleChage(e) {
        setPitch({
            ...pitch,
            [e.target.name]: e.target.value,
        });
    }

    function handleCreatePitch() {
        dispatch(createNewPitch(pitch))
        navigate(-1)
    }

    function handleCancle() {
        navigate(-1)
    }

    useEffect(() => {}, []);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("pitch__wrapper")}>
                <div className={cx("image__box")}>
                    <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></img>
                    <label>
                        Tải ảnh lên
                        <input
                            type="file"
                            name="hinhanh"
                            onChange={(e) => handleChage(e)}
                        />
                    </label>
                </div>
                <div className={cx("info__box")}>
                    <div className={cx("info__item")}>
                        <h2>Tên sân</h2>
                        <input
                            type="text"
                            name="tensan"
                            onChange={(e) => handleChage(e)}
                        />
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Loại sân</h4>
                        <select
                            defaultValue="0"
                            name="id_loaisan"
                            onChange={(e) => handleChage(e)}
                        >
                            <option value="0" disabled>
                                Chọn loại sân
                            </option>
                            <option value="1">Sân 5</option>
                            <option value="2">Sân 7</option>
                            <option value="3">Sân 11</option>
                        </select>
                    </div>

                    <div className={cx("info__item")}>
                        <h4>Trạng thái</h4>
                        <select
                            defaultValue="0"
                            name="id_trangthai_san"
                            onChange={(e) => handleChage(e)}
                        >
                            <option value="0" disabled>
                                Chọn trạng thái sân
                            </option>
                            <option value="1">Đang hoạt động</option>
                            <option value="2">Tạm ngưng hoạt động</option>
                            <option value="3">Ngưng hoạt động</option>
                        </select>
                    </div>
                    <div className={cx("info__item")}>
                        <h4>Mô tả</h4>
                        <textarea
                            type="text"
                            name="mota"
                            onChange={(e) => handleChage(e)}
                        />
                    </div>
                    <div className={cx("action__box")}>
                    <button
                            className={cx("btn--cancle")}
                            onClick={handleCancle}
                        >
                            Hủy
                        </button>
                        <button
                            className={cx("btn--done")}
                            onClick={handleCreatePitch}
                        >
                            Tạo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PitchCreate;
