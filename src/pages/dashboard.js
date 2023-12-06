import SideBar from "../components/SideBar";
import PageHead from "../components/PageHead";
import Dachboardcomp from "../components/Dachboardcomp";

function Dashboard() {
  return (
    <div>
      <SideBar />
      <PageHead text="Dashboard" />
      <div className="dashboard">
      <Dachboardcomp />
      <Dachboardcomp />
      <Dachboardcomp />
      </div>
    </div>
  );
}

export default Dashboard;
