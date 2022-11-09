const axios = require("axios");
require('dotenv').config();

const url = "https://zeroxbob.com/registrations";
const email_address = process.env.EMAIL_ADDRESS

async function registerContract(contract_address) {
  await axios
    .post(url, {
      address: contract_address,
      email: email_address,
    })
    .then(function (response) {
      console.log('zeroxbob.com success')
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('zeroxbob.com error')
      console.log(error.response.data);
    });
}

module.exports = { registerContract }
