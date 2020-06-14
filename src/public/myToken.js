const axios = require("axios");

function RefreshToken(router, myurl) {
  const data = {
    accessToken: localStorage.getItem("myaccesstoken"),
    refreshToken: localStorage.getItem("myrefreshtoken"),
    id: localStorage.getItem("myID"),
  };
  axios
    .post("http://localhost:3000/login/user-refresh", data)
    .then((response) => {
      if (response.data.result == true) {
        localStorage.setItem("myaccesstoken", response.data.accessToken);
        router.push(myurl);
      }
      else{
        router.push('/login');
      }

    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = {
  CheckToken: (router, myurl) => {
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("myaccesstoken"),
      },
    };
    axios
      .get("http://localhost:3000/customer/nhacno", config)
      .then((response) => {
        if (response.data.message) {
          RefreshToken(router, myurl);     
        } else {
          router.push(myurl);
        }
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },
};
