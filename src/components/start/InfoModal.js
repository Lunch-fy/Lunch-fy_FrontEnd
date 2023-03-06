import React, { useState } from 'react';
import style from './InfoModal.css';
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
    const [location, setLocation] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <>
      <Button onClick={handleOpen}>점심 찾으러 가기!</Button>

      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">

        <Box sx={styled}>
          <Button variant='text'style={{float: 'right'}} onClick={handleClose}>창 닫기</Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">점심 찾기</Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="roadLocation" control={<Radio/>} label="도로명주소" />
                <FormControlLabel value="buildingLocation" control={<Radio/>} label="건물이름" />
              </RadioGroup>
            </FormControl>
            <TextField fullWidth label='도로명 주소' variant='outlined' className='textInput'></TextField>
            <TextField fullWidth label='건물 이름' variant='outlined'></TextField>
            </Typography>
          </Box>
      </Modal>
    </>
    );
};

export default InfoModal;