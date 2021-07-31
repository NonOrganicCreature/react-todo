import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { ds } from "../dataSource";

const ApiInstance = axios.create({
    timeout: 30000,
});

const mock = new MockAdapter(ApiInstance, { delayResponse: 1000 });

mock.onPost("/register").reply(function (config) {
    const data = JSON.parse(config.data);
    const userData = localStorage.getItem("userData");
    if (!userData) {
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
    }

    if (userData) {
        const newUserData = JSON.parse(userData);
        newUserData.login = data.login;
        newUserData.password = data.password;
        localStorage.setItem("userData", JSON.stringify(newUserData));
        return [
            200,
            {
                status: true,
            },
        ];
    }
    return [
        403,
        {
            status: false,
        },
    ];
});

mock.onGet("/users").reply(function (config) {
    console.log(config);
    return [
        200,
        {
            users: [{ id: 1, name: "John Smith" }],
        },
    ];
});

// ApiInstance.post("/register", { params: { kek: "John" } }).then(function (
//     response
// ) {
//     console.log(response.data);
// });

export { ApiInstance };
