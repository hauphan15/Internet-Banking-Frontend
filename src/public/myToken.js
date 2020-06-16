const axios = require("axios");

const RefreshToken = async function (callback) {
  const data = {
    accessToken: localStorage.getItem("myaccesstoken"),
    refreshToken: localStorage.getItem("myrefreshtoken"),
    id: localStorage.getItem("myID"),
  };
  axios
    .post("http://localhost:3000/login/user-refresh", data)
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
      "x-access-token": localStorage.getItem("myaccesstoken"),
    },
  };
  axios
    .get("http://localhost:3000/customer/nhacno", config)
    .then((response) => {
      callback(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = {
  RefreshMyToken: () => {
    CheckToken(function(data) {
      if(data.message) {
        RefreshToken(function(data) {
          if(data.result == true) {
            localStorage.setItem("myaccesstoken", data.accessToken);
            localStorage.isrefreshtoken = true;  
          }
          else {
            localStorage.isrefreshtoken = false; 
          }
        });
      } else {
        localStorage.isrefreshtoken = true; 
      }
    });

    var result = localStorage.getItem("isrefreshtoken");
    localStorage.removeItem("isrefreshtoken");
    return result;

  }
};
