import { Avatar, List } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function AntList() {
  const data = [
    {
      title: "Ant Design",
      description:
        "An enterprise-class UI design language and React UI library.",
    },
    {
      title: "React",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      title: "JavaScript",
      description:
        "A programming language that conforms to the ECMAScript specification.",
    },
  ];s

  return (
    <section>
      <h2>List</h2>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </section>
  );
}
