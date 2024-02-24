import { useState,useEffect } from "react";
import "./RegisterStyle.css";
function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("registrationData", JSON.stringify(data));
  }, [data]);
  const handleForm = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted succesfully!");
    }
  };
  const validateForm = () => {
    const { name, email, password, repeatPassword } = data;

    if (!name || !email || !password || !repeatPassword) {
      alert("All fields are required");
      return false;
    }
    if (password != repeatPassword) {
      alert("Password did not match!");
      return false;
    }
    return true;
  };
  return (
    <div>
      <div className="container">
        <div className="child-container">
          <div>
            <div className="banner">
              <p id="title">Create an account</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              {/* <div>
                <label htmlFor="Name">Name:</label>
              </div> */}
              <input
                value={data.name}
                onChange={handleForm}
                type="text"
                name="name"
                id="name"
                placeholder="name"
              />
            </div>
            <div>
              {/* <div className="label">
                <label htmlFor="email">Email:</label>
              </div> */}
              <input
                value={data.email}
                onChange={handleForm}
                name="email"
                type="email"
                id="email"
                placeholder=".com"
              />
            </div>
            <div>
              {/* <div className="label">
                <label htmlFor="Password">Password:</label>
              </div> */}
              <input
                value={data.password}
                onChange={handleForm}
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                maxLength={10}
              />
            </div>
            <div>
              {/* <div className="label">
                <label htmlFor="RepeatPassword">Repeat Pasword:</label>
              </div> */}
              <input
                value={data.repeatPassword}
                onChange={handleForm}
                name="repeatPassword"
                type="password"
                id="repeatPassword"
                placeholder="Repeat Password"
                maxLength={10}
              />
            </div>
            <div></div>
            <div>
              <input type="submit" value={"Sign up"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
