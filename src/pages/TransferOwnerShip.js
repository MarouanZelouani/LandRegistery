import TableCompT from "../components/TableCompT";
import SideBar from "../components/SideBar";
import PageHead from "../components/PageHead";

function TransferOwnerShip() {
  return (
    <div>
      <SideBar />
      <PageHead text="Transfer Owner Ship" />
      <div className="VerifyUser">
        <div className="toclos">
          <TableCompT />
        </div>
      </div>
    </div>
  );
}

export default TransferOwnerShip;
