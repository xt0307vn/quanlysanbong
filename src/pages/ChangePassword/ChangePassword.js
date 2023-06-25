import classNames from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import styles from "./ChangePassword.module.scss";
import apis from "../../common/apis";
import DialogRighttoLeft from "../../components/DialogRighttoLeft";

const cx = classNames.bind(styles);
const ChangePassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState({
        old: "",
        new: "",
        confirm: "",
    });
    const [showDialog, setShowDialog] = useState(false);
    const [check, setCheck] = useState(false);
    const [message, setMessage] = useState("");

    function handleChangeInput(e) {
        setPassword({
            ...password,
            [e.target.name]: e.target.value,
        });
    }

    function handleConfirm() {
        const dataObj = {
            id_taikhoan: localStorage.getItem("idAccount"),
            matkhau: password.old,
            matkhaumoi: password.new,
        };
        if (password.new != password.confirm) {
            setShowDialog(true);
            setMessage("Mật khẩu xác nhận không trùng khớp");
            setTimeout(() => {
                setShowDialog(false);
            }, 2000);
        } else {
            apis.checkPassword(dataObj).then((data) => {
                console.log(data);
                if (data.length == 0) {
                    setCheck(false);
                    setShowDialog(true);
                    setMessage("Mật khẩu không chính xác");
                    setTimeout(() => {
                        setShowDialog(false);
                    }, 2000);
                } else {
                    apis.changePassword(dataObj).then((data) =>
                        console.log(data)
                    );
                    setShowDialog(true);
                    setMessage("Cập nhật thành công");
                    setTimeout(() => {
                        setShowDialog(false);
                    }, 2000);
                }
            });
        }
    }

    return (
        <div className={cx("wrapper")}>
            {showDialog && <DialogRighttoLeft message={message} />}
            <div className={cx("title__box")} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Thay đổi mật khẩu</h3>
            </div>
            <div className={cx("password__box")}>
                <h1>Thay đổi mật khẩu</h1>
                <div className={cx("input__box")}>
                    <input
                        type="text"
                        placeholder="Nhập mật khẩu cũ"
                        name="old"
                        value={password.old}
                        onChange={handleChangeInput}
                    ></input>
                    <input
                        type="text"
                        placeholder="Nhập mật khẩu mới"
                        name="new"
                        value={password.new}
                        onChange={handleChangeInput}
                    ></input>
                    <input
                        type="text"
                        placeholder="Xác nhận mật khẩu"
                        name="confirm"
                        value={password.confirm}
                        onChange={handleChangeInput}
                    ></input>
                </div>

                <button onClick={handleConfirm}>Xác nhận</button>
            </div>
        </div>
    );
};

export default ChangePassword;
