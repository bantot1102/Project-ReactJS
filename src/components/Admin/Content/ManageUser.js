import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser</div>
      <div className="user-content ">
        <div>
          <button className="btn btn-">Add new user</button>
        </div>
        <div>table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;