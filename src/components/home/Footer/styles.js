import styled from "styled-components"

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 280px;
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
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
      font-size: 46px;
      line-height: 72px;
      text-align: center;
      color: #200e32;
      span {
        color: #0057fb;
      }
    }
    button {
      width: 400px;
      height: 76px;
      background: #0057fb;
      font-weight: 600;
      font-size: 24px;
      color: #ffffff;
      border: none;
      outline: none;
      cursor: pointer;
      margin-top: 4vw;
    }
  }
  .footer_curl {
    width: 195px;
    margin: 100px 0;
  }
  .footer_container2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
      max-width: 198px;
      margin-bottom: 0.5vw;
    }
  }

  .avaiablites_main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 770px;
    gap: 22px;
    margin: 56px;
    .avaiablites_list {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #212121;
      opacity: 0.9;
      background: #dceffd;
      border-radius: 20px;
      border-radius: 50px;
      padding: 8px 24px;
    }
  }
  .icons {
    display: flex;
    a {
      cursor: pointer;
      margin-left: 30px;
      img {
        width: 30px;
        transition: 0.1s ease-in-out;
        :hover {
          width: 33px;
        }
      }
    }
  }
  .copy_right {
    margin-top: 30px;
    line-height: 45px;
  }
`
