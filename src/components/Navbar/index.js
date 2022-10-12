import React, { useState } from "react"
import logo from "../../data/assets/banner/logo.svg"
import hamburger from "../../data/assets/banner/hamburger.svg"
import { NavbarMain } from "./styles"
import { Link } from "gatsby"
import { CloseOutlined } from "@ant-design/icons"
import { Modal } from "antd"
import Contact from "../Contact"

const Navabar = () => {
  const [open, setOpen] = useState(false)
  const [contact, setContact] = useState(false)
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
      <div className="nav_options">
        <CloseOutlined className="closeIcon" onClick={() => setOpen(false)} />
        <Link to="/Home/" className="nav_link" activeClassName="nav_active">
          Home
        </Link>
        <Link
          to="/Home/#pricing"
          className="nav_link"
          activeClassName="nav_active"
        >
          Pricing
        </Link>
        <Link
          to="/Home/#tour"
          className="nav_link"
          activeClassName="nav_active"
        >
          Tour Hotkup
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
            Pricing
          </Link>
          <Link
            to="/Home/#tour"
            className="nav_link"
            activeClassName="nav_active"
            onClick={() => setOpen(false)}
          >
            Tour Hotkup
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
      )}
      <Modal
        centered
        visible={contact}
        width={1000}
        footer={null}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={() => setContact(false)}
        bodyStyle={{ backgroundColor: `white`, height: `100%`, padding: `0` }}
        style={{ backgroundColor: `white`, height: `100%`, padding: `0` }}
        maskStyle={{
          backgroundColor: `white`,
          height: `fit-content`,
          padding: `0`,
        }}
      >
        <div id="navcont">
          <Contact />
        </div>
      </Modal>
    </NavbarMain>
  )
}
export default Navabar
