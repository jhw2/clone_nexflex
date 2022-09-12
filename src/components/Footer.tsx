import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="https:///help.netflix.com/node/412">
              넷플릭스 소개
            </FooterLink>
            <FooterLink href="https:///help.netflix.com/ko">
              고객 센터
            </FooterLink>
            <FooterLink href="https:///help.netflix.com/ko">
              미디어 센터
            </FooterLink>
            <FooterLink href="https:///help.netflix.com/ko">
              이용 약관
            </FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>Netflix Right Desrved</FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;
  @media (max-width: 769px) {
    padding: 20px 20px 30px;
  }
`;
const FooterContent = styled.div``;
const FooterLinkContainer = styled.div`
  max-width: 500px;
  width: 100%;
`;
const FooterLinkTitle = styled.h1`
  color: #a0a0a0;
  font-size: 17px;
`;
const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 35px 0 0;
  @media (max-width: 768px) {
    margin: 25px 0 0;
  }
`;
const FooterLink = styled.a`
  color: #a0a0a0;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
const FooterDescContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const FooterDescRights = styled.h2`
  color: #ccc;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
`;
