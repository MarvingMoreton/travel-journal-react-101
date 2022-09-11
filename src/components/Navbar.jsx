import React from "react"
import logo from "/public/assets/globe.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <h1>my travel journal.</h1>
    </nav>
  )
}
