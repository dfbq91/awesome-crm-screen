import React, { useState, useEffect } from "react";
import { Typography, Table, Tag, Layout } from "antd";
import axios from "axios";

import "./Prospects.scss";

const columns = [
  {
    title: "Código",
    dataIndex: "code",
    key: "code",
  },
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
  {
    title: "Equipo",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (picture) => <img alt={"dota-person"} src={picture}></img>,
  },
  {
    title: "Contactar",
    dataindex: "contact",
    key: "contact",
    render: () => <a href="#blank">Contactar</a>,
  },
];

export default function Prospects() {
  const [prospects, setProspects] = useState([]);
  const { Title } = Typography;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        " https://api.opendota.com/api/proPlayers "
      );
      const prospectState = ["Negociación", "Rechazado", "Cerrado"];
      const tableDataSource = data.slice(0, 100).map((item) => ({
        key: item.account_id,
        code: item.account_id,
        name: item.name,
        tags: [prospectState[Math.floor(Math.random() * prospectState.length)]],
        team: item.team_name,
        avatar: item.avatar,
        contact: "Contactar",
      }));
      setProspects(tableDataSource);
    };
    getData();
  }, []);

  return (
    <Layout>
      <Title>Mis prospectos</Title>
      <Table columns={columns} dataSource={prospects} />
    </Layout>
  );
}
