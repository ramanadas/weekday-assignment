import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';

const FilterPanel = ({ filters, onFilterChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFilters = { ...filters, [name]: value };
    onFilterChange(newFilters);
  };
  const defaultFilter = {
    minExperience: '',
    companyName: '',
    location: '',
    remote: false,
    techStack: '',
    role: '',
    minBasePay: '',
}
  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel>Exp</InputLabel>
          <Select
            name="minExperience"
            value={filters.minExperience}
            onChange={handleChange}
            size="small"
            style={{ minWidth: '50%', fontSize: '0.7rem' }}
          >
            <MenuItem value="">Exp</MenuItem>
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <TextField
          name="companyName"
          label="Company"
          placeholder="Company"
          value={filters.companyName}
          onChange={handleChange}
          variant="outlined"
          size="small"
          fullWidth
          style={{ fontSize: '0.7rem' }}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <TextField
          name="location"
          label="Location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          variant="outlined"
          size="small"
          fullWidth
          style={{ fontSize: '0.7rem' }}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <FormControl variant="outlined" fullWidth size="small">
          <Select
            name="remote"
            value={filters.remote}
            onChange={handleChange}
            size="small"
            style={{ minWidth: '50%', fontSize: '0.7rem' }}
          >
            <MenuItem value="">Remote</MenuItem>
            <MenuItem value={true}>Remote</MenuItem>
            <MenuItem value={false}>Not Remote</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel>Tech</InputLabel>
          <Select
            name="techStack"
            value={filters.techStack}
            onChange={handleChange}
            size="small"
            style={{ minWidth: '50%', fontSize: '0.7rem' }}
          >
            <MenuItem value="">Tech</MenuItem>
            <MenuItem value="React">React</MenuItem>
            <MenuItem value="Angular">Angular</MenuItem>
            <MenuItem value="Vue">Vue</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <TextField
          name="role"
          placeholder="Role"
          value={filters.role}
          onChange={handleChange}
          variant="outlined"
          size="small"
          fullWidth
          style={{ fontSize: '0.7rem' }}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel>Base Pay</InputLabel>
          <Select
            name="minBasePay"
            value={filters.minBasePay}
            onChange={handleChange}
            size="small"
            style={{ minWidth: '50%', fontSize: '0.7rem' }}
          >
            <MenuItem value="">Base Pay</MenuItem>
            <MenuItem value="10000">$10K</MenuItem>
            <MenuItem value="20000">$20K</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Button onClick={() => onFilterChange(defaultFilter)} variant="contained" size="small" fullWidth>Clear</Button>
      </Grid>
    </Grid>
  );
};

export default FilterPanel;
