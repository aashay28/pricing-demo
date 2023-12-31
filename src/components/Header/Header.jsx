import React from "react";

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <div className="d-flex align-items-center">
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="/">
            Home
          </a>
          <a className="p-2 text-dark" href="/products">
            Products
          </a>
          <a className="p-2 text-dark" href="/">
            Support
          </a>
          <a className="p-2 text-dark" href="/">
            Pricing
          </a>
        </nav>
        <a className="btn btn-outline-primary" href="/">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;
