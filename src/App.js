// Import pages
import Aboutus from "./pages/AboutUs";
// Import components
import Nav from "./components/Nav";
// Global Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Aboutus />
    </div>
  );
}
export default App;
