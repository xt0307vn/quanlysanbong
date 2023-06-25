import { Routes, Route } from "react-router-dom";
import { FootballPitches } from "../pages";
import FootballPitch from "../pages/FootballPitches/components/FootballPitch";

const ListsRoutes = () => {
    return (
        <Routes>
            <Route index element={<FootballPitches />} />
            <Route path=":idFootballPitch/*" element={<FootballPitch />} />
            <Route path="?page" />
        </Routes>
    );
};

export default ListsRoutes;
