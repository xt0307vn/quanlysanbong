import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";


import styles from "./AccountCreate.Module.scss";
import constants from "../../../common/constants";
import apis from "../../../common/apis";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const AccountCreate = () => {
    const navigate = useNavigate();
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
        ngaysinh: "",
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
        e.target.name == "id_loaitaikhoan" ? setAccount({
            ...account,
            id_loaitaikhoan: parseInt(e.target.value),
        }) :
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    }
    function handleAddAccount() {
        apis.createAccount(account).then(data => {
            navigate(-1)
        })
        
    }

    function handleCancle() {
        navigate(-1)
    }
    useEffect(() => {
        apis.getProvince().then((data) => setProvinces(data));
    }, []);

    return (
        <div className={cx("accountcreate__wrapper")}>
            <div className={cx("title__box")} >
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Thêm mới tài khoản</h3>
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
                        ></input>
                    </div>

                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>Ngày sinh</label>
                        <input
                            type="date"
                            className={cx("form-input")}
                            name="ngaysinh"
                            onChange={handleInputAccount}
                        ></input>
                    </div>
                </div>

                <div className={cx("form-row")}>
                    <div className={cx("form-row-item-3")}>
                        <label className={cx("form-label")}>Tỉnh/Thành</label>
                        <select
                            className={cx("form-select")}
                            onChange={handleSelectProvince}
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
                            className={cx("form-select")}
                            onChange={handleSelectDistrict}
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
                            className={cx("form-select")}
                            onChange={handleSelectWard}
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
                        onChange={handleInputAccount}
                        placeholder="Nhập tên đường, thôn, tổ..."
                    ></input>
                </div>

                <div className={cx("form-row")}>
                    <div className={cx("form-row-item")}>
                        <label className={cx("form-label")}>Email</label>
                        <input
                            type="email"
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
                    className={cx("btn", "btn--cancle")}
                    onClick={handleCancle}
                >
                    Hủy
                </button>
                <button
                    className={cx("btn", "btn--add")}
                    onClick={handleAddAccount}
                >
                    Thêm tài khoản
                </button>
            </div>
        </div>
    );
};

export default AccountCreate;
