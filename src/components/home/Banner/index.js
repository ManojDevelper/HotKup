import React from "react"
import p1_crone from "../../../data/assets/banner/p1_crone.png"
import p1_cup from "../../../data/assets/banner/p1_cup.png"
import p1_roundoff from "../../../data/assets/banner/p1_roundoff.png"
import p1_underline from "../../../data/assets/banner/p1_underline.png"
import p1_play from "../../../data/assets/banner/p1_play.png"
import { BannerMain } from "./styles"

const Banner = () => {
  return (
    <BannerMain>
      <div className="banner_rotate"></div>
      <div className="banner_text">
        <h2>
          <img src={p1_crone} alt="p1_crone" className="crone" />
          Smart tool that saves you one hour a day, everyday
          <img src={p1_roundoff} alt="p1_roundoff" className="roundoff" />
        </h2>
        <p>
          Collaborate from anywhere with bundled tasks, team messaging, and
          project management on <span>one unified platform</span>. Discover why
          HotKup will be as vital to your team as that first{" "}
          <span>hot cup</span> of morning coffee
          <img src={p1_cup} alt="p1_cup" className="cup" />
        </p>
        <button>Join Today - It’s Free</button>
        <span className="watch_btn">
          <img src={p1_play} alt="cup" className="play_icon" />
          Watch Demo
          <img src={p1_underline} alt="p1_underline" className="underLine" />
        </span>
      </div>
    </BannerMain>
  )
}
export default Banner
