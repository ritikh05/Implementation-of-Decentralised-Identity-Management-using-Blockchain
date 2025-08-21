// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DIDRegistry {
    struct Identity {
        string name;
        string email;
        string data; // extra data like publicKey or metadata
        address owner;
    }

    mapping(address => Identity) private identities;

    event IdentityCreated(address indexed user, string name, string email);
    event IdentityUpdated(address indexed user, string name, string email);

    // ✅ Check if identity exists
    function identityExists(address user) public view returns (bool) {
        return bytes(identities[user].name).length > 0;
    }

    // Create a new identity
    function createIdentity(string memory _name, string memory _email, string memory _data) public {
        require(!identityExists(msg.sender), "Identity already exists!");
        identities[msg.sender] = Identity(_name, _email, _data, msg.sender);
        emit IdentityCreated(msg.sender, _name, _email);
    }

    // Update existing identity
    function updateIdentity(string memory _name, string memory _email, string memory _data) public {
        require(identityExists(msg.sender), "Identity does not exist!");
        identities[msg.sender] = Identity(_name, _email, _data, msg.sender);
        emit IdentityUpdated(msg.sender, _name, _email);
    }

    // View your identity
    function getMyIdentity() public view returns (string memory, string memory, string memory, address) {
        Identity memory id = identities[msg.sender];
        return (id.name, id.email, id.data, id.owner);
    }

     // 🔎 View identity of any user by address
    function getIdentity(address user) public view returns (string memory, string memory, string memory, address) {
        Identity memory id = identities[user];
        return (id.name, id.email, id.data, id.owner);
    }
}
