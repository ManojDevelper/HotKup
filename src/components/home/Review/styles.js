import styled from "styled-components"

export const ReviewMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9.1vw 0;
  background: #f1f9ff;
  .review_title {
    h1 {
      font-weight: 900;
      line-height: 5.2vw;
      color: #212121;
      text-align: center;
      img {
        width: 3.5vw;
        margin: 0 0.7vw 0 0;
      }
    }

    p {
      width: 57.5vw;
      font-weight: 500;
      font-size: 1.8vw;
      line-height: 2.6vw;
      text-align: center;
      color: #212121;
    }
  }

  .review_cards_main {
    .review_card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 78.4vw;
      margin-top: 7.2vw;
      flex-direction: column;
      p {
        font-weight: 600;
        font-size: 1.7vw;
        line-height: 3.2vw;
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
        margin: 1.5vw 0 0 0;
        img {
          width: 3.3vw;
          border-radius: 3.3vw;
        }
        span {
          font-weight: 600;
          font-size: 1.4vw;
          line-height: 1.3vw;
          letter-spacing: -0.01vw;
          text-decoration-line: underline;
          color: #000000;
          margin-left: 1vw;
        }
      }
    }
  }

  @media (max-width: 750px) {
    padding: 13vw 0;
    .review_title {
      h1 {
        font-weight: 900;
        font-size: 5vw;
        line-height: 5.2vw;
        color: #212121;
        text-align: center;
        img {
          width: 6vw;
          margin: 0 2vw 0 0;
        }
      }
      p {
        width: 78.9vw;
        font-size: 3.3vw;
        line-height: 4.5vw;
        margin-top: 5vw;
      }
    }

    .review_cards_main {
      .review_card {
        margin-top: 10.4vw;
        p {
          font-size: 2.9vw;
          line-height: 5.4vw;
          width: 76.4vw;
        }
        .customer {
          margin: 4vw 0 0 0;
          span {
            font-size: 2.9vw;
            margin-left: 3vw;
          }
          img {
            width: 8vw;
            border-radius: 3.3vw;
          }
        }
      }
    }
  }
`
