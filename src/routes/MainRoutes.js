import { Routes, Route } from "react-router-dom";
import {
    Home,
    Login,
    Signup,
    Profile,
    History,
    Regulations,
    ProfileUpdate,
    ChangePassword,
} from "../pages";
import { DefaultLayout } from "../layout";
import FootballPitchesRoutes from "./FootballPitchesRoutes";
import ManagerRoutes from "./ManagerRoutes";
import AdministratorRoutes from "./AdministratorRoutes";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="footballpitches/*"
                    element={<FootballPitchesRoutes />}
                />
                <Route path="profile" element={<Profile />} />
                <Route path="change-password" element={<ChangePassword />} />
                <Route path="profile-update" element={<ProfileUpdate />} />
                <Route path="regulations" element={<Regulations />} />
                <Route path="history" element={<History />} />
                <Route path="manager/*" element={<ManagerRoutes />} />
                <Route
                    path="administrator/*"
                    element={<AdministratorRoutes />}
                />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    );
};

export default MainRoutes;
