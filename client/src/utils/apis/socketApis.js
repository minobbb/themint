export const socketApis = {
  STANDBY: (room) => `/api/auction/standby/${room}`,
  ROOM_CREATION: '/api/chat/room/auction',
  AUCTION_START: '/api/auction/notice',
};
