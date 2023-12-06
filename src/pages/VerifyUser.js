import TableComp from "../components/TableComp";
import SideBar from "../components/SideBar";
import PageHead from "../components/PageHead";

function VerifyUser() {
  return (
    <div>
      <SideBar />
      <PageHead text="Verify User" />
      <div className="VerifyUser">
        <div className="toclos" >
          <TableComp />
        </div>
      </div>
    </div>
  );
}

export default VerifyUser;
