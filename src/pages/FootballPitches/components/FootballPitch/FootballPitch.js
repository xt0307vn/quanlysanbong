import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import apis from "./../../../../common/apis";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Pitch from "./components/Pitch";
import styles from "./FootballPitch.module.scss";
import Interval from "./components/Interval/Interval";
import DialogRighttoLeft from "../../../../components/DialogRighttoLeft";

const cx = classNames.bind(styles);
const FootballPitch = () => {
    const navigate = useNavigate();
    const { idFootballPitch } = useParams();
    const [dataFootballPitch, setDataFootballPitch] = useState({});
    const [dataPitches, setDataPitches] = useState([]);
    const [currentPitch, setCurrentPitch] = useState();
    const [intervalPitch, setIntervalPitch] = useState();
    const [intervalsPitch, setIntervalsPitch] = useState([]);
    const [currentInterval, setCurrentInterval] = useState();
    const [price, setPrice] = useState(0);
    const [showDialog, setShowDialog] = useState(false)
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    const handleCurrentPitch = (id) => {
        setCurrentPitch(id);
        apis.getIntervalsPitch(id).then((data) => {
            setIntervalsPitch(data);
        });
    };

    const handleCurrentInterval = (id) => {
        setCurrentInterval(id);
    };

    function handleBookPitch() {
        const d = new Date();

        const data = {
            id_san: currentPitch,
            id_taikhoan: localStorage.getItem("idAccount"),
            ngaydat:
                d.getFullYear() +
                "-" +
                (parseInt(d.getMonth()) + 1) +
                "-" +
                d.getDate(),
            id_trangthai_datsan: 2,
            id_khunggio: currentInterval,
        };

        apis.booking(data).then((data) => console.log(data));
        apis.getIntervalsPitch(currentPitch).then((data) => {
            setIntervalsPitch(data);
        });
        setShowDialog(!showDialog)
        setTimeout(() => {
            setShowDialog(false)
        }, 2000);
    }

    useEffect(() => {
        apis.getFootballPitch(idFootballPitch)
            .then((data) => {
                setDataFootballPitch(data);
                setDataPitches(data.danhsachsancon);
            })
            .catch((err) => console.log(err));

        apis.getPrice(currentPitch, currentInterval).then((data) =>
            setPrice(data[0]?.giatien)
        );
    }, [currentPitch, currentInterval]);

    return (
        <div className={cx("pitch__wrapper")}>
            {
                showDialog && <DialogRighttoLeft message="Đã gửi yêu cầu đặt sân"/>
            }
            <div className={cx("title__box")} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Thông tin sân bóng</h3>
            </div>
            <div className={cx("content")}>
                <div className={cx("content--top")}>
                    <div className={cx("pitchimages__wrapper")}>
                        <img
                            className={cx("pitch__image")}
                            src={dataFootballPitch?.hinhanh}
                            alt=""
                        />
                        <img
                            className={cx("pitch__image")}
                            src={dataFootballPitch?.hinhanh}
                            alt=""
                        />
                    </div>
                    <div className={cx("pitchinfo__wrapper")}>
                        <div className={cx("info_itemm")}>
                            <h2>Sân bóng:</h2>
                            <h2>{dataFootballPitch?.tensanbong}</h2>
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Địa chỉ:</p>
                            <p>{dataFootballPitch?.diachi}</p>
                        </div>
                        <div className={cx("info_itemm")}>
                            <p>Sân:</p>
                            <div className={cx("pitches__box")}>
                                {dataPitches.map((item, index) => {
                                    return (
                                        <Pitch
                                            data={item}
                                            key={index}
                                            onClick={() =>
                                                handleCurrentPitch(item?.id_san)
                                            }
                                            current={currentPitch}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className={cx("info_itemm")}>
                            <p>Khung giờ:</p>
                            <div className={cx("interval__box")}>
                                {intervalsPitch.map((item, index) => {
                                    return (
                                        <Interval
                                            data={item}
                                            key={index}
                                            onClick={() =>
                                                handleCurrentInterval(
                                                    item?.id_khunggio
                                                )
                                            }
                                            inactive={
                                                item?.id_trangthai_sankhunggio ==
                                                2
                                                    ? true
                                                    : false
                                            }
                                            current={currentInterval}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("content--bottom")}>
                    <div className={cx("pitchdescription")}>
                        <h3>Mô tả sân bóng:</h3>
                        <div className={cx("description")}>
                            <p>
                                {
                                    dataFootballPitch?.gioithieu
                                }
                            </p>
                        </div>
                    </div>
                    <div className={cx("booking__wrapper")}>
                        <div className={cx("booking__box")}>
                            <h2 className={cx("price")}>
                                Tổng thanh toán:{" "}
                                <span>
                                    {price == undefined ? 0 : VND.format(price)}
                                </span>
                            </h2>
                            <button
                                className={cx("btn__booking")}
                                onClick={handleBookPitch}
                            >
                                Đặt sân
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootballPitch;
