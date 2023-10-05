import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import React, { SetStateAction } from "react";
import { Table } from "../shared/types";

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
  smallMedia: boolean;
  tableInfo: Table;
  setTableInfo: React.Dispatch<SetStateAction<Table[]>>;
};

export default function BasicModal(props: Props) {
  const responsiveComponent = { ...style, width: props.smallMedia ? "75%" : "500px" };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => {
    modifyTableInfo(id, "note", event.target.value);
  };

  const handleClose = () => {
    props.closeModal();
  };

  const handleClick = (id: number) => {
    modifyTableInfo(id, "crossed");
  };

  const modifyTableInfo = (id: number, key: string, value: string = "") => {
    props.setTableInfo((oldTableInfo: Table[]) => {
      const newTableInfo = [...oldTableInfo];
      if (key === "crossed") {
        newTableInfo[id][key] = !newTableInfo[id][key];
      } else if (key === "note") {
        newTableInfo[id][key] = value;
      }
      return newTableInfo;
    });
  };

  return (
    <div>
      <Modal open onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={responsiveComponent}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }} paddingBottom="15px">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {`Table ${props.tableInfo.id + 1}`}
            </Typography>
            <Button variant="outlined" size="small" onClick={() => handleClick(props.tableInfo.id)}>
              {props.tableInfo.crossed ? "Dérayer" : "Rayer"}
            </Button>
          </Box>
          <TextField
            autoFocus
            multiline
            size="small"
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e, props.tableInfo.id)}
            value={props.tableInfo.note}
          />
        </Box>
      </Modal>
    </div>
  );
}
