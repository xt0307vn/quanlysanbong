import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretDown,
    faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./ProfileUpdate.module.scss";
import apis from "../../common/apis";

const cx = classNames.bind(styles);
const ProfileUpdate = () => {
    const [account, setAccount] = useState({
        matkhau: "",
        email: "",
        anhdaidien: "",
        hoten: "",
        sdt: "",
        ngay: "",
        thang: "",
        nam: "",
        ngaysinh: "",
        diachi: "",
        id_xaphuong: null,
        id_quanhuyen: null,
        id_tinhthanh: null,
        diachicuthe: "",
    });
    const [dobYear, setDobYear] = useState();
    const [dobMonth, setDobMonth] = useState();
    const [dobDay, setDobDay] = useState();
    const [days, setDays] = useState([]);
    const [year, setYear] = useState([]);
    const [month, setMonth] = useState([]);
    const [idProvince, setIdProvince] = useState();
    const [idDistrict, setIdDistrict] = useState();
    const [idWard, setIdWard] = useState();
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const navigate = useNavigate();
    var d = new Date();
    let listyear = [];
    let listmonth = [];
    const handleUpdate = () => {
        apis.updateAccount(parseInt(localStorage.getItem("idAccount")), {
            tentaikhoan: account.tentaikhoan,
            matkhau: account.matkhau,
            email: account.email,
            sdt: account.sdt,
            ngaysinh: account.nam + "-" + account.thang + "-" + account.ngay,
            id_trangthai_taikhoan: 1,
            anhdaidien: account.anhdaidien,
            hoten: account.hoten,
            id_xaphuong: parseInt(account.id_xaphuong),
            id_loaitaikhoan: parseInt(account.id_loaitaikhoan),
            diachicuthe: account.diachicuthe,
        }).then((data) => console.log(data));
        navigate("../profile");
    };

    const handleCancle = () => {
        navigate(-1);
    };

    function handleInput(e) {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });

        if (e.target.name == "thang") {
            setDays(
                getDaysInMonth(
                    parseInt(e.target.value) - 1,
                    parseInt(account.nam)
                )
            );
        }

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

    function getDaysInMonth(month, year) {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date).getDate());
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    for (let i = d.getFullYear(); i >= d.getFullYear() - 70; i--) {
        listyear.push(i);
    }

    for (let i = 12; i >= 1; i--) {
        listmonth.push(i);
    }

    useEffect(() => {
        apis.getAccount(localStorage.getItem("idAccount")).then((data) => {
            setAccount(data);
            apis.getDistrict(data.id_tinhthanh).then((data) =>
                setDistricts(data)
            );
            apis.getWard(data.id_quanhuyen).then((data) => setWards(data));

            setDays(
                getDaysInMonth(parseInt(data.thang) - 1, parseInt(data.nam))
            );
        });

        apis.getProvince().then((data) => setProvinces(data));
    }, []);

    return (
        <div className={cx("profile__wrapper")}>
            <div className={cx("title__box")}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Cập nhật thông tin cá nhân</h3>
            </div>
            <div className={cx("profile__content")}>
                <div className={cx("profile__box--top")}>
                    <div className={cx("avatar__box")}>
                        <img
                            className={cx("avatar")}
                            src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/2048px-Manchester_City_FC_logo.svg.png"
                            alt="Avatar"
                        ></img>
                        <label>
                            <FontAwesomeIcon icon={faFileArrowUp} />
                            Tải ảnh lên
                            <input
                                type="file"
                                name="anhdaidien"
                                onClick={handleInput}
                            />
                        </label>
                    </div>
                    <div className={cx("profile__items--top")}>
                        <div className={cx("profile__item")}>
                            <h1>Tên đăng nhập:</h1>
                            <input
                                type="text"
                                name="tentaikhoan"
                                value={account.tentaikhoan || ""}
                                onChange={(e) => handleInput(e)}
                            />
                        </div>

                        <div className={cx("profile__item")}>
                            <p>Họ và tên:</p>
                            <input
                                type="text"
                                name="hoten"
                                value={account?.hoten || ""}
                                onChange={(e) => handleInput(e)}
                            />
                        </div>
                        <div className={cx("profile__item")}>
                            <p>Số điện thoại:</p>
                            <input
                                type="text"
                                name="sdt"
                                value={account?.sdt || ""}
                                onChange={(e) => handleInput(e)}
                            />
                        </div>
                        <div className={cx("profile__item")}>
                            <p>Email:</p>
                            <input
                                type="email"
                                name="email"
                                value={account?.email || ""}
                                onChange={(e) => handleInput(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("profile__items--bottom")}>
                    <div className={cx("profile__item")}>
                        <p>Mật khẩu:</p>
                        <div className={cx("password__box")}>
                            <p>**********</p>
                            <p>Thay đổi mật khẩu</p>
                        </div>
                    </div>
                    <div className={cx("profile__item")}>
                        <p>Ngày sinh:</p>
                        <div className={cx("dob__box")}>
                            <select
                                value={account?.nam || ""}
                                name="name"
                                onChange={handleInput}
                            >
                                <option value="0">Chọn năm</option>
                                {listyear.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>

                            <select
                                value={parseInt(account?.thang) || ""}
                                name="thang"
                                onChange={handleInput}
                            >
                                <option value="-1">Chọn tháng</option>
                                {listmonth.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>

                            <select
                                name="ngay"
                                value={parseInt(account?.ngay) || ""}
                                onChange={handleInput}
                            >
                                <option value="-1">Chọn ngày</option>
                                {days.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className={cx("profile__item")}>
                        <p>Địa chỉ:</p>
                        <div className={cx("pob__box")}>
                            <select
                                value={account.id_tinhthanh || ""}
                                name="id_tinhthanh"
                                onChange={handleInput}
                            >
                                <option value="0">Chọn tỉnh/thành</option>
                                {provinces.map((item, index) => {
                                    return (
                                        <option
                                            value={item?.id_tinhthanh}
                                            key={index}
                                        >
                                            {item?.tentinhthanh}
                                        </option>
                                    );
                                })}
                            </select>

                            <select
                                value={account.id_quanhuyen || ""}
                                onChange={handleInput}
                                name="id_quanhuyen"
                            >
                                <option value="0">Chọn quận/huyện</option>
                                {districts.map((item, index) => {
                                    return (
                                        <option
                                            value={item?.id_quanhuyen}
                                            key={index}
                                        >
                                            {item?.tenquanhuyen}
                                        </option>
                                    );
                                })}
                            </select>

                            <select
                                value={account.id_xaphuong || ""}
                                name="id_xaphuong"
                                onChange={handleInput}
                            >
                                <option value="0">Chọn xã/phường</option>
                                {wards.map((item, index) => {
                                    return (
                                        <option
                                            value={item?.id_xaphuong}
                                            key={index}
                                        >
                                            {item?.tenxaphuong}
                                        </option>
                                    );
                                })}
                            </select>

                            <input
                                value={account?.diachicuthe}
                                onChange={(e) => handleInput(e)}
                                name="diachicuthe"
                            ></input>
                        </div>
                    </div>
                </div>
                <div className={cx("action")}>
                    <button
                        className={cx("btn", "btn__cancel")}
                        onClick={handleCancle}
                    >
                        Hủy
                    </button>
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

export default ProfileUpdate;
