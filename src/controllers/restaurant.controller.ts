import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

const memberService = new MemberService();  // bu instant pastdagi instlarning hamasi undir.pastda yozamasak ham

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
      console.log("goHome");  //loyiha standarti.mantiq yetib kelganini for check 
      res.render("home");  //send | json | redirect | end | render -response turlari 
    } catch (err) {
       console.log("Error, goHome;", err);
       res.redirect("/admin");
    }   
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");  //loyiha standarti. 
    res.render("signup"); 
  } catch (err) {
     console.log("Error, getSignup;", err);
     res.redirect("/admin");
  }   
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
      console.log("getLogin");  //loyiha standarti. 
      res.render("login"); 
    } catch (err) {
       console.log("Error, getLogin;", err);
       res.redirect("/admin");  // xatolik bol>da adminga yubor
    }   
};


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");  //loyiha standarti. 

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    //const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    //TODO: SESSIONS ATHENTICATION

    req.session.member = result;
    req.session.save(function() {
      res.send(result);
    });
  } catch (err) {
     console.log("Error, processSignup;", err);
     const message = 
       err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
     res.send(
       `<script> alert("${message}"); window.location.replace('admin/signup) </script>`
       );
  }   
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processLogin");  //loyiha standarti.
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processlogin(input);
    //TODO: SESSIONS ATHENTICATION

    req.session.member = result;
    req.session.save(function() {
      res.send(result);
    });

  } catch (err) {
     console.log("Error, processLogin;", err);
     const message = 
       err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
     res.send(
       `<script> alert("${message}"); window.location.replace('admin/login) </script>`
       );
  }   
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");  //loyiha standarti.
    req.session.destroy(function() {
      res.redirect("/admin");
    } );
  } catch (err) {
     console.log("Error, logout:", err);
     res.redirect("/admin");
  }   
};


restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
  try {
    console.log("checkAuthSession");
    if(req.session?.member) 
      res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
     console.log("Error, checkAuthSession;", err);
     res.send(err);
  }   
};


export default restaurantController;