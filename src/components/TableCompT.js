import { Table } from "react-bootstrap";
import TableHeadTren from "./TableHeadTren";
import TableItemTren from "./TableItemTren";

function TableCompT(props) {
  return <Table striped bordered hover>
      <TableHeadTren
          item1="Address owner"
          item2="Address Payer"
          item3="Trensfer"
        />
        <tbody>
          <TableItemTren
            id="1"
            ownerAddress="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
            payerAddress="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
          />
          <TableItemTren
            id="2"
            ownerAddress="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
            payerAddress="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
          />
         <TableItemTren
            id="3"
            ownerAddress="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
            payerAddress="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
          />
        </tbody>
  </Table>;
}

export default TableCompT;
