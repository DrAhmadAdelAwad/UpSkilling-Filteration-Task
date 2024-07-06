import { Router } from "express";
import * as customerController from "./customer.controller.js"
import * as customerSchema from "./customer.schema.js"
import { validation } from "../../MiddleWares/validation.js";
const router = Router();

router.post("/" , validation(customerSchema.createCustomer) , customerController.createCustomer)


export default router
