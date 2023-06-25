import classNames from "classnames/bind";

import styles from "./OverviewPitch.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const OverviewPitch = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div
            className={cx("pitch__overview")}
            onClick={() => navigate("pitches/san1")}
        >
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
    );
};

export default OverviewPitch;
