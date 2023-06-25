import classNames from "classnames/bind";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./Login.module.scss";
import constants from "../../common/constants";
import apis from "./../../common/apis";
import { updateIdAccount, updateTypeAccount } from "../../store/slices";

const cx = classNames.bind(styles);
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        apis.getUser(username, password).then((data) => {
            if (data.length === 1) {
                dispatch(updateIdAccount(data[0].id_taikhoan));
                switch (data[0].id_loaitaikhoan) {
                    case 1:
                        dispatch(updateTypeAccount("administrator"));
                        break;
                    case 2:
                        dispatch(updateTypeAccount("manager"));
                        break;
                    case 3:
                        dispatch(updateTypeAccount("member"));
                        break;
                    default:
                }

                navigate("..");
            } else {
            }
        });
    };

    return (
        <div className={cx("main-login")}>
            <div className={cx("login-contain")}>
                <div className={cx("left-side")}>
                    <h1>ĐĂNG NHẬP</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <button type="submit" id="btn-login">
                            Đăng nhập
                        </button>
                    </form>

                    <p className={cx("move-signup")}>
                        Chưa có tài khoản? <Link to="../signup">Đăng ký</Link>
                    </p>
                </div>
                <div className={cx("right-side")}>
                    <img
                        className={cx("img-login")}
                        src={constants.images.bglogin}
                        alt="Background Login"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
