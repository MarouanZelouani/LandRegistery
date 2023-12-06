function ViewDetails (props) {
    function cancel () {
        props.onCancel();
    }

    return (
        <div className="details">
            <h4>Land Details</h4>
            <button className="btn btn-primary" onClick={cancel}>Retern</button>
        </div>
    );
}

export default ViewDetails;