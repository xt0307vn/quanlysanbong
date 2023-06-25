import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightArrowLeft,
    faArrowLeftLong,
    faCaretLeft,
    faAngleLeft,
    faAngleDown,
    faCaretDown,
    faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

import Pitch from "./components/Pitch";
import styles from "./FootballPitchDetail.module.scss";

const cx = classNames.bind(styles);
const FootballPtiches = () => {
    const navigate = useNavigate()


    return (
        <div className={cx("pitch__wrapper")}>
            <div className={cx("title__box")}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Chi tiết sân bóng</h3>
            </div>
            <div className={cx("content")}>
                <div className={cx("content--top")}>
                    <div className={cx("pitchimages__wrapper")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg"
                            alt=""
                        />
                        <img
                            className={cx("pitch__image")}
                            src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg"
                            alt=""
                        />
                    </div>
                    <div className={cx("pitchinfo__wrapper")}>
                        <div className={cx("info_itemm")}>
                            <h2>Sân bóng:</h2>
                            <h2>Thanh bình 1</h2>
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Địa chỉ:</p>
                            <p>
                                43 Thanh Sơn, Thanh Bình, Hải Châu, Đà Nẵng
                            </p>
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Sân:</p>
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
                                <Pitch />
                                <Pitch />
                                <Pitch />
                                <Pitch />
                                <Pitch />
                                <Pitch />
                                <Pitch />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("content--bottom")}>
                    <div className={cx("pitchdescription")}>
                        <h3>Mô tả sân bóng:</h3>
                        <div className={cx("description")}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem IpsumLorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    <div className={cx("booking__wrapper")}>
                        <div className={cx("booking__box")}>
                            <button className={cx("btn__booking")} onClick={()=> navigate("../football-pitch-update")}>
                                Cập nhật
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootballPtiches;
