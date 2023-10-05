import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { Table } from "../shared/types";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  tableInfo: Table;
  openModal: (table: Table) => void;
};

export default function SpecificTable(props: Props) {
  const smallMedia = useMediaQuery("(max-width:360px)");
  const circleSize = smallMedia ? "30%" : "22%";

  return (
    <Box sx={{ position: "relative", width: circleSize, aspectRatio: "1/1" }}>
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
          sx={{ cursor: "pointer", position: "absolute" }}
          textAlign="center"
          variant="h4"
          onClick={() => props.openModal(props.tableInfo)}
        >
          {props.tableInfo.id + 1}
        </Typography>
        {props.tableInfo.crossed && (
          <CloseIcon
            sx={{ position: "absolute", fontSize: "60px", color: "red" }}
            onClick={() => props.openModal(props.tableInfo)}
          />
        )}
      </Card>
    </Box>
  );
}
