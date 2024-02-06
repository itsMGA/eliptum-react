const axios = require("axios");
const NodeRSA = require("node-rsa");
const fs = require("fs");

// Define the URL of the API endpoint for cosd
const cosdApiUrl = "https://eliptum.tech/user/cosd";

// Function to encrypt a string
function encryptString(publicKey, stringToEncrypt) {
  // Remove potential formatting issues
  publicKey = publicKey.replace(/\\n/g, "\n").trim();

  if (publicKey.startsWith("b'")) {
    publicKey = publicKey.substring(2, publicKey.length - 1);
  }

  const key = new NodeRSA(publicKey, "pkcs8-public-pem");
  return key.encrypt(stringToEncrypt, "base64");
}

// Function to write encrypted data to a file
function writeToFile(data) {
  fs.writeFile("encryptedPassword.txt", data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Encrypted password written to encryptedPassword.txt");
    }
  });
}

// Get the public key from the server
axios
  .get(cosdApiUrl)
  .then((response) => {
    const publicKey = response.data.cosd;

    // Encrypt the string "password"
    const encryptedPassword = encryptString(publicKey, "password");

    // Console log and write the encrypted password to a file
    console.log("Encrypted Password:", encryptedPassword);
    writeToFile(encryptedPassword);
  })
  .catch((error) => {
    console.error("Public Key Fetch Error:", error);
  });
