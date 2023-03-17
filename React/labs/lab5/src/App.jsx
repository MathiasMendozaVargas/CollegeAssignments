import React, { useState } from "react";
import Field from "./components/Field";
import Button from "./components/Button";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [showLoginConfirmation, setShowLoginConfirmation] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const validateEmail = () => {
    if (email === "") {
      setEmailError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password === "") {
      setPasswordError("Password is required");
      return false;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  const handleClearClick = () => {
    setShowClearConfirmation(true);
  };

  const handleClearConfirmation = () => {
    setEmail("");
    setPassword("");
    setShowClearConfirmation(false);
  };

  const handleLoginClick = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    if (isEmailValid && isPasswordValid) {
      setShowLoginConfirmation(true);
    }
  };

  const handleLoginConfirmation = () => {
    setShowLoginConfirmation(false);
    // do something on login success
    console.log('You have succesfully logged in!');
  };

  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field
          label="Email"
          value={email}
          error={emailError}
          onChange={handleEmailChange}
        />
        <Field
          label="Password"
          value={password}
          type="password"
          error={passwordError}
          onChange={handlePasswordChange}
        />

        <div className="Buttons">
          <Button label="Clear" onClick={handleClearClick} />
          <div className="Spacer" />
          <Button label="Login" onClick={handleLoginClick} />
        </div>
      </div>

      {showClearConfirmation && (
        <div className="Confirmation">
          <p>Are you sure you want to clear the form?</p>
          <Button label="Yes" onClick={handleClearConfirmation} />
          <Button label="No" onClick={() => setShowClearConfirmation(false)} />
        </div>
      )}

      {showLoginConfirmation && (
        <div className="Confirmation">
          <p>Login successful!</p>
          <Button label="OK" onClick={handleLoginConfirmation} />
        </div>
      )}
    </div>
  );
}

export default App;
