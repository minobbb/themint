import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import GradientButton from '../components/common/GradientButton';
import MintButton from '../components/common/MintButton';
import { ActiveInput } from '../style/style';
import { getData, userApis } from '../utils/api/userApi';
import { REGEX, REGISTER_MESSAGE, STANDARD } from '../utils/constants/constant';
import debounce from '../utils/functions/debounce';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import Post from './Post';
import { InputContainer } from './Register2';
import StepSignal from './StepSignal';

function Register3(props) {
  const [duplicatedNickname, setDuplicatedNickname] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState();

  const handleInput = (e) => {
    setAddress(e.target.value);
  };

  const togglePostCode = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: '',
      address: '',
    },
    mode: 'onChange',
  });

  const onValid = (data) => {
    console.log(data);
    if (duplicatedNickname) {
      setError('memberId', { message: REGISTER_MESSAGE.DUPLICATED_ID }, { shouldFocus: true });
      setDuplicatedNickname(true);
    }
  };

  const checkNickname = async (e) => {
    const {
      target: { value },
    } = e;
    if (errors?.nickname?.type === 'pattern' || !value || value.length < STANDARD.NAME_MIN_LENGTH)
      return;
    try {
      const response = await getData(userApis.NICKNAME_DUPLICATE_CHECK_API(value));
      if (response.status === 200) {
        setDuplicatedNickname(false);
      }
    } catch {
      setError('nickname', { message: REGISTER_MESSAGE.DUPLICATED_ID }, { shouldFocus: true });
      setDuplicatedNickname(true);
    }
  };

  const onChagneNickname = async (value) => {
    debounceCheckNickname(value);
  };
  const debounceCheckNickname = debounce(async (value) => await checkNickname(value));

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div>
        <ActiveInput active={true}>
          <input
            name="nickname"
            id="nickname"
            type="text"
            autoComplete="off"
            maxLength={STANDARD.NAME_MAX_LENGTH}
            minLength={STANDARD.NAME_MIN_LENGTH}
            {...register('nickname', {
              required: REGISTER_MESSAGE.REQUIRED_NICKNAME,
              minLength: {
                value: STANDARD.NAME_MIN_LENGTH,
                message: REGISTER_MESSAGE.NICKNAME_LENGTH,
              },
              maxLength: {
                value: STANDARD.NAME_MAX_LENGTH,
                message: REGISTER_MESSAGE.ID_LENGTH,
              },
              pattern: {
                value: REGEX.NICKNAME,
                message: REGISTER_MESSAGE.NICKNAME_STANDARD,
              },
              onChange: (e) => onChagneNickname(e),
            })}
            placeholder=" "
            required
          />
          <label htmlFor="nickname">닉네임</label>
        </ActiveInput>
        <MessageWrapper>
          <WarningMessage>{errors?.nickname?.message}</WarningMessage>
        </MessageWrapper>
        <InputContainer>
          <ActiveInput active={true}>
            <input
              name="address"
              id="address"
              type="text"
              value={address}
              onChange={handleInput}
              {...register('address', {
                required: REGISTER_MESSAGE.REQUIRED_ADDRESS,
              })}
              placeholder=" "
              required
            />
            <label htmlFor="address">주소</label>
          </ActiveInput>
          <MintButton text={'찾기'} type={'button'} onClick={togglePostCode} />
        </InputContainer>
        <div id="popupDom">
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode onClose={closePostCode} setAddress={setAddress} />
            </PopupDom>
          )}
        </div>
        <MessageWrapper>
          <WarningMessage>{errors?.pwd?.message}</WarningMessage>
        </MessageWrapper>
        <ActiveInput active={true}>
          <input
            name="addressDetail"
            id="addressDetail"
            type="text"
            {...register('addressDetail')}
            placeholder=" "
          />
          <label htmlFor="addressDetail">상세주소</label>
        </ActiveInput>
        <MessageWrapper></MessageWrapper>

        <StepSignal step={'register3'} />
        <GradientButton text={'회원가입'} />
      </div>
    </form>
  );
}

export default Register3;

export const WarningMessage = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.pointRed};
`;

export const MessageWrapper = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
`;
