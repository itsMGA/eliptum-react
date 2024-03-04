import JSEncrypt from "jsencrypt";
import axios from "axios";

export const encryptData = async (data, publicKey, encrypt = true) => {
  try {
    // If encryption is not needed, return the plain data
    if (!encrypt) return data;
    // Create a new JSEncrypt object
    const encryptor = new JSEncrypt();

    // Set the public key
    encryptor.setPublicKey(publicKey);

    // Encrypt the data using RSA
    const encryptedData = encryptor.encrypt(data);
    return encryptedData;
  } catch (error) {
    console.error("Error encrypting data: ", error);
    throw error;
  }
};

export default encryptData;
