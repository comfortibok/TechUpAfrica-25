import Info from "./src/components/Info";
import About from "./src/components/About";
import Interest from "./src/components/Interest";
import Footer from "./src/components/Footer";
import "./App.css";
function App() {
  return (
    <main>
      <Info />
      <section>
        <About />
        <Interest />
      </section>
      <Footer />
    </main>
  );
}

export default App;
