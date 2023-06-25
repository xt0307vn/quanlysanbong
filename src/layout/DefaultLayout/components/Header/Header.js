import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

import {
    faClockRotateLeft,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.scss";
import style from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { updateTypeAccount } from "../../../../store/slices";

const cx = classNames.bind(styles);
const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const accountType = useSelector(state =>state.account.typeAccount)


    return (
        <nav className={cx("menu__box")}>
            <div className={cx("search__box")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Tìm kiếm" />
            </div>
            <ul className={cx("menu")}>
                <li className={cx("menu__item")}>
                    <Link to="/" style={style}>
                        Trang chủ
                    </Link>
                </li>
                <li className={cx("menu__item")}>
                    <Link to="footballpitches" style={style}>
                        Sân bóng
                    </Link>
                </li>
                {accountType === "administrator" ? (
                    <li className={cx("menu__item")}>
                        <Link to="administrator/accounts" style={style}>
                            Quản lý
                        </Link>
                    </li>
                ) : accountType === "manager" ? (
                    <li className={cx("menu__item")}>
                        <Link to="manager" style={style}>
                            Quản lý
                        </Link>
                    </li>
                ) : (
                    <> </>
                )}

                <li className={cx("menu__item")}>
                    <Link to="regulations" style={style}>
                        Qui định
                    </Link>
                </li>
                {
                    accountType !== "passersby" && <li className={cx("menu__item")}>
                        <Link to="history" style={style}>
                            <FontAwesomeIcon icon={faClockRotateLeft} />
                        </Link>
                    </li>
                }
                <li className={cx("menu__item")}>
                    <FontAwesomeIcon icon={faUser} />
                    {accountType === "passersby" ? (
                        <ul className={cx("account__menu")}>
                            <li onClick={() => navigate("login")}>Đăng nhập</li>
                            <li onClick={() => navigate("signup")}>Đăng ký</li>
                        </ul>
                    ) : (
                        <ul className={cx("account__menu")}>
                            <li onClick={() => navigate("profile")}>
                                Thông tin cá nhân
                            </li>
                            <li
                                onClick={() => {
                                    dispatch(updateTypeAccount("passersby"))
                                    navigate("..");
                                }}
                            >
                                Đăng xuất
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Header;
