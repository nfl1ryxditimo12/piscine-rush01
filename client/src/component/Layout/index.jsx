import React from "react";

const Base = ({ children }) => {
  const contentStyle = {
    width: "100%",
    padding: "150px 100px",
    height: "94%",
    overflow: "visible",
    opacity: "1",
  };
  const headerStyle = {
    padding: "15px 30px",
    height: "6%",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "ZCOOL KuaiLe, cursive",
    fontSize: "40px",
    textShadow: "2px 2px 2px black",
  };
  const footerStyle = {
    textAlign: "center",
    position: "relative",
    fontFamily: "Noto Sans KR, sans-serif",
    background: "black",
    color: "white",
    padding: "20px 0",
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "white",
      }}
    >
      <div style={headerStyle}>Indian Pocker</div>
      <div style={contentStyle}>{children}</div>
      <div style={footerStyle}>
        <pre>MardownBoard nkim & iha & seonkim & ji-park & jikwon</pre>{" "}
        <pre>©2021 JS-Piscine Rush00. All rights Reserved</pre>{" "}
      </div>
    </div>
  );
};

export default Base;
