import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
  smallMedia: boolean;
  tableNumber: number;
  crossedOut: boolean[];
  setCrossedOut: Function;
};

export default function BasicModal(props: Props) {
  const [text, setText] = useState<string>(localStorage.getItem(`table${props.tableNumber}`) || "");

  const responsiveComponent = { ...style, width: props.smallMedia ? "75%" : "500px" };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    localStorage.setItem(`table${props.tableNumber}`, event.target.value);
  };

  const handleClose = () => {
    setText("");
    props.closeModal();
  };

  const handleClick = (number: number) => {
    props.setCrossedOut((crossedOutList: boolean[]) => {
      const newList = [...crossedOutList];
      newList[number] = !newList[number];
      localStorage.setItem("crossedTableList", JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <div>
      <Modal
        open={props.isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={responsiveComponent}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }} paddingBottom="15px">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {`Table ${props.tableNumber}`}
            </Typography>
            <Button variant="outlined" size="small" onClick={() => handleClick(props.tableNumber - 1)}>
              {props.crossedOut[props.tableNumber - 1] ? "Dérayer" : "Rayer"}
            </Button>
          </Box>
          <TextField autoFocus multiline size="small" fullWidth onChange={handleChange} value={text} />
        </Box>
      </Modal>
    </div>
  );
}
