import { useEffect, useState } from "react";
import { ApiInstance } from "../api";

export const useAuth = () => {
    const [status, setStatus] = useState(false);
    const initialUserCredentials = JSON.parse(localStorage.getItem("userData"));

    const doAuth = async (login, password) => {
        try {
            if (!(login && password)) {
                throw new Error("No user credentials data");
            }
            await ApiInstance.post("/auth", {
                login: login,
                password: password,
            });
            setStatus(true);
            console.log("authorized");
        } catch (error) {
            setStatus(false);
            console.log(error);
        }
    };

    useEffect(() => {
        doAuth(
            initialUserCredentials.credentials.login,
            initialUserCredentials.credentials.password
        );
        return () => {};
    });

    return [status, doAuth];
};
