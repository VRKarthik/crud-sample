import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";

type Props = {
  onBackButtonClick: () => void;
  onSubmitButtonClick: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const { onBackButtonClick, onSubmitButtonClick } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onFirstNameChanged = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChanged = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChanged = (e: any) => {
    setEmail(e.target.value);
  };

  const onAddEmployee = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    onSubmitButtonClick(data);
    onBackButtonClick();
  };

  return (
    <div className="form-container">
      <form onSubmit={onAddEmployee}>
        <div>
          <h3>Add Employee Form</h3>
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
          <PrimaryButton type="submit" text="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
