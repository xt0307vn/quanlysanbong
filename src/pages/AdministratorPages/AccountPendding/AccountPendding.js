import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretDown,
    faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPendding.module.scss";
import apis from "../../../common/apis";
import { useEffect, useRef, useState } from "react";
import Pagination from "./components/Pagination";

const cx = classNames.bind(styles);

const AccountPendding = () => {
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [accountPerPage, setAccountPerPage] = useState(11);
    const lastIndex = currentPage * accountPerPage;
    const firstIndex = lastIndex - accountPerPage;
    const currentAccounts = accounts.slice(firstIndex, lastIndex);

    function handlePagination(e) {}

    function handleComfirm(index, id) {

        apis.updateAccountPendding(id).then((data) => console.log(data));
        const newAccounts = accounts;
        newAccounts.splice(index, 1);
        setAccounts([...newAccounts]);
    }

    function handleCancle(index,id) {
        apis.deleteAccount(id).then((data) => {
            console.log(data);
        });
        const newAccounts = accounts;
        newAccounts.splice(index, 1);
        setAccounts([...newAccounts]);
    }

    function handleClickRow(account) {
        navigate("../accounts/" + account.id_taikhoan)
    }

    useEffect(() => {
        apis.getAccountsPendding()
            .then((data) => {
                setAccounts(data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    return (
        <div className={cx("wrapper")}>
            <div className={cx("title__box")} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faCaretLeft} size="2x" />
                <h3 className={cx("title")}>Duyệt tài khoản</h3>
            </div>
            <table className={cx("dataTable")}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên tài khoản</th>
                        <th>Email</th>
                        <th>Loại tài khoản</th>
                        <th>Trạng thái</th>
                        <th>Sự kiện</th>
                    </tr>
                </thead>
                <tbody>
                    {currentAccounts.map((account, index) => {
                        return (
                            <tr key={index} onClick={() => handleClickRow(account)}>
                                <td>{account?.id_taikhoan}</td>
                                <td>{account?.tentaikhoan}</td>
                                <td>{account?.email}</td>
                                <td>{account?.tenloaitaikhoan}</td>
                                <td>{account?.trangthai_taikhoan}</td>
                                <td>
                                    <button
                                        className={cx("btn", "edit")}
                                        onClick={() =>
                                            handleComfirm(
                                                index,
                                                account?.id_taikhoan
                                            )
                                        }
                                    >
                                        Duyệt
                                    </button>
                                    <button
                                        className={cx("btn", "delete")}
                                        onClick={() =>
                                            handleCancle(index, account?.id_taikhoan)
                                        }
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className={cx("pagination")}>
                <Pagination
                    totalPage={accounts.length}
                    accountPerPage={accountPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default AccountPendding;
