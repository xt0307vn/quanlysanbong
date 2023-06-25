import { Outlet } from 'react-router-dom'
import classnames from "classnames/bind";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from './DefaultLayout.module.scss'

const cx = classnames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('container')}>
        <Header />
        <div className={cx('content')}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
