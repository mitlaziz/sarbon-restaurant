import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
      console.log("goHome");  //loyiha standarti.mantiq yetib kelganini for check 
      res.send("Home Page");  //send | json | redirect | end | render -response turlari 
    } catch (err) {
       console.log("Error, goHome;", err);
    }   
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
      console.log("getLogin");  //loyiha standarti. 
      res.send("Login Page");
    } catch (err) {
       console.log("Error, getLogin;", err);
    }   
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
      console.log("getSignup");  //loyiha standarti. 
      res.send("Signup Page");
    } catch (err) {
       console.log("Error, getSignup;", err);
    }   
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");  //loyiha standarti. 
    res.send("DONE");
  } catch (err) {
     console.log("Error, processLogin;", err);
  }   
};


restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");  //loyiha standarti. 
    res.send("DONE");
  } catch (err) {
     console.log("Error, processSignup;", err);
  }   
};

export default restaurantController; 