import styled from "styled-components"

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.5vw 19vw;
  p {
    font-weight: 500;
    font-size: 1.5vw;
    line-height: 2.4vw;
    text-align: center;
    color: #212121;
  }
  .footer_main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 900;
      font-size: 3vw;
      line-height: 4.7vw;
      text-align: center;
      color: #200e32;
      span {
        color: #0057fb;
      }
    }
    button {
      width: 400px;
      height: 4.9vw;
      background: #0057fb;
      font-weight: 600;
      font-size: 1.5vw;
      color: #ffffff;
      border: none;
      outline: none;
      cursor: pointer;
      margin-top: 4vw;
    }
  }
  .footer_curl {
    width: 12.7vw;
    margin: 6.5vw 0;
  }
  .footer_container2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
      max-width: 12.9vw;
      margin-bottom: 0.5vw;
    }
  }

  .avaiablites_main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 50vw;
    gap: 1.4vw;
    margin: 3.6vw;
    .avaiablites_list {
      font-weight: 500;
      font-size: 1.3vw;
      line-height: 1.5vw;
      text-align: center;
      color: #212121;
      opacity: 0.9;
      background: #dceffd;
      border-radius: 1.3vw;
      border-radius: 3.2vw;
      padding: 0.5vw 1.5vw;
    }
  }
  .icons {
    display: flex;
    a {
      cursor: pointer;
      margin-left: 1.9vw;
      img {
        width: 1.9vw;
        transition: 0.1s ease-in-out;
        :hover {
          width: 2vw;
        }
      }
    }
  }
  .copy_right {
    margin-top: 1.9vw;
    line-height: 2.9vw;
  }

  @media (max-width: 750px) {
    padding: 13vw 0;
    p {
      font-size: 2.9vw;
      line-height: 2.4vw;
    }
    .footer_main {
      h1 {
        font-size: 5vw;
        line-height: 6vw;
        width: 76.4vw;
      }
      button {
        width: 46.4vw;
        height: 8.7vw;
        font-size: 3.3vw;
        margin-top: 8.3vw;
      }
    }
    .footer_curl {
      width: 34vw;
      margin: 19vw 0;
    }
    .footer_container2 {
      .logo {
        max-width: 34vw;
        margin-bottom: 3vw;
      }
    }
    .avaiablites_main {
      max-width: 65vw;
      gap: 1.4vw;
      margin: 8vw;
      .avaiablites_list {
        font-size: 2.9vw;
        border-radius: 5vw;
        padding: 3vw 4vw;
      }
    }
    .icons {
      a {
        img {
          width: 5vw;
          margin: 0 0 0 4vw;
        }
      }
    }
    .copy_right {
      margin-top: 6vw;
      line-height: 7vw;
      width: 72vw;
    }
  }
`
