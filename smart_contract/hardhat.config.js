// https://eth-ropsten.alchemyapi.io/v2/bZUZYia4nRVHPu0gkRWQtRJb6qliyBU4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bZUZYia4nRVHPu0gkRWQtRJb6qliyBU4',
      accounts: [ '8bac22dc005cb719f4bd3becb9b072ae5067c6cc4cca92012ee5b4f06bbad2e4' ]
    }
  }
}