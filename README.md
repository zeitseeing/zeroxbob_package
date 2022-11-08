# zeroxbob

Get notified about contract activity by email

### Installation and setup

```js
yarn add zeroxbob
```

Set your email address as an environment variable. 
In `.env` add 

```
EMAIL_ADDRESS=my_email@gmail.com
```

### Usage

```js
const zeroxbob = require("zeroxbob");

zeroxbob.registerContract('0xd73d7042f67d2081bf3e709934c48422542ebe4a')
```

Check your email account for an email from zeroxbob.com and confirm your account. Your contract is now being monitored for events and you will receive an email if your contract emits an event or registers a transaction. 
