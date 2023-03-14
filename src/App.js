import "./App.css";
import { Container, Table } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import data from "./data";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-4">Contact Keeper</h1>
        <InputGroup className="my-3">
          <Form.Control
            placeholder="Search by First Name or Phone No "
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <Table className="striped borderd hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                let phoneField = item?.phone.split("-").join("");
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search) ||
                      phoneField?.toString()?.includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
