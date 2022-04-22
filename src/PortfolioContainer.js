import React, { useState } from "react";

import About from "./About/index";
import Contact from "./Contact/index";
import Navigation from "./Navigation";
import Project from "./Project/index";
import Footer from "./Footer/index";
import Resume from "./Resume";
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // it is checking the state of the current page.  If the current state is the page
  // specified it is rendering that component
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Portfolio") {
      return <Project />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/*We are passing the currentPage and handlePageChange as props to the Navigation component */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div className="content-container">
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
}
