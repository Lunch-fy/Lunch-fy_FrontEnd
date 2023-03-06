import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, FormControlLabel, TextField, Radio, FormControl, FormLabel, RadioGroup, FormGroup } from '@mui/material';
import TagCheck from '../tag/TagCheck';
import { useNavigate } from 'react-router-dom';

//모달 스타일 (구글이 시키는대로 함)
const styled = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const InfoModal = () => {
    // 페이지 간의 값 이동
    const navigate = useNavigate();
    //모달 끄고 키는거
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //도로인지 빌딩인지 확인하는거
    const [typeLoc, setTypeLoc] = useState('');
    const rLocation = () => setTypeLoc('?location=');
    const bLocation = () => setTypeLoc('?key=');

    //textField에 들어간 값 확인 체크
    const [values, setValues] = useState('');
    const handleChange = (e) => {
      const location = e.target.value;
      setValues(location);
      console.log(values);
    };

    //checkBox 값 확인
    //set 배열 선언
    const categorySetArr = new Set(); 
    //컴포넌트에 props로 add 함수를 보냄, TagCheck.js 파일에 if(checked === true 일 경우 함수 사용.)
    const addCategory = (category) => {
      categorySetArr.add(category)
      console.log(categorySetArr)
    }
    //컴포넌트에 props로 add 함수를 보냄, TagCheck.js 파일에 if(checked === false 일 경우 함수 사용.)
    const popCategory = (category) =>{
      categorySetArr.delete(category)
      console.log(categorySetArr)
    }
    // 검색 버튼 함수
    const onClickSearchStart = () => {
      const rndKey = Math.floor(Math.random() * categorySetArr.size);
      // set은 값 참조가 안되는듯.. 십련..
      const categoryArr = Array.from(categorySetArr);
      const searchQurey = typeLoc + values + '&tag=' + categoryArr[rndKey];
      const moveValue = () => {
        navigate("/searchResults", {state: {values: searchQurey}})
      };
      moveValue();
    }
    return (
    <>
      {/* 모달 띄우는 버튼 */}
      <Button 
      variant='contained'
      color='error'
      style={{
        width: '250px',
        height: '80px',
        fontSize: '35px',
        fontFamily: 'Fredoka One',
      }}
      onClick={handleOpen}>Lunch-fy!</Button>

      {/* 모달 시작 */}
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styled}>
          <Button variant='outlined'style={{float: 'right'}} onClick={handleClose}>창 닫기</Button>

          {/* 모달 주소입력 부분 */}
          <Typography 
            id="modal-modal-title" 
            variant="h5"
            style={{marginBottom: '10px'}}>주소 입력</Typography>
            {/* 라디오 그룹 시작 */}
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{marginBottom: '10px'}}
              >
                <FormControlLabel value="roadLocation" control={<Radio/>} label="도로명주소" onChange={rLocation} />
                <FormControlLabel value="buildingLocation" control={<Radio/>} label="건물이름" onChange={bLocation} />
              </RadioGroup>
            </FormControl>
            {/* 라디오 그룹 끝 */}
            {/* 텍스트 필드 */}
            <TextField 
            fullWidth
            required
            autoFocus
            id='location'
            label='현재 위치'
            type='text'
            variant='outlined'
            style={{marginBottom : '20px'}}
            onChange={handleChange}
            />

            {/* 카테고리 설정 부분 */}
            <Typography 
              id="modal-modal-title" 
              variant="h5" 
              style={{paddingBottom: '20px'}}>카테고리 설정</Typography>
              <FormGroup style={{display: 'inline-block', marginBottom: "20px"}}>
                <TagCheck category='한식' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='족발' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='백반' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='쌈밥' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='국밥' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='불고기' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='삼계탕' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='찜닭' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='보쌈' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='찌개' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='비빔밥' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='국수' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='냉면' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='일식' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='돈까스' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='라멘' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='초밥' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='샤브샤브' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='우동' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='중식' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='마라탕' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='쌀국수' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='분식' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='햄버거' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='샐러드' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='샌드위치' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='도시락' addCategory={addCategory} popCategory={popCategory}/>
                <TagCheck category='치킨' addCategory={addCategory} popCategory={popCategory}/>
              </FormGroup>
              <Button 
              onClick={onClickSearchStart}
              href='/searchResults'
              type='submit' 
              variant='contained' 
              color='primary' 
              style={{float: 'right'}}>검색시작</Button>
          </Box>
      </Modal>
    </>
    );
};

export default InfoModal;