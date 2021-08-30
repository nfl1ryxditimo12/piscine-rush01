import React from "react";
import Base from "../../Layout";
import "antd/dist/antd.css";
import "../../../style/custom-antd.css";
import { List, Card, Input, Space } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;
const tmpRooms = [
  {
    title: "nkim 서버",
    isFull: false,
    path: 1,
  },
  {
    title: "iha 서버",
    isFull: false,
    path: 2,
  },
  {
    title: "yejeong 서버",
    isFull: false,
    path: 3,
  },
  {
    title: "ji-park 서버",
    isFull: false,
    path: 4,
  },
  {
    title: "hannkim 서버",
    isFull: false,
    path: 5,
  },
  {
    title: "seonkim 서버",
    isFull: false,
    path: 6,
  },
  {
    title: "jikwon 서버",
    isFull: false,
    path: 7,
  },
  {
    title: "juno 서버",
    isFull: false,
    path: 8,
  },
  {
    title: "seomoon 서버",
    isFull: false,
    path: 9,
  },
  {
    title: "seomoon 서버",
    isFull: false,
    path: 10,
  },
  {
    title: "seomoon 서버",
    isFull: false,
    path: 11,
  },
];
const MainPage = () => {
  return (
    <Base>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={() => {
          console.log("search!");
        }}
        style={{
          width: 200,
          marginBottom: "20px",
        }}
      />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 9,
        }}
        dataSource={tmpRooms}
        renderItem={(item) => (
          <Link path="#">
            <List.Item>
              <Card title={item.title}>
                인원수 {item.isFull ? "2 / 2" : "1 / 2"}
              </Card>
            </List.Item>
          </Link>
        )}
      />
    </Base>
  );
};

export default MainPage;
