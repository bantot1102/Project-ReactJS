import ModalCreateUser from "./ModalCreateUser";
import { BsPlusSquare } from "react-icons/bs";
import { useState } from "react";
import "./ManageUser.scss";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">ManageUser</div>
      <div className="user-content ">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <BsPlusSquare />
            <span>Add new user</span>
          </button>
        </div>
        <div className="table-users-container">table users</div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};
export default ManageUser;
