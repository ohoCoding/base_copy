import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import React from "react";

const SubItem = ({ item, depth = 0 }) => {
  const [collapsed, setCollapsed] = useState(false);
  const icon = collapsed ? <HiChevronUp /> : <HiChevronDown />;

  const toggleCollapse = () => {
    setCollapsed((preValue) => !preValue);
  };
        if (item.childrens.length > 0) {
          return (
            <div>
              <SbTitle depth={depth} onClick={toggleCollapse}>
                [{depth}]{item.menuNm}
                {icon}
              </SbTitle>
              <SbSub isOpen={collapsed}>
                {item.childrens.map((child) => (
                  <SubItem item={child} depth={depth + 1} />
                ))}
              </SbSub>
            </div>
          );
        } else {
          return (
            <SbTitle depth={depth}>
              <SbLink to={item.path}>
                [{depth}]{item.menuNm}
              </SbLink>
            </SbTitle>
          );
        }
};
export default SubItem;

// 사이드바 전체를 감싸는 div
export const SbContainer = styled.div`
  min-width: 16rem;
  width: auto;
  height: auto;
  min-height: 70vh;
  font-size: 14px;
`;

// SbItem에서 하위메뉴들을 묶어줄 div
export const SbSub = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "100%" : "0")};
`;

// 메뉴명을 보여줄 div
export const SbTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.depth * 20}px;
  height: 32px;
  &:hover {
    background-color: #f6f6f2;
    cursor: pointer;
    border-right: solid 5px;
  }
`;

// 제일 하위메뉴에서 클릭할 Link
export const SbLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
