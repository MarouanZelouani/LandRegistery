function TableItemTren(props) {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.ownerAddress}</td>
        <td>{props.payerAddress}</td>
        <td>
          <button className="btn btn-primary" >Transfer</button>
        </td>
      </tr>
    );
  }
  
  export default TableItemTren;
  