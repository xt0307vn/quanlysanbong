import { Routes, Route } from "react-router-dom";
import {
    ManagerHome,
    Pitches,
    PitchUpdate,
    FootballPtiches,
    FootballPtichCreate,
    FootballPitchUpdate,
    FootballPitchDetail,
    PitchDetail,
    FootballPitchCreate,
    FootballPitches,
    PitchCreate,
} from "../pages/ManagerPages";

const ManagerRoutes = () => {
    return (
        <Routes>
            <Route index element={<ManagerHome />} />
            <Route path="football-pitches" element={<FootballPitches />} />

            <Route
                path="football-pitch-create"
                element={<FootballPitchCreate />}
            />
            <Route
                path="football-pitch-update"
                element={<FootballPitchUpdate />}
            />
            <Route
                path=":idFootballPitch/*"
                element={<FootballPitchRoutes />}
            />
        </Routes>
    );
};

const FootballPitchRoutes = () => {
    return (
        <Routes>
            <Route index element={<FootballPitchDetail />} />
            <Route path=":idPitch" element={<PitchDetail />} />
            <Route path="pitches/*" element={<PitchesRoutes />} />

            <Route path="?page" />
        </Routes>
    );
};

const PitchesRoutes = () => {
    return (
        <Routes>
            <Route index element={<Pitches />} />
            <Route path="pitch-create" element={<PitchCreate />} />
            <Route path="pitch-update" element={<PitchUpdate />} />
        </Routes>
    );
};

export default ManagerRoutes;
