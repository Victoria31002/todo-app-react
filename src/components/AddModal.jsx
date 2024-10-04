import React from "react";
import { TextField, Button, Modal, Box } from "@mui/material";

const AddModal = ({
  handleClose,
  modalOpen,
  newTodo,
  setNewTodo,
  handleAddTodo,
}) => {
  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 5,
        }}
      >
        <h2
          style={{
            fontWeight: "500",
            fontSize: "24px",
            textAlign: "center",
            marginBottom: "25px",
            marginTop: "-20px",
          }}
        >
          NEW NOTE
        </h2>
        <TextField
          sx={{
            border: "1px solid #6C63FF",
            borderRadius: "5px",
            marginBottom: "128px",
            color: "#6C63FF",
          }}
          label="Input your note..."
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between", gap: '20px' }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClose}
            sx={{
              mt: 2,
              border: "1px solid #6C63FF",
              background: "#F7F7F7",
              color: " #6C63FF",
              fontFamily: "Kanit",
              fontSize: "18px",
              padding: "10px 22px",
            }}
          >
            CANCEL
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              handleAddTodo();
              handleClose();
            }}
            sx={{
              mt: 2,
              border: "none",
              background: " #6C63FF",
              fontFamily: "Kanit",
              fontSize: "18px",
              color: "#F7F7F7",
            }}
          >
            APPLY
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddModal;
