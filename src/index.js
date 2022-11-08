const axios = require("axios");
require('dotenv').config();

const url = "https://zeroxbob.com/registrations";
const email_address = process.env.EMAIL_ADDRESS

function registerContract(contract_address) {
  axios
    .post(url, {
      address: contract_address,
      email: email_address,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = { registerContract }
