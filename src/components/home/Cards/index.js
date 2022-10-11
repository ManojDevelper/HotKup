import React from "react"
import p3_c1 from "../../../data/assets/banner/p3_c1.png"
import p3_c2 from "../../../data/assets/banner/p3_c2.png"
import p3_c3 from "../../../data/assets/banner/p3_c3.png"
import p3_c4 from "../../../data/assets/banner/p3_c4.png"
import curl_underline from "../../../data/assets/banner/curl_underline.png"
import p1_underline from "../../../data/assets/banner/p1_underline.png"
import { CardsMain } from "./styles"

const Cards = () => {
  return (
    <CardsMain>
      <div className="banner_rotate"></div>
      <div className="cards_title">
        <h1>What’s inside HotKup?</h1>
        <p>
          We save users time by reducing the volume of project follow-ups and
          feedback; while delivering key metrics that other multifunctional
          tools do not.
        </p>
      </div>

      <div className="card_container">
        <div className="card">
          <img src={p3_c1} alt="p3_c1" />
          <div className="card_text">
            <h2>
              Task automation
              <img src={curl_underline} alt="img" />
            </h2>
            <p>
              Create new project tasks, schedule a task, or create a recurring
              task. Get much-needed visibility into assigned work, completed
              tasks, and overdue tasks.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={p3_c2} alt="p3_c1" />
          <div className="card_text">
            <h2>
              Calendar view
              <img src={p1_underline} alt="img" />
            </h2>
            <p>
              Our calendar view enables you look at project work visually and
              measure elapsed time.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={p3_c3} alt="p3_c1" />
          <div className="card_text">
            <h2>
              Run reports
              <img src={curl_underline} alt="img" />
            </h2>
            <p>
              Monitor business activity by generating reports on everything from
              quality testing to wastage.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={p3_c4} alt="p3_c1" />
          <div className="card_text">
            <h2>
              Communicate with chat
              <img src={p1_underline} alt="img" />
            </h2>
            <p>
              Stay in continous communication by starting a 1:1 chat, category
              chat, or group chat.
            </p>
          </div>
        </div>
      </div>
    </CardsMain>
  )
}
export default Cards
