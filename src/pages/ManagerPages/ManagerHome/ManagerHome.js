import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "./ManagerHome.module.scss";
import apis from "../../../common/apis";
import { useEffect, useState } from "react";
import OverviewFootbllPitch from "./component/OverviewFootbllPitch/OverviewFootbllPitch";
import OverviewPitch from "./component/OverviewPitch/OverviewPitch";

const cx = classNames.bind(styles);
const ManagerHome = () => {
    const [footballPitch, setFootballPitch] = useState([]);
    const navigate = useNavigate();
    const idAccount = useSelector((state) => state.account.idAccount);

    useEffect(() => {
        apis.getManagetFootballPitch(2)
            .then((data) => {
                setFootballPitch(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className={cx("overview__wrapper")}>
            <div className={cx("footballpitches__wrapper")}>
                <div className={cx("footballpitches__showall")}>
                    <h2>Danh sách sân bóng</h2>
                    <button
                        className={cx("create")}
                        onClick={() => navigate("football-pitch-create")}
                    >
                        Tạo sân bóng
                    </button>
                </div>
                <div className={cx("footballpitches__overview")}>
                    {footballPitch.map((item, index) => {
                        return <OverviewFootbllPitch key={index} data={item}/>;
                    })}
                </div>
            </div>
            <div className={cx("pitches__wrapper")}>
                <div className={cx("pitches__showall")}>
                    <h2>Danh sách sân </h2>
                    <p>Tất cả sân >></p>
                </div>

                <div className={cx("pitches__overview")}>
                    {/* <OverviewPitch />
                    <OverviewPitch />
                    <OverviewPitch /> */}
                </div>
            </div>
        </div>
    );
};

export default ManagerHome;
