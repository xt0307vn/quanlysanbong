import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Pitches.module.scss";
import PitchBox from "./PitchBox/PitchBox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePitch } from "../../../store/slices";

const cx = classNames.bind(styles);
const Pitches = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.manager);
    const navigate = useNavigate();

    function handleDelete(index) {
        dispatch(deletePitch(index));
    }

    function handleDone() {
        navigate(-1);
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("filter__wrapper")}>
                <div>Lọc</div>
                <button
                    className={cx("btn", "btn--edit")}
                    onClick={() => navigate("pitch-create")}
                >
                    Thêm sân
                </button>
            </div>
            <div className={cx("pitches__wrapper")}>
                {data.pitches.map((item, index) => {
                    // console.log(item)
                    return (
                        <PitchBox
                            key={index}
                            data={item}
                            onClickDelete={() => handleDelete(index)}
                        />
                    );
                })}
            </div>

            <div className={cx("done__box")}>
                <button className={cx("btn", "btn_done")} onClick={handleDone}>
                    Hoàn tất
                </button>
            </div>
        </div>
    );
};

export default Pitches;
