import express, {Request, Response} from "express";
const router = express.Router();
import memberController from './controllers/member.controller';
import routerAdmin from "./router-admin";


/** Member */
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post("/member/logout", 
memberController.verifyAuth, 
memberController.logout
);
router.get("member/detail", memberController.verifyAuth)



/** Product  */



/** Order */


export default router;


