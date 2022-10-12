import styled from "styled-components"

export const CardsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9.1vw;
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
      line-height: 5.1vw;
      color: #212121;
      text-align: center;
    }

    p {
      width: 59.1vw;
      font-weight: 500;
      font-size: 1.4vw;
      line-height: 2.3vw;
      text-align: center;
      color: #212121;
    }
  }

  .card_container {
    z-index: 1;
    .card {
      display: flex;
      align-items: center;
      margin-top: 6.5vw;
      img {
        max-width: 37.9vw;
      }
      .card_text {
        height: fit-content;
        margin-left: 8.9vw;
        h2 {
          display: flex;
          flex-direction: column;
          font-weight: 900;
          font-size: 2.6vw;
          line-height: 3.2vw;
          color: #212121;
          img {
            width: 16.9vw;
          }
        }
        p {
          font-weight: 500;
          font-size: 1.6vw;
          line-height: 2.7vw;
          color: #212121;
          margin-top: 1.3vw;
        }
      }
    }

    .card:nth-child(2n) {
      flex-direction: row-reverse;
      img {
        max-width: 30vw;
      }
      .card_text {
        margin: 0 8.9vw 0 0;
      }
    }
  }
  @media (max-width: 750px) {
    padding: 15vw 0;
    .banner_rotate {
      display: none;
    }
    .cards_title {
      h1 {
        font-size: 5.8vw;
        line-height: 5.6vw;
      }
      p {
        width: 70.8vw;
        font-size: 2.9vw;
        line-height: 4.5vw;
        margin: 6.6vw 0 0 0;
      }
    }

    .card_container {
      .card {
        margin-top: 29vw;
        flex-direction: column-reverse;
        .card_text {
          margin: 0;
          h2 {
            font-size: 5.6vw;
            line-height: 5vw;
            text-align: center;
            width: fit-content;
            margin: auto;
            img {
              width: 39.2vw;
              margin: 1vw 0 0 0;
            }
          }
          p {
            font-size: 3.5vw;
            line-height: 4.9vw;
            margin: 4vw 0 10vw 0;
            text-align: center;
            width: 75.2vw;
          }
        }
        img {
          max-width: 67vw;
        }

        :nth-child(2n) {
          flex-direction: column-reverse;
          .card_text {
            margin: 0;
          }
          img {
            max-width: 67vw;
          }
        }
      }
    }
  }
`
