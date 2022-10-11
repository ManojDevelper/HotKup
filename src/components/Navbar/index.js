import React from "react"
import logo from "../../data/assets/banner/logo.svg"
import { NavbarMain } from "./styles"
import { Link } from "gatsby"

const Navabar = () => {
  return (
    <NavbarMain>
      <img src={logo} alt="logo" />
      <div className="nav_options">
        <Link className="nav_link">Home</Link>
        <Link className="nav_link">Pricing</Link>
        <Link className="nav_link">Tour Hotkup</Link>
        <Link className="nav_link">Contact Us</Link>
        <Link className="nav_link">Sign In</Link>
      </div>
    </NavbarMain>
  )
}
export default Navabar
