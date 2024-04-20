import { useState } from "react";
import { IEmployee } from "./Employee.type";
import EmployeeModel from "./EmployeeModel";
import { DefaultButton } from "@fluentui/react";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
  CheckboxVisibility,
} from "@fluentui/react/lib/DetailsList";

type Props = {
  list: IEmployee[];
  onDeleteButtonClick: (data: IEmployee) => void;
  onEditButtonClick: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteButtonClick, onEditButtonClick } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setselectedEmployee] = useState(
    null as IEmployee | null
  );

  const viewEmployee = (data: IEmployee) => {
    setselectedEmployee(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Name",
      minWidth: 70,
      maxWidth: 200,
      isResizable: true,
      isCollapsible: true,
      onRender: (item: IEmployee) => {
        return <span>{`${item.firstName} ${item.lastName}`}</span>;
      },
    },
    {
      key: "column2",
      name: "Email Address",
      fieldName: "email",
      minWidth: 70,
      maxWidth: 200,
      isResizable: true,
      isCollapsible: true,
    },
    {
      key: "column3",
      name: "Actions",
      minWidth: 70,
      maxWidth: 300,
      isResizable: true,
      isCollapsible: true,
      onRender: (item: IEmployee) => {
        return (
          <>
            <div>
              <DefaultButton text="View" onClick={() => viewEmployee(item)} />
              <DefaultButton
                text="Edit"
                onClick={() => onEditButtonClick(item)}
              />
              <DefaultButton
                text="Delete"
                onClick={() => onDeleteButtonClick(item)}
              />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <article>
          <h3>Employee List</h3>
        </article>
        {/* <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

          {list.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.email}</td>
                <td>
                  <div>
                    <DefaultButton
                      text="View"
                      onClick={() => viewEmployee(employee)}
                    />
                    <DefaultButton
                      text="Edit"
                      onClick={() => onEditButtonClick(employee)}
                    />
                    <DefaultButton
                      text="Delete"
                      onClick={() => onDeleteButtonClick(employee)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </table> */}

        <DetailsList
          items={list}
          columns={columns}
          selectionMode={SelectionMode.single}
          layoutMode={DetailsListLayoutMode.justified}
          checkboxVisibility={CheckboxVisibility.hidden}
        />
        {showModal && selectedEmployee !== null && (
          <EmployeeModel
            onCloseButtonClick={closeModal}
            data={selectedEmployee}
          />
        )}
      </div>
    </>
  );
};

export default EmployeeList;
