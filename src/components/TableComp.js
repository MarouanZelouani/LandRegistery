import { Table } from "react-bootstrap";
import TableHeadV from "./TableHeadV";
import TableItem from "./TableItem";

function TableComp(props) {
  return <Table striped bordered hover>
      <TableHeadV
          item1="Address"
          item2="UserName"
          item3="CIN"
          item4="Document"
          item5="Verify"
        />
        <tbody>
          <TableItem
            id="1"
            Address="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
            Name="marouane"
            CIN="HH56789"
            DocLink=""
          />
          <TableItem
            id="2"
            Address="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
            Name="marouane"
            CIN="HH56789"
            DocLink=""
          />
          <TableItem
            id="3"
            Address="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
            Name="marouane"
            CIN="HH56789"
            DocLink=""
          />
        </tbody>
  </Table>;
}

export default TableComp;
