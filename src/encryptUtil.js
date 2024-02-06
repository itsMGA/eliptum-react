import bcrypt from "bcryptjs";

const saltRounds = 10;

export const encryptData = async (data) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedData = await bcrypt.hash(data, salt);
    console.log(hashedData);
    return hashedData;
  } catch (error) {
    console.error("Error encrypting data: ", error);
  }
};

export default encryptData;
