import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";

type Props = {
  data: IEmployee;
  onBackButtonClick: () => void;
  onSubmitButtonClick: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackButtonClick, onSubmitButtonClick } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const onFirstNameChanged = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChanged = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChanged = (e: any) => {
    setEmail(e.target.value);
  };

  const onEditEmployee = (e: any) => {
    e.preventDefault();
    const editedEmployee: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    onSubmitButtonClick(editedEmployee);
    onBackButtonClick();
  };

  return (
    <div className="form-container" onSubmit={onEditEmployee}>
      <form>
        <div>
          <h3>Edit Employee Form</h3>
        </div>
        <div>
          <TextField
            label="First name:"
            value={firstName}
            onChange={onFirstNameChanged}
          />
        </div>
        <div>
          <TextField
            label="Last name:"
            value={lastName}
            onChange={onLastNameChanged}
          />
        </div>
        <div>
          <TextField
            label="Email address:"
            value={email}
            onChange={onEmailChanged}
          />
        </div>
        <div className="action-area">
          <DefaultButton text="Back" onClick={onBackButtonClick} />
          <PrimaryButton type="submit" text="Update Employee" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
