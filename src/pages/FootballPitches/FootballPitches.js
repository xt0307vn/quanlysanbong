import { Link, useSearchParams, useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./FootballPitches.module.scss";
import PitchOverview from "./components/PitchOverview/PitchOverview";
import apis from "./../../common/apis";

const cx = classNames.bind(styles);

const List = () => {
    const navigate = useNavigate();
    const [dataFootballPitches, setDataFootballPitches] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const haha = searchParams.get("page");
    const [page, setPage] = useState(haha == null ? 1 : haha);

    const location = useLocation()


    function onNextPage() {
        setPage((prev) => {
            return prev + 1;
        });
    }
    function handleClickPitch(idFootballPitch) {
        navigate(idFootballPitch);
    }

    // console.log(dataFootballPitches)
    useEffect(() => {
        apis.getFootballPitches().then((data) => {
            setDataFootballPitches(data);
        });
    }, []);
    return (
        <div className={cx("pitches__wrapper")}>
            <div className={cx("pitchoverview")}>
                {dataFootballPitches.map((item, index) => {
                    return (
                        <PitchOverview
                            data={item}
                            onClick={() => {
                                handleClickPitch(String(item.id_sanbong));
                            }}
                            key={index}
                        />
                    );
                })}
            </div>

            <div className={cx("navigation__wrapper")}>
                <button onClick={onNextPage}>
                </button>
            </div>
        </div>
    );
};

const ListSub = ({ name }) => {
    return <div>Đây là list con</div>;
};

export default List;
