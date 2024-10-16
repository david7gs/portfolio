import React from "react";
import PortfolioContextProvider from "./store/portfolio_contex";
import Viewer from "./components/Viewer";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";

function App() {
  return (
    <PortfolioContextProvider>
      <>
        <div className="page-wrap">
          <div className="content">
            <MainNav />
            <Viewer />
            {/* <Footer /> */}
          </div>
          <Footer />

          {/* <div className="content-wrap">
          <div className="content">
            <MainNav />
            <Viewer />
          </div>
        </div>
        <Footer /> */}
        </div>
        {/* <Footer /> */}
      </>
    </PortfolioContextProvider>
  );
}

export default App;
