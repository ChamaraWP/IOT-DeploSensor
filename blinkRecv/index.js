var gpio = require('onoff').Gpio;
var HDWalletProvider = require("truffle-hdwallet-provider");
import Web3 from 'web3';

//var pir = new GPIO(17, 'in', 'both');

export default (app) => {
     const provider =  new HDWalletProvider(
         'sport stone topple adjust hawk amount shrimp output gasp concert elbow cheese',
         'https://rinkeby.infura.io/ZloaJG09rI2lKqTNdpEj'
     )


    const _deviceAdd = '0x504a7321b0ce05a8d83f806ff149ceda1d730169'
    console.log('Led Set Started Wainting for Event');
    const contract = '0x0a243c2a91b4320fb33e39df830cb39ee5672eca';
    const owner = '0x6b65556e18daff346766b4b7615a4382558f0f32';
    const ABI = JSON.parse('[{"constant":false,"inputs":[{"name":"usersAddr","type":"address"},{"name":"deviceAddr","type":"address"},{"name":"write","type":"bool"}],"name":"addUserToDevice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"usersAddr","type":"address"},{"name":"deviceAddr","type":"address"},{"name":"write","type":"bool"}],"name":"changePermission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviceAddr","type":"address"},{"name":"Dtype","type":"string"},{"name":"model","type":"string"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviceAddr","type":"address"},{"name":"data","type":"string"}],"name":"sendDataToDevice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manifacturer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"viewUsersOfDevice","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"getDataFromDevice","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"readDeviceOutupt","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAllDevicesOfUser","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"deviceAddr","type":"address"}],"name":"viewDeviceDetails","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewOwnedDevicesOfUser","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"usersAddr","type":"address"},{"name":"deviceAddr","type":"address"}],"name":"viewPermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"sendDataToUsers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_input","type":"string"},{"indexed":true,"name":"_to","type":"address"}],"name":"dataRecievedToDevice","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_output","type":"string"},{"indexed":true,"name":"_to","type":"address"}],"name":"dataSentToUsers","type":"event"}]');


   // const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'));
    const web3 = new Web3(provider);
    //const accounts = web3.eth.getAccounts();
    

    const jcs = web3.currentProvider;
    //console.log(jcs);
    const sendContract = new web3.eth.Contract(ABI, contract);
    //console.log(sendContract);
     sendContract.methods.viewDeviceDetails(_deviceAdd).call({ from: owner }).then(console.log);

     sendContract.methods.sendDataToUsers("Hello").send({ from: _deviceAdd, gas: '1000000' }).then(console.log);



    // pir.watch(function (err, value) {

    //     console.log(err);
    //     console.log(value);
    //     if (err) {
    //         console.log(err);
    //     }
    //     else if (value) {
    //         console.log('Object Detected', value);
    //         //sendContract.methods.sendDataToUsers("Hello").send({ from: owner }).then(console.log);
            
    //         try {
               
    //             console.log('Message Sent!');
    //         } catch (e) {
    //             console.log(e);
    //         }

    //     } else {
    //         console.log('No Object at the Moment', value);
    //     }
    // });

  

    return app;
}

