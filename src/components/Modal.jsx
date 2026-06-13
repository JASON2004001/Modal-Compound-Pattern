import React from "react";

const Modal = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "blueviolet",
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      {children}
    </div>
  );
};


function Header({ children }) {
  return <h2 style={{ marginBottom: "20px" }}>{children}</h2>;
}

function Body({ children }) {
  return <p style={{ fontSize: "18px", marginBottom: "20px" }}>{children}</p>;
}

function Footer({ children }) {
  return <div>{children}</div>;
}


Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

