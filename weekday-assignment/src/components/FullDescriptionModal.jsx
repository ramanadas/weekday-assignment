import React from 'react';
import { Modal, Typography, Button } from '@mui/material';

const FullDescriptionModal = ({ open, handleClose, fullDescription }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '80vw', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
        <Typography variant="body2"><b>About Job:</b> {fullDescription}</Typography>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default FullDescriptionModal;
