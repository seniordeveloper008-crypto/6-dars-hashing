import path from "path";
import { readFile, writeFile } from "fs/promises";

const getFIlePath = (fileName) =>
  path.join(process.cwd(), `src/data/${fileName}`);

async function getData(fileName) {
  try {
    const users = await readFile(getFIlePath(fileName), "utf8");
    return JSON.parse(users);
  } catch (err) {
    console.log(`Error is on getData function error:${err.message}`);
  }
}
async function setData(fileName, data) {
  try {
    await writeFile(getFIlePath(fileName), JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(`Error is on getData function error ${err.message}`);
  }
}
export { setData, getData };
