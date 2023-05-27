import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Card } from "../../../components/card";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { execute } = useLogin();

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await execute(email, password);
    console.log(response);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleOnChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleOnChangePassword}
          />
        </div>
        <button>Entrar</button>
      </form>
    </Card>
  );
}
