import { getData, setData } from "../helpers/fileData.js";
import { sendEmail } from "../helpers/emailer.js";
import { hashingPassword } from "../helpers/hashing.js";

const withoutPassword = ({password, ...index}) => index;

class UserController {
  async getAll(req, res) {
    try {
      const users = await getData("users.json");

      if (!users) {
        return res.status(404).json({
          succes: false,
          message: `Not found users`,
        });
      }
      return res.status(201).json({
        succes: true,
        message: `Founded the users`,
        data: users,
      });
    } catch (err) {
      return res.status(404).json({
        succes: false,
        message: `Not found users`,
      });
    }
  }
  async getId(req, res) {
    const id = +req.params.id;
    const users = await getData("users.json");
    const index = users.find((el) => el.id === id);

    if (!index) {
      res.status(404).json({
        succes: false,
        message: "Malumot topilmadi",
      });
    }
    return res.status(200).json({
      succes: true,
      message: "Malumot topildi",
      data: withoutPassword(index),
    });
  }
  async creat(req, res) {
    const users = await getData("users.json");

    const { email, name, password } = req.body;

    const hashed = await hashingPassword(password);

    const newUser = {
      id: users.length ? users.at(-1).id + 1 : 1,
      name: name,
      email: email,
      password: hashed,
    };
    await sendEmail(email, name);

    users.push(newUser);

    await setData("users.json", users);

    return res.status(201).json({
      succes: true,
      message: `Yangi malumot qushildi`,
      data: newUser,
    });
  }
  async update(req, res) {
    const id = +req.params.id;
    const users = await getData("users.json");
    const index = users.findIndex((el) => el.id === id);

    if (index != -1) {
      users[index] = {
        id: id,
        ...req.body,
      };
      await setData("users.json", users);
      return res.status(200).json({});
    }
    return res.status(404).json({
      succes: false,
      message: `Bunday ${id}li user yuq`,
    });
  }

  async deleteUser(req, res) {
    const id = +req.params.id;
    const users = await getData("users.json");
    const index = users.findIndex((el) => el.id === id);

    users.splice(index, 1);
    await setData("users.json", users);
    return res.status(200).json({
      succes: true,
      message: "Muvaffaqiyatli uchirildi",
    });
  }
}

export default new UserController();
