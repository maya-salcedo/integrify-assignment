import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Name = styled.h1``;

const UserName = styled.p``;

const Website = styled.p``;

export default function CardWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

CardWrapper.Name = function CardWrapperName({ children }) {
  return <Name>{children}</Name>;
};

CardWrapper.UserName = function CardWrapperUserName({ children }) {
  return <UserName>{children}</UserName>;
};

CardWrapper.Website = function CardWrapperWebsite({ children }) {
  return <Website>{children}</Website>;
};
