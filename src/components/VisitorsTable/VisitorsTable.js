import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { selectVisitorsItems } from "../../redux/visitors/selectors";
import visitorAPI from "../../redux/visitors/operations";
import ModalUpdateVisitor from "../ModalUpdateVisitor/ModalUpdateVisitor";

export default function VisitorsTable() {
  const dispatch = useDispatch();
  const visitors = useSelector(selectVisitorsItems);

  useEffect(() => {
    dispatch(visitorAPI.readAll());
  }, [dispatch, visitors.length]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Time visit</th>
        </tr>
      </thead>
      <tbody>
        {visitors.map((visitor) => {
          return (
            <tr key={visitor.id}>
              <td>{visitor.name}</td>
              <td>{visitor.lastName}</td>
              <td>
                {visitor.date}{" "}
                <Button onClick={() => dispatch(visitorAPI.remove(visitor.id))}>
                  Delete
                </Button>{" "}
                <ModalUpdateVisitor visitor={visitor}/>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
