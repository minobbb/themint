import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function IsSellingCard({ auction, func }) {
  const auctionstr = ['판매중', '입금대기', '입금완료', '판매완료', '유찰', '거래취소'];
  return (
    <Wrapper>
      {auction.status === 2 && (
        <CardContainer>
          <div>
            <Link to="#">
              <div>
                <picture>
                  <img
                    src={process.env.REACT_APP_IMAGE_URL + auction.auctionImage.imageUrl}
                    alt="옥션이미지"
                    width="400"
                    height="300"
                  />
                </picture>
                <AuctionInfoContainer>
                  <div>
                    <h4>{auction.productName}</h4>
                    {auction.status === 1 && <p>{auction.finalPrice.toLocaleString()}원</p>}
                    {auction.status === 2 && <p>{auction.finalPrice.toLocaleString()}원</p>}
                    {auction.status === 3 && <p>{auction.finalPrice.toLocaleString()}원</p>}
                    {auction.status === 0 && <p>{auction.startPrice.toLocaleString()}원</p>}
                    {auction.status >= 4 && <p>{auction.startPrice.toLocaleString()}원</p>}
                    <AcutionTime>{auction.startTime}</AcutionTime>
                    <AuctionStatus auctionstrkey={auction.status}>
                      {auctionstr[auction.status]}
                    </AuctionStatus>
                  </div>
                </AuctionInfoContainer>
              </div>
            </Link>
            <Link to={`/profile/${auction?.memberSeq}`}>
              <div>
                <picture>
                  <img
                    src={process.env.REACT_APP_IMAGE_URL + auction.profileUrl}
                    alt="유저 프로필"
                    width="50"
                    height="50"
                  />
                </picture>
              </div>
            </Link>
          </div>
          {auction.status === 2 ? (
            <Plus
              type="button"
              onClick={() => {
                func(auction);
              }}>
              판매 상세
            </Plus>
          ) : null}
        </CardContainer>
      )}
      {auction.status !== 2 && (
        <CardContainer>
          <div>
            <Link to={`/auctions/${auction?.hash}`}>
              <div>
                <picture>
                  <img
                    src={process.env.REACT_APP_IMAGE_URL + auction.auctionImage.imageUrl}
                    alt="옥션이미지"
                    width="400"
                    height="300"
                  />
                </picture>
                <AuctionInfoContainer>
                  <div>
                    <h4>{auction.productName}</h4>
                    {auction.status === 1 && <p>{auction.finalPrice.toLocaleString()}원</p>}
                    {auction.status === 2 && <p>{auction.finalPrice.toLocaleString()}원</p>}
                    {auction.status === 3 && <p>{auction.finalPrice.toLocaleString()}원</p>}
                    {auction.status === 0 && <p>{auction.startPrice.toLocaleString()}원</p>}
                    {auction.status >= 4 && <p>{auction.startPrice.toLocaleString()}원</p>}
                    <AcutionTime>{auction.startTime}</AcutionTime>
                    <AuctionStatus auctionstrkey={auction.status}>
                      {auctionstr[auction.status]}
                    </AuctionStatus>
                  </div>
                </AuctionInfoContainer>
              </div>
            </Link>
            <Link to={`/profile/${auction?.memberSeq}`}>
              <div>
                <picture>
                  <img
                    src={process.env.REACT_APP_IMAGE_URL + auction.profileUrl}
                    alt="유저 프로필"
                    width="50"
                    height="50"
                  />
                </picture>
              </div>
            </Link>
          </div>
          {auction.status === 2 ? (
            <Plus
              type="button"
              onClick={() => {
                func(auction);
              }}>
              판매 상세
            </Plus>
          ) : null}
        </CardContainer>
      )}
    </Wrapper>
  );
}

export default IsSellingCard;

const Wrapper = styled.div``;
const CardContainer = styled.article`
  position: relative;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.03);
  }
  > div {
    width: 100%;
    padding-top: 75%;
    position: relative;
    a {
      cursor: default;
      &:first-child {
        > div {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          > picture {
            position: relative;
            width: 100%;
            height: 100%;
            > img {
              position: relative;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      &:last-child {
        position: absolute;
        bottom: 20px;
        right: 5%;
        width: 15%;
        border: 2px solid transparent;
        overflow: hidden;
        border-radius: 50%;
        background-image: ${(props) =>
          `linear-gradient(#fff, #fff), linear-gradient(to right, ${props.theme.colors.mainMint} 0%, ${props.theme.colors.subMint} 100%)`};
        background-origin: border-box;
        background-clip: content-box, border-box;
        > div {
          position: relative;
          width: 100%;
          padding-top: 100%;
          picture {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;

const AuctionInfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 33%;
  background: linear-gradient(
    1.15deg,
    #0d0c0f 1.06%,
    rgba(13, 12, 15, 0.73) 54.67%,
    rgba(13, 12, 15, 0) 99.1%
  );
  left: 0;
  bottom: 0;
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h4 {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 20px;
    }
  }
`;

const AcutionTime = styled.p`
  position: absolute;
  right: 5%;
  top: -1%;
  font-size: 12px;
`;

const AuctionStatus = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 5px 8px;
  right: 5%;
  top: -180%;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.auctionstrkey === 0
      ? '#7CA981'
      : props.auctionstrkey === 1
      ? '#ADA610'
      : props.auctionstrkey === 2
      ? '#D28484'
      : props.auctionstrkey === 3
      ? '#2874A6'
      : 'dimgray'};
`;

const Plus = styled.button`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  border-radius: 5px;
  padding: 5px;
  width: 80%;
  height: 30%;
  bottom: 40%;
  right: 10%;
  background-color: ${(props) => props.theme.colors.mainBlack};
  color: ${(props) => props.theme.colors.subMint};
  border: 1px solid ${(props) => props.theme.colors.subMint};
  :hover {
    cursor: pointer;
  }
`;
