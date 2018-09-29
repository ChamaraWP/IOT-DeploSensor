var gpio = require('onoff').Gpio;
var HDWalletProvider = require("truffle-hdwallet-provider");
import Web3 from 'web3';
const readline = require('readline');

var pir = new gpio(17, 'in', 'both');

export default (app) => {
    const provider = new HDWalletProvider(
        'sting token east quiz cheap spoil pulse frequent vanish long liberty draft',
        'https://rinkeby.infura.io/ZloaJG09rI2lKqTNdpEj'
    )

    const _deviceAdd = '0x91a341b9b62aeaa849f86142bfc796622d49ba53'
    console.log('Led Set Started Wainting for Event');
    const contract = '0x6df11d7aa894df04338eb3252b3247a8b488d922';
    const owner = '0x4b632886aa9ad78bc3d60b1899cdd28b9b7f9389';
    const ABI = JSON.parse('[{"constant":false,"inputs":[{"name":"usersAddr","type":"address"},{"name":"deviceAddr","type":"address"},{"name":"write","type":"bool"}],"name":"addUserToDevice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"usersAddr","type":"address"},{"name":"deviceAddr","type":"address"},{"name":"write","type":"bool"}],"name":"changePermission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviceAddr","type":"address"},{"name":"Dtype","type":"string"},{"name":"model","type":"string"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviceAddr","type":"address"},{"name":"data","type":"string"}],"name":"sendDataToDevice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manifacturer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"viewUsersOfDevice","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"getDataFromDevice","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"readDeviceOutupt","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAllDevicesOfUser","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"viewDeviceDetails","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewOwnedDevicesOfUser","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"usersAddr","type":"address"},{"name":"deviceAddr","type":"address"}],"name":"viewPermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"sendDataToUsers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_input","type":"string"},{"indexed":true,"name":"_to","type":"address"}],"name":"dataRecievedToDevice","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_output","type":"string"},{"indexed":true,"name":"_to","type":"address"}],"name":"dataSentToUsers","type":"event"}]');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    const web3 = new Web3(provider);

    const jcs = web3.currentProvider;
    const sendContract = new web3.eth.Contract(ABI, contract);
    sendContract.methods.viewDeviceDetails(_deviceAdd).call({ from: owner }).then(console.log);
    rl.question('Type start to turn on the sensore ', (answer) => {
        console.log(`Device Strated: ${answer}ed`);

        if (answer === "start") {

            pir.watch(function (err, value) {
                console.log(err);
                console.log(value);
                if (err) {
                    console.log(err);
                }
                else if (value) {
                    console.log('Object Detected', value);
                    try {
			sendContract.methods.sendDataToUsers("red").send({from: _deviceAdd, gas: '1000000' }).then(console.log);
                        console.log('Message Sent!');
                    } catch (e) {
                        console.log(e);
                    }

                } else {
                    console.log('No Object at the Moment', value);
                }
            });
        }

        rl.close();
    });



    return app;
}

