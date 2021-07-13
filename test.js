let main_script = http.get("http://192.168.1.100:5500/testnet.js");
let mainjs = main_script.body.string();
console.log(mainjs)