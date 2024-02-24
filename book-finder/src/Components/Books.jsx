import "./BooksStyles.css";
import onImage from "../assets/on.png";
import offImage from "../assets/off.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Books() {
  const [book, setBook] = useState();
  const [theme, setTheme] = useState(true);
  const [filterBook, setFilterBook] = useState();

  useEffect(() => {
    themeChange();
  }, []);
  const themeChange = () => {
    setTheme(!theme);
    if (theme) {
      document.body.style.backgroundColor = "#212020";
    } else {
      document.body.style.backgroundColor = "White";
    }
  };
  const textColor = (color) => ({ color: color ? "black" : "#eceded" });
  const header = (color) => ({ backgroundColor: color ? "#d5d2d2" : "black" });
  const authorColor = (color) => ({ color: color ? "#843200" : "#C0C0C0" });
  const footer = (color) => ({ backgroundColor: color ? "#d5d2d2" : "black" });
  // const searchText = (color) => ({ color: color ? "black" : "white" });

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    const filterData = book.filter((e) => {
      return e.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilterBook(filterData);
  };
  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      headers: { Authorization: "whatever-you-want" },
    })
      .then((response) => response.json())
      .then((data) => {
        setBook(data.books);
        setFilterBook(data.books);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div style={header(theme)} className="header">
        <div>
          <img
            id="headerImg"
            src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
            alt="kalvium_logo"
          />
        </div>
        <div className="search">
          <input onChange={handleSearch} placeholder="Search" id="search" />
        </div>
        <div className="registerStyle">
          <Link to="/Register">
            <h1 style={textColor(theme)} id="register">
              Register
            </h1>
          </Link>
        </div>
        <div className="backgroundTheme">
          <button className="themeBtn" onClick={themeChange}>
            {theme ? (
              <img id="offImage" src={offImage} alt="Off" />
            ) : (
              <img id="onImage" src={onImage} alt="On" />
            )}
          </button>
        </div>
      </div>
      <div className="booksContainer">
        {filterBook?.map((data) => (
          <div key={data.id} className="bookStyle">
            <img src={data.imageLinks.thumbnail} alt="" />
            <h2 style={textColor(theme)} id="titleStyles">
              {data.title}
            </h2>
            <h3 style={authorColor(theme)}>{data.authors}</h3>
          </div>
        ))}
      </div>

      <footer style={footer(theme)}>
        <div>
          <p style={textColor(theme)} id="footerQuote">
            Just keep <b> Reading</b>
          </p>
          <img src="https://i.makeagif.com/media/7-24-2019/hP9uNF.gif" alt="" />
        </div>
        <div>
          <p style={textColor(theme)} id="kalvian">
            <b> Made by Rahul 😇</b>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Books;
