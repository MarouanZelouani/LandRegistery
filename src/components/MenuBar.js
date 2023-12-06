import LogOut from "./Logout";
import NavLinkBar from "./NavLinkBar";

function MenuBar() {
  return (
    <nav className="main-menu">
      <ul>
          <NavLinkBar text="Dashboard" icon="fa-home" link="/"/>
          <NavLinkBar text="VerifyLand" icon="fa-laptop" link="/VerifyLand"/>
          <NavLinkBar text="VerifyUser" icon="fa-table" link="/VerifyUser" />
          <NavLinkBar text="TransferOwnerShip" icon="fa-list" link="/TransferOwnerShip"/>
          <LogOut link="/Login"/>
      </ul>
    </nav>
  );
}

export default MenuBar;
