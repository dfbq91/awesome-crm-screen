import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Typography, Tag, Layout, Progress, Card, Row, Col } from "antd";
import axios from "axios";

import "./Dashboard.scss";

const columns = [
  {
    title: "Prospecto",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Estado",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color;
          if (tag === "Cerrado") {
            color = "green";
          } else if (tag === "Negociación") {
            color = "geekblue";
          } else {
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

export default function Dashboard() {
  const [prospects, setProspects] = useState([]);
  const { Title } = Typography;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        " https://api.opendota.com/api/proPlayers "
      );
      const prospectState = ["Negociación", "Rechazado", "Cerrado"];
      const tableDataSource = data.slice(0, 3).map((item) => ({
        key: item.account_id,
        name: item.personaname,
        tags: [prospectState[Math.floor(Math.random() * prospectState.length)]],
      }));
      setProspects(tableDataSource);
    };
    getData();
  }, []);

  return (
    <Layout className="">
      <Title>Hola Kuepa</Title>
      <Layout className="dashboard">
        <Card title="Relación de leads" className="" style={{ width: "auto" }}>
          <Row justify="space-around" align="top" style={{ alignItems: "" }}>
            <Col span={8}>
              <Progress className="" type="circle" percent={75} />
            </Col>
            <Col span={8}>
              <h3>Leads: 50 / 100</h3>
              <br></br>
              <h3>Matriculas: 10 / 20</h3>
            </Col>
            <Col span={8}>
              <h3>Cola de llamados: 10 / 30</h3>
            </Col>
          </Row>
        </Card>
        <Card title="Meta grupal" className="" style={{ width: 300 }}>
          Leads obtenidos
          <Progress percent={50}>200/400</Progress>
          Matriculas realizadas
          <Progress percent={50}>50/100</Progress>
        </Card>
        <Table
          columns={columns}
          dataSource={prospects}
          pagination={false}
          footer={() => (
            <Link to="/admin/prospectos">
              <strong>Muéstrame más</strong>
            </Link>
          )}
        />
        <Card title="Campañas" className="" style={{ width: "auto" }}>
          <Title>2</Title>
          <p>Campañas para ser revisadas</p>
        </Card>
        <Card title="Leads" className="" style={{ width: "auto" }}>
          <Title>30</Title>
          <p>Leads de alta prioridad</p>
        </Card>
      </Layout>
    </Layout>
  );
}
