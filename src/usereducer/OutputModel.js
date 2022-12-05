import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
export default function OutputModel({ value1 }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        style={{ marginLeft: "50%" }}
        onClick={handleOpen}
      >
        Submit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Title: {value1.title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Discription:{value1.discription}
              <br />
              Time:{value1.time}
              <br />
              SKU:{value1.sku}
              <br />
              Barcode:{value1.barcode}
              <br />
              Categogry:{value1.category}
              <br />
              Image-Selection:{value1.radio}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
