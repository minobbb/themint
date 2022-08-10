import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import { useRecoilValue } from 'recoil';
import { loggedinState, myInformationState } from '../../../atoms';
import Logo from '../../common/Logo';

function NavigationBar({ url, keyword, categoryName }) {
  const loggedin = useRecoilValue(loggedinState);
  const myInformation = useRecoilValue(myInformationState);
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`${url}&keyword=${keyword}`);
  };

  const onSubmit = () => {
    navigate(`${url}&keyword=${keyword}`);
  };

  if (
    window.location.pathname.startsWith('/streamings') ||
    window.location.pathname.startsWith('/register') ||
    window.location.pathname.startsWith('/login') ||
    window.location.pathname.startsWith('/help')
  )
    return null;

  return (
    <Container>
      <Wrapper>
        <Logo />
        <NavList>
          <NavSearch onSubmit={onSubmit}>
            <SearchIcon type="submit" aria-label="search" onClick={onClick} />
            <SearchBox
              type="text"
              value={search}
              placeholder="검색하기"
              inputProps={{ 'aria-label': '검색하기' }}
              onChange={onChangeSearch}
            />
          </NavSearch>
          <NavItemText>
            <Link to={`/categories/0`}>
              <p>카테고리</p>
            </Link>
            <Link to="/auctions/new">
              <p>경매생성</p>
            </Link>
          </NavItemText>
          <NavItemIcon>
            {loggedin && (
              <>
                <Link to="/">
                  <ChatIcon />
                </Link>
                <Link to="/">
                  <NotificationsNoneIcon />
                </Link>
                <Link to={`profile/${myInformation.memberId}`}>
                  <PersonOutlineIcon />
                </Link>
              </>
            )}
            {!loggedin && (
              <>
                <Link to="login">
                  <p>로그인</p>
                </Link>
                |
                <Link to="register">
                  <p>회원가입</p>
                </Link>
              </>
            )}
          </NavItemIcon>
        </NavList>
      </Wrapper>
    </Container>
  );
}

export default NavigationBar;

const Container = styled.header`
  max-width: 100%;
  position: fixed;
  margin: 0 auto;
  right: 0;
  left: 0;
  z-index: 10;
`;

const Wrapper = styled.nav`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.mainBlack};
  max-width: 1024px;
  height: 80px;
  margin: 0 auto;
  > h1 {
    width: 100px;
    height: 40px;
  }
`;

const NavList = styled.div`
  width: 100%;
  display: flex;
`;

const NavLogo = styled.div`
  font-family: 'PyeongChangPeace-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2')
    format('woff2');
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  color: ${(props) => props.theme.colors.mainMint};
  width: 112px;
`;

const NavSearch = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.pointBlack};
  border: none;
  border-radius: 5px;
  align-items: center;
  padding-left: 10px;
  margin-left: auto;
`;

const SearchBox = styled.input`
  background-color: ${(props) => props.theme.colors.pointBlack};
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.white};
  width: 380px;
  &:focus {
    outline: none;
  }
`;

const NavItemText = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;

const NavItemIcon = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;

// 아이콘 오류 해결 https://stackoverflow.com/questions/69708504/module-not-found-cant-resolve-mui-icons-material-filedownload