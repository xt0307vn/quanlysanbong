import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import constants from "../../../../common/constants";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Sidebar = () => {
    const navigate = useNavigate()
    var accountType = useSelector(state => state.account.typeAccount)


    return (
        <div className={cx("sidebar--wrapper")}>
            <img
                className={cx("avatar")}
                src={constants.images.dreamteam}
                alt="Logo"
            />
            <div className={cx("explore__box")}>
                <h2>{accountType === "administrator" ? "Trang quản trị" : "Khám phá"} </h2>
                {
                  accountType === "administrator" ? <ul className={cx("explore__items")}>
                  <li className={cx("explore__item")} onClick={() => {
                    navigate("/administrator/accounts")
                  }}>
                      Danh sách tài khoản
                  </li>
                  <li className={cx("explore__item")} onClick={() => {
                    navigate("/administrator/accounts-pendding")
                  }}>
                     Đang chờ duyệt
                  </li>
              </ul> : <ul className={cx("explore__items")}>
                    <li className={cx("explore__item")}>
                        <img
                            className={cx("explore__itemlogo")}
                            src={constants.images.thunder}
                            alt="Logo"
                        />
                        Sân mới
                    </li>
                    <li className={cx("explore__item")}>
                        <img
                            className={cx("explore__itemlogo")}
                            src={constants.images.star}
                            alt="Logo"
                        />
                        Sân đặt nhiều
                    </li>
                </ul>
                }
                
            </div>

            <div className={cx("support__box")}>
                <FontAwesomeIcon icon={faComment} />
                <h4>Hỗ trợ</h4>
            </div>
        </div>
    );
};

export default Sidebar;
