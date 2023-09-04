import { useState } from "react";
import HeadshotCard from "./components/HeadshotCard";
import Navbar from "./components/Navbar";

function App() {
  const colorThemeLS = localStorage.getItem("colorTheme");
  let initTheme = "";
  if (!colorThemeLS) {
    initTheme = "dark";
    localStorage.setItem("colorTheme", "dark");
  } else {
    initTheme = colorThemeLS;
  }
  const [colorTheme, setColorTheme] = useState(initTheme);
  document.body.dataset.bsTheme = initTheme;

  const toggleBodyTheme = () => {
    console.log("before:", colorTheme);
    let newColorTheme = colorTheme == "light" ? "dark" : "light";
    console.log("updated:", newColorTheme);
    document.body.dataset.bsTheme = newColorTheme;
    setColorTheme(newColorTheme);
    localStorage.setItem("colorTheme", newColorTheme);
  };

  return (
    <>
      <div>
        <Navbar onButtonPress={toggleBodyTheme} />
        <br />
        <HeadshotCard />
      </div>
    </>
  );
}

export default App;
