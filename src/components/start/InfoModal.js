import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, FormControlLabel, TextField, Radio, FormControl, FormLabel, RadioGroup } from '@mui/material';
import TagButton from '../tag/TagButton';


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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [typeLoc, setTypeLoc] = useState();
    const rLocation = () => setTypeLoc('road');
    const bLocation = () => setTypeLoc('build');

    const [values, setValues] = useState();
    const handleChange = (e) => {
      const location = e.target.value;
      setValues(location);
      console.log(values);
    };

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
            style={{paddingBottom: '10px'}}>주소 입력</Typography>
            {/* 라디오 그룹 시작 */}
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="roadLocation"
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
              <TagButton category='한식'/>

              <br/>
              <Button 
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