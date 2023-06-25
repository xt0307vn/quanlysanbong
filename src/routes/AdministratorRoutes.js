import { Routes, Route } from "react-router-dom";

import { Account, Accounts, AccountCreate, AccountUpdate, AccountPendding } from './../pages/AdministratorPages'

const AdministratorRoutes = () => {
    return (
        <Routes>
            <Route path="accounts/*"  element={<AccountsRoutes />} />
            <Route path="accounts-pendding/*"  element={<AccountPendding />} />
        </Routes>
    );
};


const AccountsRoutes = () => {
    return (
        <Routes>
            <Route index  element={<Accounts />} />
            <Route path=":idAccount" element={<Account />} />
            <Route path="create-account" element={<AccountCreate />} />
            <Route path="update-account" element={<AccountUpdate />} />
        </Routes>
    );
};


export default AdministratorRoutes;
