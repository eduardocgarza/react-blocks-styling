import { Table } from "antd";
import { peopleList } from "../../data/peopleList";
import { tableColumns } from "./tableColumns";


export default function AntTable() {
  return (
    <section style={{ padding: "10px 0" }}>
      <h2>Table</h2>
      <Table columns={tableColumns} dataSource={peopleList} />
    </section>
  )
}