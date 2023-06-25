import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import styles from "./Profile.module.scss";
import apis from "../../common/apis";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
const Profile = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState({})



    const handleUpdate = () => {
        navigate("../profile-update");
    };

    useEffect(() => {
        apis.getAccount(localStorage.getItem("idAccount")).then((data) =>
            setAccount(data)
        );
    }, []);

    return (
        <div className={cx("profile__wrapper")}>
            <div className={cx("title__box")} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Thông tin cá nhân</h3>
            </div>
            <div className={cx("profile__content")}>
                <div className={cx("profile__box--top")}>
                    <div className={cx("avatar__box")}>
                        <img
                            className={cx("avatar")}
                            src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/2048px-Manchester_City_FC_logo.svg.png"
                            alt="Avatar"
                        ></img>
                    </div>
                    <div className={cx("profile__items--top")}>
                        <div className={cx("profile__item")}>
                            <h2>Tên đăng nhập:</h2>
                            <h2>{account?.tentaikhoan}</h2>
                        </div>

                        <div className={cx("profile__item")}>
                            <p>Họ và tên:</p>
                            <h4>{account?.hoten}</h4>
                        </div>
                        <div className={cx("profile__item")}>
                            <p>Số điện thoại:</p>
                            <h4>{account?.sdt}</h4>
                        </div>
                        <div className={cx("profile__item")}>
                            <p>Email:</p>
                            <h4>{account?.email}</h4>
                        </div>
                    </div>
                </div>
                <div className={cx("profile__items--bottom")}>
                    <div className={cx("profile__item")}>
                        <p>Mật khẩu:</p>
                        <div className={cx("password__box")}>
                            <h4>*******</h4>
                            <p onClick={() => navigate("../change-password")}>Thay đổi mật khẩu</p>
                        </div>
                    </div>
                    <div className={cx("profile__item")}>
                        <p>Ngày sinh:</p>
                        <p>{account?.ngaysinh}</p>
                    </div>
                    <div className={cx("profile__item")}>
                        <p>Địa chỉ:</p>
                       <p>{account?.diachi}</p>
                    </div>
                </div>
                <div className={cx("action")}>
                    <button
                        className={cx("btn", "btn__update")}
                        onClick={handleUpdate}
                    >
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
