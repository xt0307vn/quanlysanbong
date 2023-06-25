import classNames from "classnames/bind";

import styles from "./Regulations.module.scss";

const cx = classNames.bind(styles);


const Regulations = () => {
    return(
        <div className={cx("wrapper")}>
            <div className={cx("title")}>
                <h1>Qui định của website</h1>
            </div>

            <div className={cx("regul__wrapper")}>
                <div className={cx("regul__item")}>
                    <p>Đăng ký tài khoản: Quý khách cần đăng ký tài khoản trên trang web của chúng tôi trước khi đặt sân.</p>
                </div>
                <div className={cx("regul__item")}>
                    <p>Hủy đặt sân: Quý khách cần hủy đặt sân trước ít nhất 24 giờ để tránh bị tính phí hủy đặt sân.</p>
                </div>
                <div className={cx("regul__item")}>
                    <p>Thanh toán phí sân: Quý khách cần thanh toán phí sân đúng hạn để đảm bảo sân được đặt cho các đội bóng khác sau này.</p>
                </div>
                <div className={cx("regul__item")}>
                    <p>Thời gian đặt sân: Quý khách cần đặt sân trước ít nhất 24 giờ để đảm bảo sân được đặt cho đội bóng của mình.</p>
                </div>
                <div className={cx("regul__item")}>
                    <p>Điều kiện thời tiết: Trong trường hợp thời tiết xấu (mưa to, sân bóng ngập nước...) chúng tôi sẽ liên hệ với quý khách để hủy đặt sân hoặc chuyển sang sân khác trong cùng khu vực.</p>
                </div>

                <div className={cx("regul__item")}>
                    <p>Nghiêm túc trong thi đấu: Chúng tôi kêu gọi các đội bóng đặt sân và các thành viên trong đội phải có thái độ nghiêm túc trong thi đấu, tránh việc gây mất trật tự và xúc phạm đến đội bóng khác.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Regulations