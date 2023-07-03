import React, { useState } from "react"
import { Modal } from "antd"
import Contact from "../../Contact"
import { SuccessModal } from "../../Contact/styles"
import success_icon from "../../../images/success_icon.svg"
import Loader from "../Loader"

const ContactModal = props => {
  const { open, setOpen } = props

  const [successModal, setSuccessModal] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

  const closeSuccessModal = () => {
    setSuccessModal(false)
    setOpen(false)
    setOpenLoader(false)
  }
  return (
    <>
      {openLoader && <Loader />}
      <Modal
        centered
        visible={open}
        width={1000}
        footer={null}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={() => setOpen(false)}
        bodyStyle={{ backgroundColor: `white`, height: `100%`, padding: `0` }}
        style={{ backgroundColor: `white`, height: `100%`, padding: `0` }}
        maskStyle={{
          backgroundColor: `white`,
          height: `fit-content`,
          padding: `0`,
        }}
      >
        <div id="navcont">
          <Contact
            setSuccessModal={setSuccessModal}
            setOpenLoader={setOpenLoader}
          />
        </div>
      </Modal>
      <Modal
        centered
        visible={successModal}
        width={1000}
        footer={null}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={() => setSuccessModal(false)}
        bodyStyle={{
          backgroundColor: `transparent`,
          height: `0`,
          padding: `0`,
        }}
        style={{
          backgroundColor: `rgb(0 0 0 / 50%)`,
          height: `0`,
          padding: `0`,
        }}
        maskStyle={{
          backgroundColor: `transparent`,
          height: `fit-content`,
          padding: `0`,
        }}
      >
        <SuccessModal>
          <img src={success_icon} alt="success_icon" />
          <h1>Thank you for reaching out</h1>
          <p>We will be in touch with you soon</p>
          <button onClick={() => closeSuccessModal()}>Close</button>
        </SuccessModal>
      </Modal>
    </>
  )
}
export default ContactModal
