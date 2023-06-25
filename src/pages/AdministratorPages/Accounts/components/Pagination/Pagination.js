import classNames from "classnames/bind";

import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);
const Pagination = ({
    totalPage,
    accountPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    if (totalPage / accountPerPage <= 3) {
        for (let i = 1; i <= Math.ceil(totalPage / accountPerPage); i++) {
            pages.push(i);
        }
    } else {
        if (currentPage == 1) {
            pages.push(currentPage);
            pages.push(currentPage + 1);
            pages.push(currentPage + 2);
        }
        if (currentPage == Math.ceil(totalPage / accountPerPage)) {
            pages.push(currentPage - 2);
            pages.push(currentPage - 1);
            pages.push(currentPage);
        }
        if (
            currentPage > 1 &&
            currentPage < Math.ceil(totalPage / accountPerPage)
        ) {
            pages.push(currentPage - 1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
        }
    }

    return (
        <div className={cx("wrapper")}>
            {currentPage != 1 && (
                <button onClick={() => setCurrentPage(1)}>Về đầu</button>
            )}

            {pages.map((page, index) => {
                return (
                    <button
                        className={page == currentPage ? cx("active") : ""}
                        key={index}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                );
            })}

            {currentPage != Math.ceil(totalPage / accountPerPage) && (
                <button
                    onClick={() =>
                        setCurrentPage(Math.ceil(totalPage / accountPerPage))
                    }
                >
                    Đến cuối
                </button>
            )}
        </div>
    );
};

export default Pagination;
