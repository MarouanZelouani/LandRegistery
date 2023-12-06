function LogOut(props) {
  const divStyle = {
    position: 'absolute',
    left: 0,
    bottom: 0,
  };

  return (
    <ul className="logout" style={divStyle}>
      <li>
        <a href={props.link}>
          <i className="fa fa-power-off fa-2x"></i>
          <span className="nav-text"> Logout </span>
        </a>
      </li>
    </ul>
  );
}

export default LogOut;
