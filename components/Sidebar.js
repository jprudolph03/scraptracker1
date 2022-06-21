import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/addNewPart">
              Add New Part
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/newLot">
              Start New Lot
            </Link>
          </li>
        </ul>
        <hr />
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Scrap Reporting</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" href="/forging">
              Forging
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Pressing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Tapping
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              VS / Packing
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
