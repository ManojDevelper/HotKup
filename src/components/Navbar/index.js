import React, { useState } from "react"
import logo from "../../data/assets/banner/logo.svg"
import hamburger from "../../data/assets/banner/hamburger.svg"
import { NavbarMain } from "./styles"
// import { Link } from "gatsby"
// import { CloseOutlined } from "@ant-design/icons"
// import { Modal } from "antd"
// import Contact from "../Contact"

const Navabar = () => {
  const [
    // _open,
     setOpen] = useState(false)
  // const [contact, setContact] = useState(false)
  return (
    <NavbarMain>
      <img src={logo} alt="logo" className="logo" />
      <img
        src={hamburger}
        alt="hamburger"
        className="hamburger"
        role="presentation"
        onClick={() => setOpen(true)}
      />
      {/* <div className="nav_options">
        <CloseOutlined className="closeIcon" onClick={() => setOpen(false)} />
        <Link to="/Home/" className="nav_link" activeClassName="nav_active">
          Home
        </Link>
        <Link
          to="/Home/#pricing"
          className="nav_link"
          activeClassName="nav_active"
        >
          About
        </Link>
        <Link
          to="/Home/#tour"
          className="nav_link"
          activeClassName="nav_active"
        >
          Features
        </Link>
        <Link className="nav_link" onClick={() => setContact(true)}>
          Contact Us
        </Link>
        <Link className="nav_link nav_links">Sign In</Link>
      </div>
      {open && (
        <div className="nav_options nav_option_mobile">
          <CloseOutlined className="closeIcon" onClick={() => setOpen(false)} />
          <Link
            to="/Home/"
            className="nav_link"
            activeClassName="nav_active"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Home/#pricing"
            className="nav_link"
            activeClassName="nav_active"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/Home/#tour"
            className="nav_link"
            activeClassName="nav_active"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            className="nav_link"
            activeClassName="nav_active"
            onClick={() => {
              setOpen(false)
              setContact(true)
            }}
          >
            Contact Us
          </Link>
          <Link className="nav_link nav_links">Sign In</Link>
        </div>
      )} */}
    </NavbarMain>
  )
}
export default Navabar
