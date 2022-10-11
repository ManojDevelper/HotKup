import styled from "styled-components"

export const CardsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px;
  position: relative;
  .banner_rotate {
    position: absolute;
    background: white;
    width: 110%;
    height: 100%;
    transform: rotate(2deg);
    top: 2vw;
    z-index: 0;
  }
  .cards_title {
    z-index: 1;
    h1 {
      font-weight: 900;
      line-height: 81px;
      color: #212121;
      text-align: center;
    }

    p {
      width: 910px;
      font-weight: 500;
      font-size: 22px;
      line-height: 36px;
      text-align: center;
      color: #212121;
    }
  }

  .card_container {
    z-index: 1;
    .card {
      display: flex;
      align-items: center;
      margin-top: 100px;
      img {
        max-width: 580px;
      }
      .card_text {
        height: fit-content;
        margin-left: 137px;
        h2 {
          display: flex;
          flex-direction: column;
          font-weight: 900;
          font-size: 40px;
          line-height: 50px;
          color: #212121;
          img {
            width: 260px;
          }
        }
        p {
          font-weight: 500;
          font-size: 25px;
          line-height: 42px;
          color: #212121;
          margin-top: 20px;
        }
      }
    }

    .card:nth-child(2n) {
      flex-direction: row-reverse;
      .card_text {
        margin: 0 137px 0 0;
      }
    }
  }
`
