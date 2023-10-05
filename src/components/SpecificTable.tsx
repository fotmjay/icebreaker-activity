import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { Table } from "../shared/types";

type Props = {
  tableInfo: Table;
  openModal: (table: Table) => void;
};

export default function SpecificTable(props: Props) {
  const smallMedia = useMediaQuery("(max-width:360px)");
  const circleSize = smallMedia ? "30%" : "22%";

  const crossedOutStyling = {
    color: "red",
    textDecoration: "line-through",
  };

  const stylingToUse = props.tableInfo.crossed ? crossedOutStyling : {};

  return (
    <Box sx={{ width: circleSize, aspectRatio: "1/1" }}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          sx={{ cursor: "pointer", ...stylingToUse }}
          textAlign="center"
          variant="h4"
          onClick={() => props.openModal(props.tableInfo)}
        >
          {props.tableInfo.id + 1}
        </Typography>
      </Card>
    </Box>
  );
}
