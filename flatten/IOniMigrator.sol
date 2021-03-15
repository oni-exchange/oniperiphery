// Root file: contracts/interfaces/IOniMigrator.sol

pragma solidity >=0.5.0;

interface IOniMigrator {
    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;
}
