import React from "react";
import { Layout, Header, Content, Footer } from "./LayoutComponents";

const Base = ({ children, profile, username }) => {
  return (
    <Layout>
      <Header logo="Indian Pocker" profile={profile} username={username} />
      <Content>{children}</Content>
      <Footer>
        <pre>MardownBoard nkim & iha & seonkim & ji-park </pre>{" "}
        <pre>©2021 JS-Piscine Rush00. All rights Reserved</pre>{" "}
      </Footer>
    </Layout>
  );
};

export default Base;
