import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  DatePicker,
  Card,
  List,
  Avatar,
  Collapse,
  Table,
  Tag,
  message,
  Alert,
  Spin,
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;

const data = [
  {
    title: "Ant Design",
    description: "An enterprise-class UI design language and React UI library.",
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
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const dataSource = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const handleClick = () => {
  message.success("Button clicked!");
};

export default function HomePage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Title>Welcome to Ant Design Showcase</Title>

            <Content style={{ padding: 10, marginBottom: 10 }}>
              <Title level={2}>Buttons</Title>
              <Button type="primary" onClick={handleClick}>
                Primary Button
              </Button>
              <Button>Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <Button type="text">Text Button</Button>
              <Button type="link">Link Button</Button>
            </Content>

            <Content style={{ padding: 10, marginBottom: 10 }}></Content>

            <Title level={2}>Date Picker</Title>
            <DatePicker />

            <Content style={{ padding: 10, marginBottom: 10 }}></Content>

            <Title level={2}>Cards</Title>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>

            <Content style={{ padding: 10, marginBottom: 10 }}></Content>

            <Title level={2}>List</Title>
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
            <Content style={{ padding: 10, marginBottom: 10 }}>
              <Title level={2}>Collapse</Title>
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="This is panel header 1" key="1">
                  <p>Content of panel 1</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>Content of panel 2</p>
                </Panel>
              </Collapse>
            </Content>

            <Content style={{ padding: 10, marginBottom: 10 }}>
              <Title level={2}>Table</Title>
              <Table columns={columns} dataSource={dataSource} />
            </Content>

            <Content style={{ padding: 10, marginBottom: 10 }}>
              <Title level={2}>Messages and Alerts</Title>
              <Button type="primary" onClick={handleClick}>
                Show Message
              </Button>
              <Alert message="Success Text" type="success" />
              <Alert message="Info Text" type="info" />
              <Alert message="Warning Text" type="warning" />
              <Alert message="Error Text" type="error" />
            </Content>

            <Content style={{ padding: 10, marginBottom: 10 }}>
              <Title level={2}>Spinners</Title>
              <Spin />
            </Content>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
