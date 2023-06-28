import React, { useState } from "react"
import img1 from "../../data/assets/banner/c_phone.png"
import img2 from "../../data/assets/banner/c_mail.png"
import { ContactSection } from "./styles"
import { message } from "antd"
import { SmileOutlined } from "@ant-design/icons"

const Contact = ({setSuccessModal, setOpenLoader}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  // const success = () => {
  //   message.success({
  //     content:
  //       "Hello there! Thank you for reaching out. We will get back to you as quick as humanly possible.",
  //     className: "messageCont",
  //     icon: <SmileOutlined />,
  //     style: {
  //       display: "flex",
  //       justifyContent: `center`,
  //       alignItems: `center`,
  //     },
  //   })
  // }

  const warning = () => {
    message.warning({ content: "All fields need to be filled" })
  }
  const [errors, setErrors] = useState(false)
  const validation = () => {
    let errors = {}
    if (name.length < 3) {
      errors.color = "red"
    } else {
      errors.color = ""
    }
    if (email.length < 3) {
      errors.color = "red"
    } else {
      errors.color = ""
    }
    return errors
  }

  function signUpp() {
    setErrors(validation());
    warning();
  }

  const onFinish = async values => {
    setOpenLoader(true);
    const data = new FormData()
    data.append("name", name)
    data.append("email", email)
    if (description === undefined) {
      data.append("description", "-")
    } else {
      data.append("description", description)
    }

    var url =
      "https://script.google.com/macros/s/AKfycbyPOosLjKztSiddYNqrfeiDGZ36IxFEPBCNTor5akYFckok3pf3rgwMOD2neJw4cXk2yw/exec"

    await fetch(url, {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then(function (response) {
        setOpenLoader(false);
        setSuccessModal(true);
        setName("");
        setEmail("");
        setDescription("");
        setErrors(true);
      })
      .catch(function (err) {
        setOpenLoader(false);
        setErrors(true);
        message.error({
          content: err.message,
          className: "messageCont",
          icon: <SmileOutlined rotate={180} />,
        });
      })
  }

  return (
    <ContactSection>
      <div className="contact" id="contact">
        <h1>Contact us</h1>
        <div className="contact_contrainer">
          <div className="contact_img_block">
            <div id="contact_img_block_top">
              <p>Reach Us</p>
              <p>We would love to hear from you!</p>
            </div>
            <div id="contact_img_block_bottom">
              <div id="contact_img_block_bottom_blocks">
                <div id="contact_img_block_bottom_blocks_b1">
                  <img src={img1} alt="img" />
                </div>
                <div id="contact_img_block_bottom_blocks_b1">
                  <p>+91 9898989898</p>
                </div>
              </div>
              <div id="contact_img_block_bottom_blocks">
                <div id="contact_img_block_bottom_blocks_b1">
                  <img src={img2} alt="img" />
                </div>
                <div id="contact_img_block_bottom_blocks_b1">
                  <p>contact@hotkup.net</p>
                </div>
              </div>
            </div>
            <iframe
              title="Archimedis"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.7599284769844!2d-79.9094553845514!3d43.319284779134115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9d3a6dc1b965%3A0xfd665e1cacf94524!2s44%20Grindstone%20Way%2C%20Dundas%2C%20ON%20L9H%207B7%2C%20Canada!5e0!3m2!1sen!2sin!4v1636461270509!5m2!1sen!2sin"
              id="contact_img_block_bottom_blocks2"
            ></iframe>
          </div>
          <div className="contact_info_block">
            <div className="contact_info_top">
              <div className="contact_name" style={{ position: `relative` }}>
                {name.length < 3 ? (
                  <span style={{ color: errors.color }}>Your Name</span>
                ) : (
                  <span>Your Name</span>
                )}
                <input
                  type="text"
                  placeholder="Chris Do"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="contact_name" style={{ position: `relative` }}>
                {!email || !/\S+@\S+\.\S+/.test(email) ? (
                  <span style={{ color: errors.color }}>Email Address</span>
                ) : (
                  <span>Email Address</span>
                )}
                <input
                  type="text"
                  placeholder="chrisdo@abc.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="contact_message" style={{ position: `relative` }}>
              <span>Message</span>
              <textarea
                type="text"
                placeholder="What do you want to talk to us about?"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="button">
              {name.length < 3 || !email || !/\S+@\S+\.\S+/.test(email) ? (
                <button onClick={signUpp}>SEND MESSAGE</button>
              ) : (
                <button onClick={onFinish}>SEND MESSAGE</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContactSection>
  )
}
export default Contact
