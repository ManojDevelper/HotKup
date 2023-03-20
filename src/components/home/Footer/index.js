import React from "react"
import footer_curl from "../../../data/assets/banner/footer_curl.svg"
import linkdin from "../../../data/assets/banner/linkdin.svg"
import facebook from "../../../data/assets/banner/facebook.svg"
import insta from "../../../data/assets/banner/insta.svg"
import twitter from "../../../data/assets/banner/twitter.svg"
import youtube from "../../../data/assets/banner/youtube.svg"
import logo from "../../../data/assets/banner/logo.svg"
import { FooterMain } from "./styles"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterMain>
      <div className="footer_main">
        <h1>
          Never forget an important detail again. Get started with{" "}
          <span>HotKup</span> today
        </h1>
        <button>Join Today - It’s Free</button>
      </div>
      <img src={footer_curl} alt="footer_curl" className="footer_curl" />
      <div className="footer_container2">
        <img src={logo} alt="footer_curl" className="logo" />
        <p>Team productivity and business intelligence, all in one</p>
      </div>
      <div className="avaiablites_main">
        <Link className="avaiablites_list">Resources</Link>
        <Link className="avaiablites_list">Essentials</Link>
        <Link className="avaiablites_list">Pricing</Link>
        <Link className="avaiablites_list">Company</Link>
        <Link className="avaiablites_list">Support</Link>
        <Link className="avaiablites_list">FAQ</Link>
        <Link className="avaiablites_list">Privacy</Link>
        <Link className="avaiablites_list">Blog</Link>
        <Link className="avaiablites_list">Help</Link>
      </div>

      <div className="icons">
        <a>
          <img src={linkdin} alt="linkdin" />
        </a>
        <a>
          <img src={facebook} alt="facebook" />
        </a>
        <a>
          <img src={insta} alt="insta" />
        </a>
        <a>
          <img src={twitter} alt="twitter" />
        </a>
        <a>
          <img src={youtube} alt="youtube" />
        </a>
      </div>
      <p className="copy_right">
        HotKup Incorporated, 44 Grindstone Way, Waterdown L9H7B7, Ontario Canada
        Copyright © 2022 HotKup Inc. All rights reserved.
      </p>
    </FooterMain>
  )
}
export default Footer
