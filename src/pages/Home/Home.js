import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { useParams} from 'react-router-dom'

import styles from "./Home.module.scss";
import constants from "./../../common/constants";
import apis from "./../../common/apis";

const cx = classNames.bind(styles);
const Home = () => {

    return (
        <div className={cx("wrapper")}>
            <div className={cx("left__wrapper")}>
                <div className={cx("welcome__box")}>
                    <h1>WELCOME</h1>
                    <h3>Dreams</h3>
                </div>
                <p>
                    Chào bạn đến với trang web đặt sân bóng - nơi cung cấp cho
                    bạn những trận đấu bóng đá đáng nhớ và thú vị.
                </p>
                <div className={cx("continue__box")}>
                    <button className={cx("btn_continue")}>Tiếp theo</button>
                </div>
            </div>
            <div className={cx("right__wrapper")}>
                <img src={constants.images.welcome}></img>
            </div>
        </div>
    );
};

export default Home;
