import { Request, Response } from 'express';
import { forgotPasswordService, signinService, signupService } from '../service/auth.service';
import { tForgotPassword, tSiginCredentials, tSigupCredentials } from '../models/user/user.types';

export const signinController = async (req: Request, res: Response) => {
  const userCredentials: tSiginCredentials = req.body;

  try {
    const userSignin = await signinService(userCredentials);
    return res.status(200).json(userSignin);
  } catch(error: any) {
    return res.status(400).json({ message: error.message });
  }

};

export const signupController = async (req: Request, res: Response) => {
  const userCredentials: tSigupCredentials = req.body;
  try {
    const userSignup = await signupService(userCredentials);
  return res.status(200).json(userSignup);
  } catch(error: any) {
    return res.status(400).json({ message: error.message });
  }

};

export const forgotPasswordController = async (req: Request, res: Response) => {
  const { email }: tForgotPassword = req.body;

  try {
    await forgotPasswordService(email);
  } catch (err: unknown) {
    return res.status(400).json(err);
  }

  return res.status(200).json({ message: 'El código se envió al correo correctamente'});
};

