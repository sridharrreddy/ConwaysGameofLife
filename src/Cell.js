import React from "react";
import styled from "@emotion/styled";

function Cell({ alive }) {
  const CellDiv = styled.div`
    background-color: ${alive ? "#ee4" : "#eee"};
    border: 1px solid #eee;
    display: inline-block;
    width: 49px;
    height: 49px;
  `;

  return <CellDiv />;
}

export default Cell;
