import styled from "styled-components"
import highlate_text from "../../../data/assets/banner/highlate_text.png"

export const ReviewMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px 0;
  background: #f1f9ff;
  .review_title {
    h1 {
      font-weight: 900;
      line-height: 81px;
      color: #212121;
      text-align: center;
      img {
        width: 55px;
        margin: 0 0.7vw 0 0;
      }
    }

    p {
      width: 880px;
      font-weight: 500;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      color: #212121;
    }
  }

  .review_cards_main {
    .review_card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1200px;
      margin-top: 111px;
      flex-direction: column;
      p {
        font-weight: 600;
        font-size: 27.2892px;
        line-height: 49px;
        text-align: center;
        color: #121212;
        opacity: 0.9;
        span {
          background: #fff2ce;
          border-radius: 0.2vw;
        }
      }
      .customer {
        display: flex;
        align-items: center;
        margin: 1.5rem 0 0 0;
        img {
          width: 3.3vw;
          border-radius: 3.3vw;
        }
        span {
          font-weight: 600;
          font-size: 22.1px;
          line-height: 21px;
          letter-spacing: -0.3px;
          text-decoration-line: underline;
          color: #000000;
          margin-left: 1vw;
        }
      }
    }
  }
`
