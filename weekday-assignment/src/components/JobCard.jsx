import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FullDescriptionModal from './FullDescriptionModal';

const JobCard = ({ job }) => {
  const {
    companyName,
    jobRole,
    location,
    minExp,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    logoUrl,
    jdLink,
    jobDetailsFromCompany,
  } = job;

  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const initialDescription = jobDetailsFromCompany.split(' ').slice(0, 100).join(' ');
  const fullDescription = jobDetailsFromCompany;

  return (
    <Card style={{ borderRadius: 20, margin: 'auto', maxWidth: 600 }}>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoUrl} alt="logo" style={{ width: '60px', marginRight: '10px', borderRadius: '50%' }} />
        <div style={{ flex: '1' }}>
          <Typography variant="h6" component="h2">{companyName}</Typography>
          <Typography variant="body1" component="p">{jobRole} - {location}</Typography>
        </div>
      </CardContent>
      <CardContent>
        <Typography variant='body1' component="p">Estimated Salary: {minJdSalary} - {maxJdSalary} {salaryCurrencyCode} ✅</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {expanded ? fullDescription : initialDescription}
          {!expanded && (
            <Button size="small" onClick={handleOpenModal} style={{ marginLeft: 'auto', borderRadius: '50%' }}>
              <ExpandMoreIcon />
            </Button>
          )}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" component="p">Minimum Experience: {minExp} years</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" style={{ borderRadius: '12px', backgroundColor: 'rgb(85, 239, 196)', color: 'black', fontWeight: 'bold', width: '100%', padding: '12px' }}>⚡ Easy Apply</Button>
      </CardActions>
      <FullDescriptionModal open={modalOpen} handleClose={handleCloseModal} fullDescription={fullDescription} />
    </Card>
  );
};

export default JobCard;
