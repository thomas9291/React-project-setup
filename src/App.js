import "./App.css";

import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
