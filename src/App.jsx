import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  function handleDeleteClick() {
    setShowPopup(true);
  }

  function handleYes() {
    alert("Item deleted!");
    setShowPopup(false);
  }

  function handleNo() {
    setShowPopup(false);
  }

  return (
    <>
      <button
        onClick={handleDeleteClick}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "16px",
          display: "block",
          margin: "20px auto",
        }}
      >
        Delete File
      </button>

      {showPopup && (
        <Modal>
          <Modal.Header>Delete User?</Modal.Header>
          <Modal.Body>Are you sure you want to delete this file?</Modal.Body>
          <Modal.Footer>
            <button
              onClick={handleYes}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                margin: "0 10px",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              style={{
                backgroundColor: "gray",
                color: "white",
                border: "none",
                padding: "10px 20px",
                margin: "0 10px",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              No
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default App;
