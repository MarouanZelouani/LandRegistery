function TableHeadTren (props) {
    return (
        <thead>
        <tr>
          <th>#</th>
          <th>{props.item1}</th>
          <th>{props.item2}</th>
          <th>{props.item3}</th>
        </tr>
      </thead>
    );
}

export default TableHeadTren;