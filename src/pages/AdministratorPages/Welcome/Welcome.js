import classNames from "classnames/bind";

import styles from "./Welcome.Module.scss";
import constants from "../../../common/constants";

const cx = classNames.bind(styles);


const Welcome = () => {
    return(
        <>
            <div className={cx("wrapper-welcome")}>
                <img className={cx("img-welcome")} src={constants.images.welcome} alt="Welcome"/>
            </div>
            <div className={cx("description")}>
                <h1>Hello, nice to see you!</h1>
                <p>You are now minutes away from creativity than ever before. Enjoy!</p>
            </div>            
        </>
    )
}

export default Welcome