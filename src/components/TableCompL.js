import { Table } from "react-bootstrap";
import TableHead from "./TableHead";
import TableItemLand from "./TableItemLand";

function TableCompL (props) {
  return <Table striped bordered hover>
      <TableHead
          item1="OwnerAddress"
          item2="Area"
          item3="Price"
          item4="Document"
          item5="Details"
          item6="Verify"
        />
        <tbody>
          <TableItemLand
            id="1"
            ownerAddress="0x99b972fF2710d15FC103599FCA59F7F067B1B69C"
            Area="lmatar"
            Price="45677"
            DocLink=""
            click={props.clicked}
            detailsClick={props.detail}
          />
        </tbody>
  </Table>;
}

export default TableCompL;
