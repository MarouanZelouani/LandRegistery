function TableHeadV (props) {
    return (
        <thead>
        <tr>
          <th>#</th>
          <th>{props.item1}</th>
          <th>{props.item2}</th>
          <th>{props.item3}</th>
          <th>{props.item4}</th>
          <th>{props.item5}</th>
        </tr>
      </thead>
    );
}

export default TableHeadV;