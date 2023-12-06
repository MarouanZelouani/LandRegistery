function PriceConf(props) {
  function cancel() {
    props.onCancel();
  }

  function submit() {
    props.onConfirm();
  }

  return (
    <div className="px">
      <h4>Give this Land a Price</h4>
      <input className="form-control" type="text" name="name" placeholder="enter the price here...."/>
      <div className="bettween">
        <button className="btn btn-primary" onClick={cancel}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default PriceConf;
