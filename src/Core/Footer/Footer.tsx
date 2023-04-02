import React from 'react'
import "./footer.css"

const year = new Date().getFullYear();

const footer = () => {
  return (
    <footer className="footer d-flex align-items-center justify-content-center bg-dark text-light">
      <span>Copyright © {year} GreenCity: All rights reserved.</span>
    </footer>
  )
}

export default footer
