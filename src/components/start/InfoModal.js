import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, FormControlLabel, TextField, Radio, FormControl, FormLabel, RadioGroup } from '@mui/material';

const styled = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
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
    };

    return (
    <>
      <Button onClick={handleOpen}>점심 찾으러 가기!</Button>

      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">

        <Box sx={styled}>
          <Button variant='outlined'style={{float: 'right'}} onClick={handleClose}>창 닫기</Button>
          <Typography id="modal-modal-title" variant="h5" component="h2">주소 입력</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="roadLocation" control={<Radio/>} label="도로명주소" onChange={rLocation} checked/>
                <FormControlLabel value="buildingLocation" control={<Radio/>} label="건물이름" onChange={bLocation} />
              </RadioGroup>
            </FormControl>

            <TextField 
            fullWidth
            required
            autoFocus
            id='location'
            label='Location'
            type='text'
            variant='outlined'
            style={{marginBottom : '20px'}}
            onChange={handleChange}
            />
            </Typography>

            <Typography id="modal-modal-title" variant="h5" component="h2">카테고리 설정</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            </Typography>

            <br/>
            <Button type='submit' variant='contained' color='primary' style={{float: 'right'}}>검색시작</Button>
          </Box>
      </Modal>
    </>
    );
};

export default InfoModal;