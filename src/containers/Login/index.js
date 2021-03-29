import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { TokenContext } from "../../context";

import "./style.scss";

const Login = ({ history }) => {
  const [token, setToken] = useContext(TokenContext);
  const [state, setState] = useState({
    email: "",
    passsword: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = () => {
    if (state.email === "test@test.com" && state.passsword === "1234") {
      setToken(true);
      history.push("/home");
    }
  };

  return (
    <div className="login">
      <div className="entry-group">
        <Input
          label="Email adresse"
          type="text"
          className="input"
          name="email"
          value={state.tache}
          onChange={(e) => handleChange(e)}
        />
        <Input
          label="Password"
          type="text"
          className="input"
          name="passsword"
          value={state.description}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <Button theme="primary" content="Soumettre" onClick={handleSubmit} />
    </div>
  );
};

export default Login;
