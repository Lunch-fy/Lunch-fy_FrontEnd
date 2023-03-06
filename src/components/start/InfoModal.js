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

    const [loca, setLoca] = useState();
    const rLocation = () => setLoca('road');
    const bLocation = () => setLoca('build');

    return (
    <>
      <Button onClick={handleOpen}>점심 찾으러 가기!</Button>

      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">

        <Box sx={styled}>
          <Button variant='text'style={{float: 'right'}} onClick={handleClose}>창 닫기</Button>
          <Typography id="modal-modal-title" variant="h5" component="h2">주소 입력</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="roadLocation" control={<Radio/>} label="도로명주소" onChange={rLocation} />
                <FormControlLabel value="buildingLocation" control={<Radio/>} label="건물이름" onChange={bLocation} />
              </RadioGroup>
            </FormControl>
            <TextField 
            fullWidth
            label='도로명 주소'
            variant='outlined'
            style={{marginBottom : '20px'}}
            />
            <TextField 
            fullWidth
            label='건물 이름'
            variant='outlined'
            style={{marginBottom : '20px'}}
            />
            </Typography>

            <Typography id="modal-modal-title" variant="h5" component="h2">카테고리 설정</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button variant='contained'>헉</Button>
              <Button variant='contained'>헉</Button>
              <Button variant='contained'>헉</Button>
              <Button variant='contained'>헉</Button>
              <Button variant='contained'>헉</Button>
            </Typography>
          </Box>
      </Modal>
    </>
    );
};

export default InfoModal;