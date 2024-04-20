import { IEmployee } from "./Employee.type";
import "./EmployeeModel.style.css";

type Props = {
  onCloseButtonClick: () => void;
  data: IEmployee;
};

const EmployeeModel = (props: Props) => {
  const { onCloseButtonClick, data } = props;

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onCloseButtonClick}>
            &times;
          </span>
          <h3>Employee Data</h3>
          <div>
            <div>
              <label>First Name : {data.firstName}</label>
            </div>
            <div>
              <label>Last Name : {data.lastName}</label>
            </div>
            <div>
              <label>Email Add. : {data.email}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeModel;
