function NavLinkBar(props) {
  return (
    <li>
      <a href={props.link}>
        <i className={"fa " + props.icon + " fa-2x"}></i>
        <span className="nav-text">{props.text}</span>
      </a>
    </li>
  );
}

export default NavLinkBar;
