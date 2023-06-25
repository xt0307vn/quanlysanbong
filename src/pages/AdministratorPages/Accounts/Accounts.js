import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Accounts.Module.scss";
import apis from "../../../common/apis";
import { useEffect, useRef, useState } from "react";
import Pagination from "./components/Pagination";

const cx = classNames.bind(styles);

const Accounts = () => {
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [accountPerPage, setAccountPerPage] = useState(11);
    const lastIndex = currentPage * accountPerPage;
    const firstIndex = lastIndex - accountPerPage;
    const currentAccounts = accounts.slice(firstIndex, lastIndex);

    function handlePagination(e) {}

    function handleEdit(id) {
        // localStorage.setItem("idAccountUpdate", id);

        navigate("update-account?idAccount=" + id);
    }

    function handleDelete(id) {
        apis.deleteAccount(id).then((data) => {
            console.log(data);
        });
        apis.getAccounts().then((data) => {
            setAccounts(data);
        });
    }

    function handleClickRow(account) {
        navigate(String(account.id_taikhoan))
    }

    useEffect(() => {
        apis.getAccounts()
            .then((data) => {
                setAccounts(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className={cx("wrapper")}>
            <button
                className={cx("btnAdd")}
                onClick={() => {
                    navigate("create-account");
                }}
            >
                Thêm tài khoản
            </button>

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
                            <tr key={index} >
                                <td>{account?.id_taikhoan}</td>
                                <td onClick={() => handleClickRow(account)}>{account?.tentaikhoan}</td>
                                <td>{account?.email}</td>
                                <td>{account?.tenloaitaikhoan}</td>
                                <td>{account?.trangthai_taikhoan}</td>
                                <td>
                                    <button
                                        className={cx("btn", "edit")}
                                        onClick={() =>
                                            handleEdit(account?.id_taikhoan)
                                        }
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        className={cx("btn", "delete")}
                                        onClick={() =>
                                            handleDelete(account?.id_taikhoan)
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

export default Accounts;
