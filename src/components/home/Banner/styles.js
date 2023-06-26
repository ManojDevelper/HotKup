import styled from "styled-components"

export const BannerMain = styled.div`
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .banner_rotate {
    position: absolute;
    background: white;
    width: 110%;
    height: 100%;
    transform: rotate(-2deg);
    top: 3.9vw;
  }
  .banner_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    h2 {
      display: flex;
      position: relative;
      width: 65vw;
      font-weight: 900;
      font-size: 4.6vw;
      line-height: 5.7vw;
      text-align: center;
      color: #212121;
      .crone {
        position: absolute;
        width: 2.5vw;
        height: 3vw;
        top: -1.5vw;
        left: 1.2vw;
      }
      .roundoff {
        position: absolute;
        width: 24.5vw;
        right: 2vw;
        top: 4.9vw;
      }
    }
    p {
      width: 49.6vw;
      font-weight: 500;
      font-size: 1.4vw;
      line-height: 2.3vw;
      text-align: center;
      color: #212121;
      margin: 1.3vw 0 2vw 0;
      display: inline-block;
      position: relative;
      span {
        font-weight: bold;
      }
      .cup {
        position: absolute;
        width: 2.2vw;
        right: 1.5vw;
      }
      ::after {
        content: ".";
        right: 0.5vw;
        position: absolute;
      }
    }
    button {
      width: 26.1vw;
      height: 4.9vw;
      left: 33.9vw;
      top: 36.5vw;
      background: #0057fb;
      font-weight: 600;
      font-size: 1.5vw;
      color: #ffffff;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .watch_btn {
      display: flex;
      position: relative;
      align-items: center;
      font-weight: 700;
      font-size: 1vw;
      color: #212121;
      margin-top: 1.2vw;
      cursor: pointer;
      transiton: 0.5s ease-in-out;
      .play_icon {
        width: 2.2vw;
        margin-right: 0.5vw;
      }
      .underLine {
        position: absolute;
        width: 9.1vw;
        bottom: -1vw;
        left: 2vw;
      }
      :hover {
        gap: 0.2vw;
      }
    }
  }

  @media (max-width: 750px) {
    height: 78.75vw;
    margin: 14vw 0 0 0;
    .banner_rotate {
      display: none;
    }
    .banner_text {
      h2 {
        width: 71.8vw;
        font-size: 5.5vw;
        line-height: 7.2vw;
        .crone {
          width: 4vw;
          height: 4vw;
          top: -1.8vw;
          left: -2vw;
        }
        .roundoff {
          width: 27vw;
          right: 1vw;
          top: 6.9vw;
        }
      }
      p {
        width: 92.1vw;
        font-size: 3.5vw;
        line-height: 5.5vw;
        margin: 4.3vw 0 6vw 0;
        .cup {
          width: 5vw;
          right: 4vw;
        }
        ::after {
          right: 2vw;
        }
      }
      button {
        width: 46.4vw;
        height: 8.75vw;
        font-size: 3.3vw;
      }
      .watch_btn {
        font-size: 2.9vw;
        margin-top: 4.2vw;
        .play_icon {
          width: 5vw;
          margin-right: 1vw;
        }
        .underLine {
          display: none;
        }
      }
    }
  }

  .popup_modal {
    position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      background: #000000c7;
      z-index: 20;
      display: flex;
      justify-content: center;
      align-items: center;
      .pop_modal_div {
      #popvideo {
        width: 55vw;
        height: 31vw;
        border-radius: 20px;
        @media (max-width: 750px) {
          width: 89vw;
          height: 60vw;
        }
      }
      .close {
        position: absolute;
        top: 20px;
        right: 30px;
        cursor: pointer;
      }
      }
  }
`
