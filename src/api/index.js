import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { ds } from "../dataSource";

const ApiInstance = axios.create({
    timeout: 30000,
});

const mock = new MockAdapter(ApiInstance, { delayResponse: 1000 });

mock.onPost("/register").reply(function (config) {
    const data = JSON.parse(config.data);
    localStorage.setItem(
        "userData",
        JSON.stringify({
            credentials: {
                login: data.login,
                password: data.password,
            },
        })
    );
    return [
        200,
        {
            status: true,
        },
    ];
});

mock.onPost("/auth").reply(function (config) {
    const data = JSON.parse(config.data);
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        if (
            userData.credentials.login === data.login &&
            userData.credentials.password === data.password
        ) {
            return [
                200,
                {
                    status: true,
                },
            ];
        } else {
            return [
                400,
                {
                    status: false,
                },
            ];
        }
    }
    return [
        400,
        {
            status: false,
        },
    ];
});

// ApiInstance.post("/register", { params: { kek: "John" } }).then(function (
//     response
// ) {
//     console.log(response.data);
// });

export { ApiInstance };
