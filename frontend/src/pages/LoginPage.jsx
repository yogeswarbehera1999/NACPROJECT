import { useState, useRef } from "react";
import { loginWithEmail, setupRecaptcha, loginWithPhone, verifyOTP } from "../firebase/authUtils";

export default function LoginPage() {
  const [method, setMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otp, setOtp] = useState("");
  const recaptchaRef = useRef(null);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    await loginWithEmail(email, password);
  };

  const handleSendOtp = async () => {
    setupRecaptcha("recaptcha-container");
    const conf = await loginWithPhone(phone);
    setConfirmationResult(conf);
    setOtpSent(true);
  };

  const handleVerifyOtp = async () => {
    await verifyOTP(confirmationResult, otp);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-80">
        <div className="flex justify-center space-x-4 mb-4">
          <button type="button" onClick={() => setMethod("email")} className={`${method === "email" ? "font-bold" : ""}`}>Email</button>
          <button type="button" onClick={() => setMethod("phone")} className={`${method === "phone" ? "font-bold" : ""}`}>Phone</button>
        </div>

        {method === "email" && (
          <>
            <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full mb-2 p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleEmailLogin} className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
          </>
        )}

        {method === "phone" && (
          <>
            <input type="tel" placeholder="Phone" className="w-full mb-2 p-2 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type="button" onClick={handleSendOtp} className="w-full bg-blue-500 text-white py-2 rounded">Send OTP</button>
            {otpSent && (
              <>
                <input type="text" placeholder="OTP" className="w-full mb-2 p-2 border rounded" value={otp} onChange={(e) => setOtp(e.target.value)} />
                <button type="button" onClick={handleVerifyOtp} className="w-full bg-green-500 text-white py-2 rounded">Verify OTP</button>
              </>
            )}
          </>
        )}

        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
}
