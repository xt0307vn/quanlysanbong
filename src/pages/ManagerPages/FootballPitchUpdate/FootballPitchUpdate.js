import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightArrowLeft,
    faArrowLeftLong,
    faCaretLeft,
    faAngleLeft,
    faAngleDown,
    faCaretDown,
    faArrowRightLong,
    faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./FootballPitchUpdate.module.scss";
import Pitch from "./components/Pitch";

const cx = classNames.bind(styles);

const FootballPitchUpdate = () => {
    const navigate = useNavigate();
    return (
        <div className={cx("pitch__wrapper")}>
            <div className={cx("title__box")}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Cập nhật sân bóng</h3>
            </div>
            <div className={cx("content")}>
                <div className={cx("content--top")}>
                    <div className={cx("pitchimages__wrapper")}>
                        <div className={cx("pitchimages__top")}>
                            <img
                                className={cx("pitch__image")}
                                src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg"
                                alt=""
                            />
                            <button className={cx("upload__image")}>
                                Tải ảnh lên
                                <FontAwesomeIcon icon={faFileArrowUp} />
                            </button>
                        </div>

                        <div className={cx("pitchimages__top")}>
                            <img
                                className={cx("pitch__image")}
                                src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg"
                                alt=""
                            />
                            <button className={cx("upload__image")}>
                                Tải ảnh lên
                                <FontAwesomeIcon icon={faFileArrowUp} />
                            </button>
                        </div>
                    </div>
                    <div className={cx("pitchinfo__wrapper")}>
                        <div className={cx("info_itemm")}>
                            <h2>Sân bóng:</h2>
                            <input
                                className={cx("footballpitch--name")}
                                type="text"
                                placeholder="Nhập tên sân bóng"
                                value="Thanh Bình"
                            />
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Địa chỉ:</p>
                            <div className={cx("profile__item--infomation")}>
                                <div className={cx("item__select")}>
                                    <select required>
                                        <option value="0" disabled selected>
                                            Chọn tỉnh/thành
                                        </option>
                                        <option value="1">Đà Nẵng</option>
                                        <option value="2">Quảng Nam</option>
                                        <option value="3">Huế</option>
                                    </select>
                                    <svg>
                                        <use xlinkHref="#select-arrow-down"></use>
                                    </svg>
                                    <svg className={cx("sprites")}>
                                        <symbol id="select-arrow-down">
                                            <polyline points="1 1 5 5 9 1"></polyline>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className={cx("item__select")}>
                                    <select>
                                        <option value="0">
                                            Chọn quận/huyện
                                        </option>
                                        <option value="1">Tiên Phước</option>
                                        <option value="2">Tam Kì</option>
                                        <option value="3">Hương Thủy</option>
                                    </select>
                                    <svg>
                                        <use xlinkHref="#select-arrow-down"></use>
                                    </svg>
                                    <svg className={cx("sprites")}>
                                        <symbol id="select-arrow-down">
                                            <polyline points="1 1 5 5 9 1"></polyline>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className={cx("item__select")}>
                                    <select>
                                        <option value="0">
                                            Chọn xã/phường
                                        </option>
                                        <option value="1">Tiên Cảnh</option>
                                        <option value="2">Tiên Châu</option>
                                        <option value="3">Tiên Kì</option>
                                    </select>
                                    <svg>
                                        <use xlinkHref="#select-arrow-down"></use>
                                    </svg>
                                    <svg className={cx("sprites")}>
                                        <symbol id="select-arrow-down">
                                            <polyline points="1 1 5 5 9 1"></polyline>
                                        </symbol>
                                    </svg>
                                </div>

                                <div className={cx("item__input")}>
                                    <input
                                        type="text"
                                        placeholder="Nhập địa chỉ cụ thể"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Sân:</p>
                            <div className={cx("pitches__wrapper")}>
                                <div className={cx("pitches__box")}>
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                    <Pitch />
                                </div>
                                <div className={cx("add__box")}>
                                    <p
                                        className={cx("btn__editpitch")}
                                        onClick={() => navigate("pitches")}
                                    >
                                        Chỉnh sửa
                                    </p>
                                    <button className={cx("btn__addpitch")} onClick={() => navigate("pitch-create")}>
                                        Thêm sân
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("content--bottom")}>
                    <div className={cx("pitchdescription")}>
                        <h3>Mô tả sân bóng:</h3>
                        <div className={cx("description")}>
                            <textarea
                                type="text"
                                className={cx("description--content")}
                            />
                        </div>
                    </div>
                    <div className={cx("booking__wrapper")}>
                        <div className={cx("booking__box")}>
                            <button
                                className={cx("btn__booking", "btn__cancle")}
                                onClick={() => navigate(-1)}
                            >
                                Hủy
                            </button>
                            <button
                                className={cx("btn__booking")}
                                onClick={() => navigate(-1)}
                            >
                                Cập nhật
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootballPitchUpdate;
