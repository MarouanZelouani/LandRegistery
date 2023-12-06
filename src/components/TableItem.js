function TableItem(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.Address}</td>
      <td>{props.Name}</td>
      <td>{props.CIN}</td>
      <td>
        <a href={props.DocLink}>view Document</a>
      </td>
      <td>
        <button className="btn btn-primary" >Verify</button>
      </td>
    </tr>
  );
}

export default TableItem;
