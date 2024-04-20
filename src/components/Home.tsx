import { useContext, useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";
import { IEmployee, PageList } from "./Employee.type";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { PrimaryButton } from "@fluentui/react";

const Home = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [shownPage, setShownPage] = useState(PageList.list);
  const [selectedEmployee, setSelectedEmployee] = useState(
    null as IEmployee | null
  );

  useEffect(() => {
    const listString = window.localStorage.getItem("EmployeeList");
    if (listString) {
      persistEmployeeList(JSON.parse(listString));
    }
  }, []);

  const onAddEmployeeClick = () => {
    setShownPage(PageList.add);
  };

  const onEditEmployeeClick = (data: IEmployee) => {
    setShownPage(PageList.edit);
    setSelectedEmployee(data);
  };

  const showListPage = () => {
    setShownPage(PageList.list);
  };

  const persistEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  };

  const addEmployee = (data: IEmployee) => {
    persistEmployeeList([...employeeList, data]);
  };

  const editEmployee = (data: IEmployee) => {
    const filteredData = employeeList.filter((emp) => emp.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempList = [...employeeList];
    tempList[indexOfRecord] = data;
    persistEmployeeList(tempList);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];
    tempList.splice(indexToDelete, 1);
    persistEmployeeList(tempList);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>Simple React CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageList.list && (
          <>
            <PrimaryButton
              className="add-employee-button"
              text="Add Employee"
              onClick={onAddEmployeeClick}
            />
            <EmployeeList
              list={employeeList}
              onDeleteButtonClick={deleteEmployee}
              onEditButtonClick={onEditEmployeeClick}
            />
          </>
        )}

        {shownPage === PageList.add && (
          <AddEmployee
            onBackButtonClick={showListPage}
            onSubmitButtonClick={addEmployee}
          />
        )}

        {shownPage === PageList.edit && selectedEmployee !== null && (
          <EditEmployee
            data={selectedEmployee}
            onBackButtonClick={showListPage}
            onSubmitButtonClick={editEmployee}
          />
        )}
      </section>
    </>
  );
};

export default Home;
