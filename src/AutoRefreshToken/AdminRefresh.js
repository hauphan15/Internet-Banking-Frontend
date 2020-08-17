const axios = require("axios");

const RefreshToken = async function(callback) {
    const data = {
        accessToken: localStorage.getItem("access_token"),
        refreshToken: localStorage.getItem("refresh_token"),
        id: localStorage.getItem("userid"),
    };
    axios
        .post("http://localhost:3000/login/admin-refresh", data)
        .then((response) => {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

const CheckToken = async function(callback) {
    const config = {
        headers: {
            "x-access-token": localStorage.getItem("access_token"),
        },
    };
    axios
        .get("http://localhost:3000/admin/employee-list", config)
        .then((response) => {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

module.exports = {

    RefreshMyToken: (router) => {
        CheckToken(function(data) {
            if (data.Tokensuccess == false) {
                RefreshToken(function(data) {
                    if (data.success == true) {
                        localStorage.setItem("access_token", data.accessToken);
                    } else {
                        localStorage.clear();
                        router.push('/login');
                    }
                });
            }
        });
    },
};