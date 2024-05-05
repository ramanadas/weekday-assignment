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
      <CardContent style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
        <img src={logoUrl} alt="logo" style={{ width: '60px', marginRight: '10px', borderRadius: '50%' }} />
        <div style={{ flex: '1' }}>
          <Typography variant="body1" component="h2">{companyName}</Typography>
          <Typography variant="h5" component="p">{jobRole}</Typography>
          <Typography variant="body2" component="p">{location}</Typography> {/* Reduced whitespace */}
        </div>
      </CardContent>
      <CardContent style={{ marginBottom: 0 }}>
        <Typography variant='body2' component="p">Estimated Salary: {minJdSalary} - {maxJdSalary} {salaryCurrencyCode} ✅</Typography>
      </CardContent>

      <CardContent style={{ marginBottom: 0 }}>
        <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: 0 }}>
          <div><b>About Company:</b></div>
          {expanded ? fullDescription : initialDescription}
        </Typography>
        {!expanded && (
          <div style={{ textAlign: 'center', marginTop: '8px', position: 'relative' }}>
            <Button size="small" onClick={handleOpenModal} style={{ backgroundColor: 'transparent', color: 'blue', borderRadius: '0', textTransform: 'none', padding: 0, position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
              View Job
            </Button>
          </div>
        )}
      </CardContent>


      <CardContent style={{ paddingTop: 0 }}>
        <Typography variant="body2" component="p">Minimum Experience: {minExp} years</Typography>
      </CardContent>
      <CardActions style={{ paddingTop: 0 }}>
        <Button size="small" variant="contained" style={{ borderRadius: '12px', backgroundColor: 'rgb(85, 239, 196)', color: 'black', fontWeight: 'bold', width: '100%', padding: '12px' }} href={jdLink} target="_blank" rel="noopener noreferrer">
          ⚡ Easy Apply
        </Button>
      </CardActions>
      <FullDescriptionModal open={modalOpen} handleClose={handleCloseModal} fullDescription={fullDescription} />
    </Card>
  );
};

export default JobCard;
