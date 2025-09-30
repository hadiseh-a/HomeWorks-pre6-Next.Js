"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ img, handleClose }) {
  const [open, setOpen] = React.useState(true);

  const goToFullPage = (e) => {
    e.stopPropagation(); // جلوگیری از بسته شدن Modal
    setOpen(false);
    window.location.href = `/photo/${img.id}`; // فقط وقتی روی عکس کلیک شد
  };

  const closeModal = () => {
    setOpen(false);
    if (handleClose) handleClose(); // فقط Modal بسته شود
  };

  return (
    <Modal
      open={open}
      onClose={closeModal} // کلیک روی Backdrop فقط Modal را می‌بندد
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" textAlign="center" gutterBottom>
            ID: {img.id}
          </Typography>
          <Image
            src={img.src}
            width={300}
            height={190}
            alt="picture"
            style={{ display: "block", margin: "0 auto", cursor: "pointer" }}
            onClick={goToFullPage} // فقط وقتی روی عکس کلیک شد → full page
          />
        </Box>
      </Fade>
    </Modal>
  );
}
