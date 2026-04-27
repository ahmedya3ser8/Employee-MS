import { useState } from "react";

import ChangePassCard from "./ChangePassCard";
import ChangePassModal from "./ChangePassModal";

const ChangePassForm = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ChangePassCard setShowModal={setShowModal} />

      {showModal && <ChangePassModal setShowModal={setShowModal} />}
    </>
  )
}

export default ChangePassForm;
