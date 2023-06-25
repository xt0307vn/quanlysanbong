import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import {
    faArrowRightArrowLeft,
    faArrowLeftLong,
    faCaretLeft,
    faAngleLeft,
    faAngleDown,
    faCaretDown,
    faArrowRightLong,
    faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import styles from "./FootballPitchCreate.module.scss";
import Pitch from "./components/Pitch";
import { createNewFootballPich } from "../../../store/slices/ManagerSlice";
import apis from "../../../common/apis";

const cx = classNames.bind(styles);
const FootballPitchCreate = () => {

    const dispatch = useDispatch();
    const dataFootballPitch = useSelector((state) => state.manager);
    const navigate = useNavigate();
    const [footballPitch, setFootballPitch] = useState({
        tensanbong:
            dataFootballPitch.footballName != ""
                ? dataFootballPitch.footballName
                : "",
        id_xaphuong: dataFootballPitch.idWard ? dataFootballPitch.idWard : null,
        id_quanhuyen: dataFootballPitch.idDistrict
            ? dataFootballPitch.idDistrict
            : null,
        id_tinhthanh: dataFootballPitch.idProvince
            ? dataFootballPitch.idProvince
            : null,
        id_trangthai_sanbong: 1,
        id_taikhoan: 1,
        thoigiandong: "",
        thoigianmo: "",
        hinhanh: "",
        gioithieu: dataFootballPitch.description
            ? dataFootballPitch.description
            : "",
        diachicuthe: dataFootballPitch.addressDetail
            ? dataFootballPitch.addressDetail
            : "",
    });
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    function handleInput(e) {
        setFootballPitch({
            ...footballPitch,
            [e.target.name]: e.target.value,
        });
    }

    function handleChangeProvince(e) {
        apis.getDistrict(e.target.value).then((data) => setDistricts(data));
    }

    function handleChangeDistrict(e) {
        apis.getWard(e.target.value).then((data) => setWards(data));
    }

    useEffect(() => {
        dataFootballPitch.idWard
            ? apis.getProvince().then((data) => {
                  setProvinces(data);
                  apis.getDistrict(dataFootballPitch.idProvince).then(
                      (data) => {
                          setDistricts(data);
                          apis.getWard(dataFootballPitch.idDistrict).then(
                              (data) => {
                                  setWards(data);
                              }
                          );
                      }
                  );
              })
            : apis.getProvince().then((data) => {
                  setProvinces(data);
              });
    }, []);

    return (
        <div className={cx("pitch__wrapper")}>
            <div className={cx("title__box")} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Tạo sân bóng</h3>
            </div>
            <div className={cx("content")}>
                <div className={cx("content--top")}>
                    <div className={cx("pitchimages__wrapper")}>
                        <div className={cx("pitchimages__top")}>
                            <img
                                className={cx("pitch__image")}
                                src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg"
                                alt=""
                            />
                            <button className={cx("upload__image")}>
                                Tải ảnh lên
                                <FontAwesomeIcon icon={faFileArrowUp} />
                            </button>
                        </div>

                        <div className={cx("pitchimages__top")}>
                            <img
                                className={cx("pitch__image")}
                                src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/set-background-image-flutter-hero.jpeg"
                                alt=""
                            />
                            <button className={cx("upload__image")}>
                                Tải ảnh lên
                                <FontAwesomeIcon icon={faFileArrowUp} />
                            </button>
                        </div>
                    </div>
                    <div className={cx("pitchinfo__wrapper")}>
                        <div className={cx("info_itemm")}>
                            <h2>Sân bóng:</h2>
                            <input
                                className={cx("footballpitch--name")}
                                type="text"
                                placeholder="Nhập tên sân bóng"
                                value={footballPitch.tensanbong || ""}
                                onChange={handleInput}
                                name="tensanbong"
                            />
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Địa chỉ:</p>
                            <div className={cx("profile__item--infomation")}>
                                <div className={cx("item__select")}>
                                    <select
                                        onChange={(e) => {
                                            handleInput(e);
                                            handleChangeProvince(e);
                                        }}
                                        name="id_tinhthanh"
                                        value={footballPitch.id_tinhthanh || 0}
                                    >
                                        <option disabled value="0">
                                            Chọn tỉnh/thành
                                        </option>

                                        {provinces.map((province, index) => {
                                            return (
                                                <option
                                                    value={
                                                        province.id_tinhthanh
                                                    }
                                                    key={index}
                                                >
                                                    {province.tentinhthanh}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <svg>
                                        <use xlinkHref="#select-arrow-down"></use>
                                    </svg>
                                    <svg className={cx("sprites")}>
                                        <symbol id="select-arrow-down">
                                            <polyline points="1 1 5 5 9 1"></polyline>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className={cx("item__select")}>
                                    <select
                                        value={footballPitch.id_quanhuyen || 0}
                                        onChange={(e) => {
                                            handleInput(e);
                                            handleChangeDistrict(e);
                                        }}
                                        name="id_quanhuyen"
                                    >
                                        <option value="0" disabled>
                                            Chọn quận/huyện
                                        </option>

                                        {districts.map((district, index) => {
                                            return (
                                                <option
                                                    value={
                                                        district.id_quanhuyen
                                                    }
                                                    key={index}
                                                >
                                                    {district.tenquanhuyen}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <svg>
                                        <use xlinkHref="#select-arrow-down"></use>
                                    </svg>
                                    <svg className={cx("sprites")}>
                                        <symbol id="select-arrow-down">
                                            <polyline points="1 1 5 5 9 1"></polyline>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className={cx("item__select")}>
                                    <select
                                        onChange={handleInput}
                                        value={footballPitch.id_xaphuong || 0}
                                        name="id_xaphuong"
                                    >
                                        <option value="0">
                                            Chọn xã/phường
                                        </option>

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
                                    <svg>
                                        <use xlinkHref="#select-arrow-down"></use>
                                    </svg>
                                    <svg className={cx("sprites")}>
                                        <symbol id="select-arrow-down">
                                            <polyline points="1 1 5 5 9 1"></polyline>
                                        </symbol>
                                    </svg>
                                </div>

                                <div className={cx("item__input")}>
                                    <input
                                        type="text"
                                        placeholder="Nhập địa chỉ cụ thể"
                                        onChange={handleInput}
                                        value={footballPitch.diachicuthe}
                                        name="diachicuthe"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Sân:</p>
                            <div className={cx("pitches__wrapper")}>
                                <div className={cx("pitches__box")}>
                                    {dataFootballPitch.pitches.map(
                                        (item, index) => {
                                            return (
                                                <Pitch
                                                    key={index}
                                                    data={item}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                                <div className={cx("add__box")}>
                                    <p
                                        className={cx("btn__editpitch")}
                                        onClick={() => {
                                            dispatch(
                                                createNewFootballPich({
                                                    footballName:
                                                        footballPitch.tensanbong,
                                                    idWard: footballPitch.id_xaphuong,
                                                    idDistrict:
                                                        footballPitch.id_quanhuyen,
                                                    idProvince:
                                                        footballPitch.id_tinhthanh,
                                                    addressDetail:
                                                        footballPitch.diachicuthe,
                                                    description:
                                                        footballPitch.gioithieu,
                                                    pitches: [],
                                                })
                                            );
                                            navigate("pitches");
                                        }}
                                    >
                                        Chỉnh sửa
                                    </p>
                                    <button
                                        className={cx("btn__addpitch")}
                                        onClick={() => {
                                            dispatch(
                                                createNewFootballPich({
                                                    footballName:
                                                        footballPitch.tensanbong,
                                                    idWard: footballPitch.id_xaphuong,
                                                    addressDetail:
                                                        footballPitch.diachicuthe,
                                                    description:
                                                        footballPitch.gioithieu,
                                                    pitches: [],
                                                })
                                            );
                                            navigate("pitches/pitch-create");
                                        }}
                                    >
                                        Thêm sân
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("content--bottom")}>
                    <div className={cx("pitchdescription")}>
                        <h3>Mô tả sân bóng:</h3>
                        <div className={cx("description")}>
                            <textarea
                                type="text"
                                className={cx("description--content")}
                                onChange={handleInput}
                                name="gioithieu"
                                value={footballPitch.gioithieu}
                            />
                        </div>
                    </div>
                    <div className={cx("booking__wrapper")}>
                        <div className={cx("booking__box")}>
                            <button
                                className={cx("btn__booking")}
                                onClick={() => {
                                    dispatch(
                                        createNewFootballPich({
                                            footballName: "",
                                            idWard: null,
                                            idDistrict: null,
                                            idProvince: null,
                                            addressDetail: "",
                                            description: "",
                                            pitches: [],
                                        })
                                    );
                                    navigate("..");
                                }}
                            >
                                Tạo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootballPitchCreate;
