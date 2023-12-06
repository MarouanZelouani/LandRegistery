function TableItemTren(props) {
  function justClicked () {
    props.click();
  }
  function clickDetails () {
    props.detailsClick();
  }

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.ownerAddress}</td>
      <td>{props.Area}</td>
      <td>{props.Price}</td>
      <td>
        <a href={props.DocLink}>view Document</a>
      </td>
      <td>
        <button className="btn btn-primary" onClick={clickDetails}>View Details..</button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={justClicked} >Verify Land</button>
      </td>
    </tr>
  );
}

export default TableItemTren;
