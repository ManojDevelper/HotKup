import React from "react"
import p2_dashboard_img from "../../../data/assets/banner/dashboard.svg"
import { ProductMain } from "./styles"

const Product = () => {
  return (
    <ProductMain id="pricing">
      <h1>One solution to replace them all</h1>
      <img src={p2_dashboard_img} alt="ProductMain" className="dashboard_img" />
      <p>
        Unlock process management effortlessly with HotKup. Our user-friendly software is designed for business users, allowing you to begin with simple task management and gradually explore advanced features. Streamline workflows, optimize productivity, and adapt processes to your needs. Experience HotKup and revolutionize your business.
      </p>
    </ProductMain>
  )
}
export default Product
