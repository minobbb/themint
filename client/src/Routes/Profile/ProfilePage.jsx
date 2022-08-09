import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import ProfileCard from '../../components/ui/profile/ProfileCard';

function ProfilePage(props) {
  return (
    <Container>
      <Header>
        <h2>프로필</h2>
        <ProfileCardContainer>
          <ProfileCard />
        </ProfileCardContainer>
        <HeaderContainer>
          <NavStyle
            className={(props) => {
              return `${props.isActive ? 'isActive ' : ''}iconContainer`;
            }}
            end
            to="">
            리뷰
          </NavStyle>
          <NavStyle to="saleshistory">판매내역</NavStyle>
          <NavStyle to="purchasehistory">구매내역</NavStyle>
          <NavStyle to="interest">관심</NavStyle>
        </HeaderContainer>
      </Header>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </Container>
  );
}
export default ProfilePage;

const Container = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-top: 1px;
  margin-bottom: 20px;
`;

const Header = styled.header`
  margin-bottom: 1.25rem;
  margin-top: 70px;
  > h2 {
    font-size: 30px;
    font-weight: bold;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const NavStyle = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  width: 25%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.mainBlack};
  border-bottom: 2px solid ${(props) => props.theme.colors.subMint};

  outline: invert;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.mainMint};
  }
  &.active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.mainBlack};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: bold;
    border: 3px solid ${(props) => props.theme.colors.subMint};
    border-bottom: none;
  }
`;

const ProfileCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.main`
  width: 100%;
`;
