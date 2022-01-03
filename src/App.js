import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: true,
  });
  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const match =
      formData.password === formData.confirmPassword
        ? "Successfully signed up"
        : "passwords do not match";
    const isChecked = formData.okayToEmail
      ? "Thanks for signing up for our newsletter!"
      : "";
    console.log(match, isChecked);
  }
  return (
    <div className="form--container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
          placeholder="Email address"
          className="form--input"
        />
        <input
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="password"
          placeholder="Password"
          className="form--input"
        />
        <input
          onChange={handleChange}
          value={formData.confirmPassword}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form--input"
        />
        <div className="form--marketing">
          <input
            onChange={handleChange}
            checked={formData.okayToEmail}
            type="checkbox"
            name="okayToEmail"
            id="okayToEmail"
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}

export default App;
