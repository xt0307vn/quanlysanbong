import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

import styles from "./Signup.module.scss";
import apis from "./../../common/apis";
import Dialog from "../../components/Dialog";

const cx = classNames.bind(styles);
const Signup = () => {
    const navigate = useNavigate();
    const [dobYear, setDobYear] = useState();
    const [dobMonth, setDobMonth] = useState();
    const [dobDay, setDobDay] = useState();
    const [day, setDay] = useState([]);
    const [year, setYear] = useState([]);
    const [month, setMonth] = useState([]);
    const [idProvince, setIdProvince] = useState();
    const [idDistrict, setIdDistrict] = useState();
    const [idWard, setIdWard] = useState();
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [notify, setNotify] = useState({
        status: false,
        message: "",
    });
    const [visible, setVisible] = useState(false);
    const [accountExists, setAccountExists] = useState(false);

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

    const [error, setError] = useState({
        username: "",
        password: "",
    });

    var d = new Date();

    let listyear = [];
    let listmonth = [];

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

    function handleSelectYear(event) {
        setDobYear(event.target.value);
        setMonth(listmonth);
    }
    function handleSelectMonth(event) {
        setDobMonth(event.target.value);
        setDay(getDaysInMonth(parseInt(event.target.value), parseInt(dobYear)));
    }

    function handleSelectDay(event) {
        setDobDay(event.target.value);
        setAccount((prev) => ({
            ...prev,
            ngaysinh:
                dobYear +
                "-" +
                (parseInt(dobMonth) + 1) +
                "-" +
                event.target.value,
        }));
    }

    function handleSelectProvince(event) {
        setIdProvince(event.target.value);
        apis.getDistrict(event.target.value).then((data) => setDistricts(data));
    }

    function handleSelectDistrict(event) {
        setIdDistrict(event.target.value);
        apis.getWard(event.target.value).then((data) => setWards(data));
    }

    function handleSelectWard(event) {
        setIdWard(event.target.value);
        setAccount((prev) => ({
            ...prev,
            id_xaphuong: parseInt(event.target.value),
        }));
    }

    function handleSignup() {
        if (
            accountExists ||
            account.tentaikhoan == "" ||
            account.matkhau == "" ||
            account.email == "" ||
            account.sdt == "" ||
            account.anhdaidien == "" ||
            account.hoten == "" ||
            account.id_xaphuong == null ||
            account.diachicuthe == "" ||
            account.ngaysinh == ""
        ) {
            setNotify({
                ...notify,
                message: "Đăng ký thất bại",
                status: !notify.status,
            });
            setTimeout(() => setNotify({ ...notify, status: false }), 2000);
        } else {
            setNotify({
                ...notify,
                message: "Đăng ký thành công",
                status: !notify.status,
            });
            apis.createAccount(account)
                .then((data) => {
                    setNotify({
                        ...notify,
                        status: !notify.status,
                        message: "Đăng ký thành công",
                    });
                    setTimeout(() => {
                        navigate("../login");
                    }, 2000);
                })
                .catch((err) => console.log(err));
        }
    }

    const handleChangeInput = (e) => {
        e.target.name == "id_trangthai_taikhoan"
            ? setAccount({
                  ...account,
                  id_trangthai_taikhoan:
                      account.id_trangthai_taikhoan == 3 ? 4 : 3,
              })
            : setAccount((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
              }));

        apis.checkExsitsUser(e.target.value).then((data) => {
            if (data.length == 1) {
                setAccountExists(true);
            } else {
                setAccountExists(false);
            }
        });
    };

    useEffect(() => {
        setYear(listyear);

        apis.getProvince().then((data) => setProvinces(data));
    }, []);

    return (
        <div className={cx("wrapper")}>
            {notify.status && <Dialog message={notify.message} />}
            <div className={cx("signup__wrapper")}>
                <div className={cx("signup__title")}>
                    <h1>ĐĂNG KÝ</h1>
                </div>

                <div className={cx("info__wrapper")}>
                    <label className={cx("info__item")}>
                        <p
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                            }}
                        >
                            Tên đăng nhập
                            {accountExists && (
                                <span
                                    style={{ color: "red", fontSize: "16px" }}
                                >
                                    * Tài khoản đã tồn tại
                                </span>
                            )}
                        </p>
                        <input
                            type="text"
                            name="tentaikhoan"
                            onChange={handleChangeInput}
                        ></input>
                    </label>

                    <label className={cx("info__item")}>
                        Mật khẩu
                        <div>
                            <input
                                type={visible ? "text" : "password"}
                                name="matkhau"
                                onChange={handleChangeInput}
                            />
                            <button onClick={() => setVisible(!visible)}>
                                {visible ? "Ẩn" : "Hiện"}
                            </button>
                        </div>
                    </label>
                    <label className={cx("info__item")}>
                        Họ và tên
                        <input
                            type="text"
                            name="hoten"
                            onChange={handleChangeInput}
                        />
                    </label>
                    <label className={cx("info__item")}>
                        Số điện thoại
                        <input
                            type="text"
                            name="sdt"
                            onChange={handleChangeInput}
                        ></input>
                    </label>
                    <label className={cx("info__item")}>
                        Email
                        <input
                            type="text"
                            name="email"
                            onChange={handleChangeInput}
                        ></input>
                    </label>
                    <div className={cx("info__item")}>
                        Ngày sinh
                        <div className={cx("dob__box")}>
                            <select
                                onChange={(e) => handleSelectYear(e)}
                                value={dobYear}
                            >
                                <option>Chọn năm</option>
                                {year.map((item, index) => {
                                    return (
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>

                            <select onChange={(e) => handleSelectMonth(e)}>
                                <option>Chọn tháng</option>
                                {month.map((item, index) => {
                                    return (
                                        <option key={index} value={item - 1}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>

                            <select onChange={(e) => handleSelectDay(e)}>
                                <option>Chọn ngày</option>
                                {day.map((item, index) => {
                                    return (
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <label className={cx("info__item")}>
                        Chọn ảnh đại diện
                        <label> <FontAwesomeIcon icon={faCloudArrowUp}/> Tải ảnh lên 
                            <input
                                type="file"
                                name="anhdaidien"
                                onChange={handleChangeInput}
                            ></input>
                        </label>
                    </label>
                    <div className={cx("info__item")}>
                        Địa chỉ
                        <div className={cx("dob__box")}>
                            <select onChange={(e) => handleSelectProvince(e)}>
                                <option>Chọn tỉnh/thành</option>
                                {provinces.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.id_tinhthanh}
                                        >
                                            {item.tentinhthanh}
                                        </option>
                                    );
                                })}
                            </select>
                            <select onChange={(e) => handleSelectDistrict(e)}>
                                <option>Chọn quận/huyện</option>
                                {districts.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.id_quanhuyen}
                                        >
                                            {item.tenquanhuyen}
                                        </option>
                                    );
                                })}
                            </select>
                            <select onChange={(e) => handleSelectWard(e)}>
                                <option>Chọn xã/phường</option>
                                {wards.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item.id_xaphuong}
                                        >
                                            {item.tenxaphuong}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>

                    <label className={cx("info__item")}>
                        Yêu cầu làm chủ sân bóng
                        <div>
                            <input
                                type="checkbox"
                                name="id_trangthai_taikhoan"
                                onChange={handleChangeInput}
                            ></input>
                        </div>
                    </label>
                    <label className={cx("info__item")}>
                        Địa chỉ cụ thể
                        <input
                            type="text"
                            name="diachicuthe"
                            onChange={handleChangeInput}
                        ></input>
                    </label>
                </div>
                <div className={cx("signup__action")}>
                    <button
                        className={cx("btn--signup")}
                        onClick={() => handleSignup()}
                    >
                        Đăng ký
                    </button>
                    <div>
                        <p>
                            Đã có tài khoản?{" "}
                            <Link
                                to="../login"
                                style={{ color: "#609966", fontWeight: "bold" }}
                            >
                                Đăng nhập
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
