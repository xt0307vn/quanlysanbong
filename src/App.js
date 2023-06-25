import { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    RouterProvider,
} from "react-router-dom";

import MainRoutes from "./routes/MainRoutes";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import { Signup } from "./pages";

function App() {
    return (
        <Router>
            <MainRoutes />
            {/* <Signup/> */}
        </Router>
    );
}

export default App;
