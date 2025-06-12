import {
  signInWithEmailAndPassword,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "./firebase";

// Email-password login
export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Phone-OTP login for Citizen
export const setupRecaptcha = (containerId) => {
  window.recaptchaVerifier = new RecaptchaVerifier(containerId, {
    size: "invisible",
  }, auth);
};

export const loginWithPhone = (phoneNumber) =>
  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);

export const verifyOTP = (confirmationResult, otp) =>
  confirmationResult.confirm(otp);

export const logout = () => signOut(auth);
