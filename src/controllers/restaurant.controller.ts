import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();  // bu instant pastdagi instlarning hamasi undir.pastda yozamasak ham

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
      console.log("goHome");  //loyiha standarti.mantiq yetib kelganini for check 
      res.render("home");  //send | json | redirect | end | render -response turlari 
    } catch (err) {
       console.log("Error, goHome;", err);
    }   
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");  //loyiha standarti. 
    res.render("signup"); 
  } catch (err) {
     console.log("Error, getSignup;", err);
  }   
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
      console.log("getLogin");  //loyiha standarti. 
      res.render("login"); 
    } catch (err) {
       console.log("Error, getLogin;", err);
    }   
};


restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");  //loyiha standarti. 

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    //const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    //TODO: SESSIONS ATHENTICATION
    res.send(result);
  } catch (err) {
     console.log("Error, processSignup;", err);
     res.send(err);
  }   
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");  //loyiha standarti.
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    //const memberService = new MemberService();
    const result = await memberService.processlogin(input);
    //TODO: SESSIONS ATHENTICATION


    res.send(result);
  } catch (err) {
     console.log("Error, processLogin;", err);
     res.send(err);
  }   
};




export default restaurantController; 