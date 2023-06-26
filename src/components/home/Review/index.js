import React from "react"
import fly_heart from "../../../data/assets/banner/fly_heart.png"
import p4_c1 from "../../../data/assets/banner/p4_c1.png"
import p4_c2 from "../../../data/assets/banner/p4_c2.png"
import p4_c3 from "../../../data/assets/banner/p4_c3.png"
import p4_c4 from "../../../data/assets/banner/p4_c4.png"
import { ReviewMain } from "./styles"

const Review = () => {
  return (
    <ReviewMain>
      <div className="review_title">
        <h1>
          People really <img src={fly_heart} alt="fly_heart" />
          love HotKup
        </h1>
        <p>
          Thousands of people have already made the switch from other work
          management services.
        </p>
      </div>

      <div className="review_cards_main">
        <div className="review_card">
          <p>
            <span>
              “ In positive news, hotkup seems to have finally solved work
              management.{" "}
            </span>
            Been using it several weeks and no longer dealing with long lists of
            “unread” mails, or sorting out annoying but important docs. The
            relief is so real 🙌 ”
          </p>
          <div className="customer">
            <img src={p4_c1} alt="p4_c1" />
            <span>Rosy</span>
          </div>
        </div>
        <div className="review_card">
          <p>
            <span>
              “ If you designed task management from scratch such that it
              vigorously protected your privacy and your time,{" "}
            </span>
            this is what it would look like. I think you’re going to love it. 🏆
            ”
          </p>
          <div className="customer">
            <img src={p4_c2} alt="p4_c1" />
            <span>Dan</span>
          </div>
        </div>
        <div className="review_card">
          <p>
            <span>“ hotkup is the most exciting app I’ve used in years.</span>A
            complete rethinking of work management, full of bold, brilliant
            ideas. Highly recommended. Not only for the product itself, but
            because its boldness will inspire you to question your assumptions
            and think differently.”
          </p>
          <div className="customer">
            <img src={p4_c3} alt="p4_c1" />
            <span>Janet Ward</span>
          </div>
        </div>
        <div className="review_card">
          <p>
            Just got a demo of HotKup with the team.{" "}
            <span>❤️ the level of product thinking</span> that’s gone into
            rebuilding work management from scratch.
          </p>
          <div className="customer">
            <img src={p4_c4} alt="p4_c1" />
            <span>Nathan</span>
          </div>
        </div>
      </div>
    </ReviewMain>
  )
}
export default Review
