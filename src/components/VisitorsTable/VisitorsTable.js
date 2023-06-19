import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import visitorAPI from "../../redux/visitors/operations";
import ButtonUpdateVisitor from "../ButtonUpdateVisitor/ButtonUpdateVisitor";
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

export default function VisitorsTable() {
  const dispatch = useDispatch();
  const sortColumn = useSelector(selectSortColumn);
  const sortDirection = useSelector(selectSortDirection);

  const visitors = useSelector(selectVisitorsItems);

  useEffect(() => {
    dispatch(visitorAPI.readAll());
  }, [dispatch]);

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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>
            Name
            {(sortColumn === "name" && (
              <span>{sortDirection === "asc" ? " ⇧" : " ⇩"}</span>
            )) ||
              " ⇳"}
          </th>
          <th onClick={() => handleSort("lastName")}>
            Last name
            {(sortColumn === "lastName" && (
              <span>{sortDirection === "asc" ? " ⇧" : " ⇩"}</span>
            )) ||
              " ⇳"}
          </th>
          <th onClick={() => handleSort("date")}>
            Time visit
            {(sortColumn === "date" && (
              <span>{sortDirection === "asc" ? " ⇧" : " ⇩"}</span>
            )) ||
              " ⇳"}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedVisitors.map((visitor) => {
          return (
            <tr key={visitor.id}>
              <td>{visitor.name}</td>
              <td>{visitor.lastName}</td>
              <td>
                {visitor.date}{" "}
                <Button onClick={() => dispatch(visitorAPI.remove(visitor.id))}>
                  Delete
                </Button>{" "}
                <ButtonUpdateVisitor visitor={visitor} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
