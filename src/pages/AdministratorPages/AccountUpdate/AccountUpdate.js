import classNames from "classnames/bind";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountUpdate.Module.scss";
import constants from "../../../common/constants";
import apis from "../../../common/apis";
import { useEffect, useState } from "react";
import Dialog from '../../../components/Dialog'

const cx = classNames.bind(styles);

const AccountCreate = () => {
    const navigate = useNavigate();
    const idAccount = useLocation().search.split("=")[1]
    const [idProvince, setIdProvince] = useState();
    const [idDistrict, setIdDistrict] = useState();
    const [idWard, setIdWard] = useState();
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [visiblePassword, setVisiblePassword] = useState(false);


    const [account, setAccount] = useState({
        tentaikhoan: "",
        matkhau: "",
        email: "",
        sdt: "",
        id_trangthai_taikhoan: 3,
        anhdaidien: "",
        hoten: "",
        id_xaphuong: null,
        id_loaitaikhoan: 3,
        diachicuthe: "",
        ngaysinhCalendar: "",
    });

    function handleSelectProvince(e) {
        apis.getDistrict(e.target.value).then((data) => setDistricts(data));
    }

    function handleSelectDistrict(e) {
        apis.getWard(e.target.value).then((data) => setWards(data));
    }

    function handleSelectWard(e) {
        setAccount({
            ...account,
            id_xaphuong: parseInt(e.target.value),
        });
    }

    function handleInputAccount(e) {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
        if (e.target.name == "id_tinhthanh") {
            apis.getDistrict(parseInt(e.target.value)).then((data) =>
                setDistricts(data)
            );
        }
        if (e.target.name == "id_quanhuyen") {
            apis.getWard(parseInt(e.target.value)).then((data) =>
                setWards(data)
            );
        }
    }
    function handleUpdateAccount() {
        apis.updateAccount(parseInt(idAccount), {
            tentaikhoan: account.tentaikhoan,
            matkhau: account.matkhau,
            email: account.email,
            sdt: account.sdt,
            ngaysinh: account.ngaysinhCalendar
                ? account.ngaysinhCalendar
                : account.nam + "-" + account.thang + "-" + account.ngay,
            id_trangthai_taikhoan: 1,
            anhdaidien: account.anhdaidien,
            hoten: account.hoten,
            id_xaphuong: parseInt(account.id_xaphuong),
            id_loaitaikhoan: parseInt(account.id_loaitaikhoan),
            diachicuthe: account.diachicuthe,
        }).then(data => console.log(data)).catch(err => console.log(err));

    }

    function handleCancle() {
        navigate(-1);
    }
    useEffect(() => {
        apis.getProvince().then((data) => setProvinces(data));

        apis.getAccount(idAccount).then(
            (data) => {
                setAccount(data);
                apis.getDistrict(data.id_tinhthanh).then((data) =>
                    setDistricts(data)
                );
                apis.getWard(data.id_quanhuyen).then((data) => setWards(data));
            }
        );
    }, []);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("title__box")} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Cập nhật tài khoản</h3>
            </div>
            <div className={cx("container")}>
                <div className={cx("form-row")}>
                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>
                            Tên tài khoản
                        </label>
                        <input
                            type="text"
                            className={cx("form-input")}
                            name="tentaikhoan"
                            onChange={handleInputAccount}
                            value={account.tentaikhoan}
                            placeholder="Nhập tên tài khoản"
                        ></input>
                    </div>

                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>Họ và tên</label>
                        <input
                            type="text"
                            className={cx("form-input")}
                            name="hoten"
                            onChange={handleInputAccount}
                            placeholder="Nhập họ và tên"
                            value={account.hoten}
                        ></input>
                    </div>

                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>Ngày sinh</label>
                        <input
                            type="date"
                            className={cx("form-input")}
                            value={
                                account.ngaysinhCalendar ||
                                account.nam +
                                    "-" +
                                    account.thang +
                                    "-" +
                                    account.ngay
                            }
                            name="ngaysinhCalendar"
                            onChange={handleInputAccount}
                        ></input>
                    </div>
                </div>

                <div className={cx("form-row")}>
                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>Tỉnh/Thành</label>
                        <select
                            name="id_tinhthanh"
                            onChange={handleInputAccount}
                            value={account.id_tinhthanh}
                            className={cx("form-select")}
                        >
                            <option value="-1">-- Chọn tỉnh/thành --</option>
                            {provinces.map((province, index) => {
                                return (
                                    <option
                                        value={province.id_tinhthanh}
                                        key={index}
                                    >
                                        {province.tentinhthanh}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>Quận/Huyện</label>
                        <select
                            name="id_quanhuyen"
                            value={account.id_quanhuyen || ""}
                            className={cx("form-select")}
                            onChange={handleInputAccount}
                        >
                            <option value="">-- Chọn quận/huyện --</option>
                            {districts.map((district, index) => {
                                return (
                                    <option
                                        value={district.id_quanhuyen}
                                        key={index}
                                    >
                                        {district.tenquanhuyen}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>Xã/Phường</label>
                        <select
                            value={account.id_xaphuong || ""}
                            name="id_xaphuong"
                            className={cx("form-select")}
                            onChange={handleInputAccount}
                        >
                            <option value="">-- Chọn xã/phường --</option>
                            {wards.map((ward, index) => {
                                return (
                                    <option
                                        value={ward.id_xaphuong}
                                        key={index}
                                    >
                                        {ward.tenxaphuong}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>

                <div className={cx("form-row-item-1")}>
                    <label className={cx("form-label")}>Địa chỉ</label>
                    <input
                        type="text"
                        className={cx("form-input")}
                        name="diachicuthe"
                        value={account.diachicuthe}
                        onChange={handleInputAccount}
                        placeholder="Nhập tên đường, thôn, tổ..."
                    ></input>
                </div>

                <div className={cx("form-row")}>
                    <div className={cx("form-row-item")}>
                        <label className={cx("form-label")}>Email</label>
                        <input
                            type="email"
                            value={account.email}
                            className={cx("form-input")}
                            name="email"
                            onChange={handleInputAccount}
                            placeholder="Nhập email"
                        ></input>
                    </div>

                    <div className={cx("form-row-item")}>
                        <label className={cx("form-label")}>
                            Số điện thoại
                        </label>
                        <input
                            value={account.sdt}
                            type="phone"
                            className={cx("form-input")}
                            name="sdt"
                            onChange={handleInputAccount}
                            placeholder="Nhập số điện thoại"
                        ></input>
                    </div>
                </div>

                <div className={cx("form-row")}>
                    <div className={cx("form-row-item")}>
                        <label className={cx("form-label")}>
                            Nhập mật khẩu
                        </label>
                        <div>
                            <input
                                value={account.matkhau}
                                type={visiblePassword ? "text" : "password"}
                                className={cx("form-input")}
                                name="matkhau"
                                onChange={handleInputAccount}
                                placeholder="Nhập password"
                            ></input>
                            <button
                                onClick={() =>
                                    setVisiblePassword(!visiblePassword)
                                }
                            >
                                {visiblePassword ? "Ẩn" : "Hiện"}
                            </button>
                        </div>
                    </div>

                    <div className={cx("form-row-item")}>
                        <label className={cx("form-label")}>Vai trò</label>
                        <select
                            className={cx("form-select")}
                            name="id_loaitaikhoan"
                            onChange={handleInputAccount}
                            value={account.id_loaitaikhoan}
                        >
                            <option value="-1" disabled>
                                -- Chọn vai trò --
                            </option>
                            <option value="1">Quản trị viên</option>
                            <option value="2">Chủ sân</option>
                            <option value="3">Thành viên</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={cx("btn__box")}>
                <button
                    className={cx("btn", "btn--add")}
                    onClick={handleUpdateAccount}
                >
                    Cập nhật tài khoản
                </button>
            </div>
        </div>
    );
};

export default AccountCreate;
