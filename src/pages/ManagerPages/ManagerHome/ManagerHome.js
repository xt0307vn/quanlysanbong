import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./ManagerHome.module.scss";

const cx = classNames.bind(styles);
const ManagerHome = () => {
    const navigate = useNavigate();
    return (
        <div className={cx("overview__wrapper")}>
            <div className={cx("footballpitches__wrapper")}>
                <div className={cx("footballpitches__showall")}>
                    <h2>Danh sách sân bóng</h2>
                    <button
                        className={cx("create")}
                        onClick={() => navigate("football-pitch-create")}
                    >
                        Tạo sân bóng
                    </button>
                </div>
                <div className={cx("footballpitches__overview")}>
                    <div
                        className={cx("footballpitch__overview")}
                        onClick={() => {
                            navigate("sanbong1");
                        }}
                    >
                        <img
                            className={cx("footballpitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("footballpitch__quickview")}>
                            <h3>
                                Sân bóng <span>Thanh Bình</span>
                            </h3>
                            <p>
                                Địa chỉ <span>Thanh Bình hải châu đà nẵng</span>
                            </p>
                            <p>
                                Số sân <span>10</span>
                            </p>
                        </div>
                    </div>

                    <div className={cx("footballpitch__overview")}>
                        <img
                            className={cx("footballpitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("footballpitch__quickview")}>
                            <h3>
                                Sân bóng <span>Thanh Bình</span>
                            </h3>
                            <p>
                                Địa chỉ <span>Thanh Bình hải châu đà nẵng</span>
                            </p>
                            <p>
                                Số sân <span>10</span>
                            </p>
                        </div>
                    </div>

                    <div className={cx("footballpitch__overview")}>
                        <img
                            className={cx("footballpitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("footballpitch__quickview")}>
                            <h3>
                                Sân bóng <span>Thanh Bình</span>
                            </h3>
                            <p>
                                Địa chỉ <span>Thanh Bình hải châu đà nẵng</span>
                            </p>
                            <p>
                                Số sân <span>10</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("pitches__wrapper")}>
                <div className={cx("pitches__showall")}>
                    <h2>Danh sách sân </h2>
                    <p>Tất cả sân >></p>
                </div>

                <div className={cx("pitches__overview")}>
                    <div className={cx("pitch__overview")} onClick={() => navigate("pitches/san1")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx("pitch__overview")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx("pitch__overview")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx("pitch__overview")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx("pitch__overview")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx("pitch__overview")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx("pitch__overview")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                    <div className={cx("pitch__overview")}>
                        <img
                            className={cx("pitch__image")}
                            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        ></img>
                        <div className={cx("pitch__quickview")}>
                            <h4>
                                Sân bóng<span>Thanh Bình</span>
                            </h4>
                            <p>
                                Sân <span>1</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerHome;
