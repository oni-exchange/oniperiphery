// Root file: contracts/interfaces/V1/IOniV1Factory.sol

pragma solidity >=0.5.0;

interface IOniV1Factory {
    function getExchange(address) external view returns (address);
}
