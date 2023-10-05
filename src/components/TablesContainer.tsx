import { Container, useMediaQuery } from "@mui/material";
import SpecificTable from "./SpecificTable";
import TableModal from "./TableModal";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Table } from "../shared/types";

type Props = {
  tableArray: Table[];
};

export default function TablesContainer(props: Props) {
  const [tableModal, setTableModal] = useState<number | null>(null);
  const [tableInfo, setTableInfo] = useLocalStorage("tableInfo", props.tableArray);
  const smallMedia = useMediaQuery("(max-width:450px)");
  const openModal = (table: Table) => setTableModal(table.id);
  const closeModal = () => setTableModal(null);

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "100%" }}>
      {tableInfo.map((table: Table) => (
        <SpecificTable tableInfo={table} openModal={openModal} key={table.id} />
      ))}
      {tableModal && (
        <TableModal
          tableInfo={tableInfo[tableModal]}
          smallMedia={smallMedia}
          closeModal={closeModal}
          setTableInfo={setTableInfo}
        />
      )}
    </Container>
  );
}
