import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Account.Module.scss";
import constants from "../../../common/constants";
import { useEffect, useState } from "react";
import apis from '../../../common/apis'

const cx = classNames.bind(styles);
const Account = () => {

    const navigate = useNavigate()
    const pathName = useLocation().pathname
    const [account, setAccount] = useState({})

    useEffect(() => {
        apis.getAccount(pathName.split("/")[pathName.split("/").length - 1]).then(data => {
            setAccount(data)
        })
    }, [])

    return(
        <div className={cx("wrapper")}>
            <div className={cx("title__box")} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Thông tin tài khoản</h3>
            </div>
            <div className={cx("content")}>
               
                <div className={cx("info")}>
                    <div className={cx("row")}>
                        <label className={cx("row-lable")}>Tên tài khoản:</label>
                        <p>{account.tentaikhoan}</p>
                    </div>
                    <div className={cx("row")}>
                        <label className={cx("row-lable")}>Ngày sinh:</label>
                        <p>{account.ngaysinh}</p>
                    </div>
                    <div className={cx("row")}>
                        <label className={cx("row-lable")}>Họ và tên:</label>
                        <p>{account.hoten}</p>
                    </div>
                    <div className={cx("row")}>
                        <label className={cx("row-lable")}>Địa chỉ:</label>
                        <p>{account.diachi}</p>
                    </div>
                    <div className={cx("row")}>
                        <label className={cx("row-lable")}>Email:</label>
                        <p>{account.email}</p>
                    </div>
                    <div className={cx("row")}>
                        <label className={cx("row-lable")}>Số điện thoại:</label>
                        <p>{account.sdt}</p>
                    </div>
                    <div className={cx("row")}>
                        <label className={cx("row-lable")}>Vai trò:</label>
                        <p>{account.id_loaitaikhoan}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Account