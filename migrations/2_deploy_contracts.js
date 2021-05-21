const jsonOniRouter02 = require('../build/OniRouter02.json');
jsonOniRouter02.contractName = 'OniRouter02';

const jsonWETH9 = require('../build/WETH9.json');
jsonWETH9.contractName = 'WETH9';

const contract = require('@truffle/contract');

const OniRouter02 = contract(jsonOniRouter02);
const WETH9 = contract(jsonWETH9);


// const { BN } = require('@openzeppelin/test-helpers');
// const ether = (n) => new BN(web3.utils.toWei(n, 'ether'));

module.exports = function (deployer, network) {
  OniRouter02.setProvider(this.web3._provider);
  WETH9.setProvider(this.web3._provider);

  deployer.then(async () => {
    if (network === 'test' || network === 'soliditycoverage') {
      // do nothing
    } else if (network === 'bsctestnet') {
      const WBNBAddress = '0xae13d989dac2f0debff460ac112a837c89baa7cd';
      const b = await deployer.deploy(OniRouter02, process.env.ONI_FACTORY_RINKEBY, WBNBAddress, { from: process.env.DEPLOYER_ACCOUNT });
      console.log('factory:', await b.factory.call());
      console.log('WETH:', await b.WBNB.call());
    } else if (network === 'bsc') {
      const WBNBAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
      const b = await deployer.deploy(OniRouter02, process.env.ONI_FACTORY_MAINNET, WBNBAddress, { from: process.env.DEPLOYER_ACCOUNT });
      console.log('factory:', await b.factory.call());
      console.log('WETH:', await b.WBNB.call());
    } else {
      console.error(`Unsupported network: ${network}`);
    }
  });
};
