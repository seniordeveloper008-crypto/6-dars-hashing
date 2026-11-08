import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { validate } from "../middleware/validate.middleware.users.js";
import { creatUserSchema,updateUserSchema } from "../validation/users.validate.js";

const router =new Router()
router
.get('/' ,usersController.getAll)
.get('/:id',usersController.getId)
.post('/',usersController.creat)
.put('/:id',validate(updateUserSchema),usersController.update)
.delete('/:id',usersController.deleteUser)


export{router}