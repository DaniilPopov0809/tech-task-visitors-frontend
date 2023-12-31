import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { ArrowUpDown, ArrowUp, ArrowDown } from "./VisitorTabele.styled";
import ButtonsModal from "../ButtonsModal/ButtonsModal";
import visitorOperation from "../../redux/visitors/operations";

import {
  selectSortColumn,
  selectSortDirection,
  selectVisitorsItems,
} from "../../redux/visitors/selectors";
import {
  setSortColumn,
  setSortDirection,
} from "../../redux/visitors/sortSlice";
import sortVisitors from "../../utils/sortVisitors";

const VisitorsTable = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState(null);

  const dispatch = useDispatch();
  const sortColumn = useSelector(selectSortColumn);
  const sortDirection = useSelector(selectSortDirection);

  const visitors = useSelector(selectVisitorsItems);

  useEffect(() => {
    dispatch(visitorOperation.readAll());
  }, [dispatch]);

  const handleClickRow = (visitor) => {
    setIsOpenModal(true);
    setSelectedVisitor(visitor);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      dispatch(setSortDirection(sortDirection === "asc" ? "desc" : "asc"));
    } else {
      dispatch(setSortColumn(column));
      dispatch(setSortDirection("asc"));
    }
  };

  const sortedVisitors = [...visitors];
  sortVisitors(sortedVisitors, sortColumn, sortDirection);

  return (
    <>
      <Table striped bordered hover style={{ maxWidth: "700px" }}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name
              {(sortColumn === "name" && (
                <span>
                  {sortDirection === "asc" ? <ArrowUp /> : <ArrowDown />}
                </span>
              )) || <ArrowUpDown />}
            </th>
            <th onClick={() => handleSort("lastname")}>
              Last name
              {(sortColumn === "lastname" && (
                <span>
                  {sortDirection === "asc" ? <ArrowUp /> : <ArrowDown />}
                </span>
              )) || <ArrowUpDown />}
            </th>
            <th onClick={() => handleSort("date")}>
              Time visit
              {(sortColumn === "date" && (
                <span>
                  {sortDirection === "asc" ? <ArrowUp /> : <ArrowDown />}
                </span>
              )) || <ArrowUpDown />}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedVisitors.map((visitor) => {
            return (
              <tr key={visitor.id} onClick={() => handleClickRow(visitor)}>
                <td>{visitor.name}</td>
                <td>{visitor.lastname}</td>
                <td>{visitor.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {isOpenModal && (
        <ButtonsModal
          visitor={selectedVisitor}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
};
export default VisitorsTable;
