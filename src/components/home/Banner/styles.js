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
    border: 1px solid white;
    z-index: 1;
    h2 {
      display: flex;
      position: relative;
      width: 1000px;
      font-weight: 900;
      font-size: 71.8845px;
      line-height: 88px;
      text-align: center;
      color: #212121;
      .crone {
        position: absolute;
        width: 39px;
        height: 47px;
        top: -1.5vw;
        left: 1.2vw;
      }
      .roundoff {
        position: absolute;
        width: 375px;
        right: 2vw;
        top: 4.9vw;
      }
    }
    p {
      width: 760px;
      font-weight: 500;
      font-size: 22px;
      line-height: 36px;
      text-align: center;
      color: #212121;
      margin: 20px 0;
      display: inline-block;
      position: relative;
      .cup {
        position: absolute;
        width: 35px;
        right: 1vw;
      }
      ::after {
        content: ".";
        right: 0.5vw;
        position: absolute;
      }
    }
    button {
      width: 400px;
      height: 76px;
      left: 520px;
      top: 559px;
      background: #0057fb;
      font-weight: 600;
      font-size: 24px;
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
      font-size: 18px;
      color: #212121;
      margin-top: 20px;
      cursor: pointer;
      transiton: 0.5s ease-in-out;
      .play_icon {
        width: 35px;
        margin-right: 0.5vw;
      }
      .underLine {
        position: absolute;
        width: 140px;
        bottom: -1vw;
        left: 2vw;
      }
      :hover {
        gap: 0.2vw;
      }
    }
  }
`
