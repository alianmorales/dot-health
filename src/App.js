import SiteNav from "./components/SiteNav";
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="App">
      <SiteNav />
      <SiteHeader />
      <SiteContent />
      <SiteFooter />
    </div>
  );
}

export default App;
