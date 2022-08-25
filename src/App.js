import About from "./pages/About";
import Author from "./pages/Author";
import Highlight from "./pages/Highlight";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import SectionNavbar from "./components/SectionNavbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f"
    },
    secondary: {
      main: "#42a5f5"
    },
    info: {
      main: "#fae08e"
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Title />
          <SectionNavbar />
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Author" element={<Author />} />
            <Route path="Highlight" element={<Highlight />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
