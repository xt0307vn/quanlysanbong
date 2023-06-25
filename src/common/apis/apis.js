import axios from "axios";

class QuanLyDatSan {
    static endpoint = {
        url: "http://localhost:8800/",
        accounts: {},
        footballpitches: {},
    };

    static getFootballPitches = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8800/football-pitches"
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getFootballPitch = async (id) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/football-pitch/" + id
            );
            return res.data.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getPitches = async (id) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/football-pitch/" + id
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getIntervalsPitch = async (id) => {
        try {
            const res = await axios.get("http://localhost:8800/pitch/" + id);
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getPrice = async (idPitch, idInterval) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/getPrice?idPitch=" +
                    String(idPitch) +
                    "&idInterval=" +
                    String(idInterval)
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getUser = async (username, password) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/getUser?username=" +
                    username +
                    "&password=" +
                    password
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getAccounts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/accounts");
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getAccountsPendding = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8800/accounts-pendding"
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getProvince = async () => {
        try {
            const res = await axios.get("http://localhost:8800/getProvince");
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getDistrict = async (idProvince) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/getDistrict?idProvince=" + idProvince
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static getWard = async (idDistrict) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/getWard?idDistrict=" + idDistrict
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static createAccount = async (account) => {
        try {
            const res = await axios.post(
                "http://localhost:8800/account",
                account
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static deleteAccount = async (idAccount) => {
        try {
            const res = await axios.delete(
                "http://localhost:8800/account/" + idAccount
            );
            return Promise.res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static checkExsitsUser = async (username) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/checkExsitsUser?username=" + username
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };
    static getAccount = async (id) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/account?idAccount=" + id
            );
            return res.data[0];
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static updateAccount = async (id, account) => {
        try {
            const res = await axios.put(
                "http://localhost:8800/account/" + id,
                account
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static booking = async (data) => {
        try {
            const res = await axios.post("http://localhost:8800/booking", data);
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static updateAccountPendding = async (id) => {
        try {
            const res = await axios.put(
                "http://localhost:8800/accounts-pendding/" + id
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static history = async (idAccount) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/history/" + idAccount
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static checkPassword = async (data) => {
        try {
            const res = await axios.get(
                "http://localhost:8800/check-password?id_taikhoan=" +
                    data.id_taikhoan +
                    "&matkhau=" +
                    data.matkhau
                // "http://localhost:8800/check-password?id_taikhoan=1&matkhau=admin"
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };

    static changePassword = async (data) => {
        try {
            const res = await axios.put(
                "http://localhost:8800/change-password?matkhau=" +
                    data.matkhaumoi +
                    "&id_taikhoan=" +
                    data.id_taikhoan
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };
}

export default QuanLyDatSan;
