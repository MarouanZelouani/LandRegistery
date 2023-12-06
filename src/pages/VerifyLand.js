import Backdrop from "../components/Backdrop";
import PriceConf from "../components/PriceConf";
import TableCompL from "../components/TableCompL";
import { useState } from "react";
import SideBar from "../components/SideBar";
import ViewDetails from "../components/ViewDetails";
import PageHead from "../components/PageHead";

function VerifyLand() {

  const [modalIsOpenDetails, setModalIsOpenDetails] = useState(false);
  const [modalIsOpen, setModalIsOpen ] = useState(false);

  function VerifyLandf() {
    setModalIsOpen(true);
  }

  function VievDetails() {
    setModalIsOpenDetails(true);
  }

  function closeDetails() {
    setModalIsOpenDetails(false);
  }

  function CloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <PageHead text="Verify Land" />
      <SideBar />
      <div className="VerifyLand">
        <div className="toclos">
         <TableCompL clicked={VerifyLandf}  detail={VievDetails}/>
        </div>
        {modalIsOpen ? (
          <PriceConf
            clicked={VerifyLandf}
            onCancel={CloseModal}
            onConfirm={CloseModal}
          />
        ) : null}
        {modalIsOpen ? <Backdrop onCancel={CloseModal} /> : null}


        {modalIsOpenDetails ? (
          <ViewDetails />
        ) : null}
        {modalIsOpenDetails ? <Backdrop onCancel={closeDetails} /> : null}
      </div>
    </div>
  );
}

export default VerifyLand;
