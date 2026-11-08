import bcrypt from "bcrypt";
// import crypto from 'crypto'

const SALT = 10;

async function hashingPassword(password) {
  return await bcrypt.hash(password, SALT);

  bcrypt.compare;
}

async function comparePassword(password, hashPassword) {
  return await bcrypt.compare(password, hashPassword);
}

export { hashingPassword, comparePassword };
