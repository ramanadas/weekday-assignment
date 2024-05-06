import React, { useEffect, useState } from "react";
import { fetchJobs } from "../api/JobsApi";
import JobCard from "../components/JobCard";
import { Grid, TextField, Button, Typography } from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress";
import FilterPanel from "../components/FilterPanel"
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setLoading, setTotalCount, setJobs } from '../actions';


const JobsList = () => {
    const jobs = useSelector(state => state.jobs)
    const [offset, setOffset] = useState(0);
    const totalCount = useSelector(state => state.totalCount);
    const loading = useSelector(state => state.loading);
    const filters = useSelector(state => state.filters);

    const [filteredJobs, setFilteredJobs] = useState(jobs);

    const handleFilterChange = (newFilters) => {
        dispatch(setFilters(newFilters))
    };
    const dispatch = useDispatch();
    const applyFilters = () => {
        // Filter jobs based on the provided filters
        const filteredJobs = jobs.filter(job => {
            // Check if any filter property is null, and return false if any filter property is null
            for (const key in filters) {
                if (filters[key] === null) {
                    return false;
                }
            }

            for (const key in job) {
                if (filters[key] === null) {
                    return false;
                }
            }

            // Filter by companyName
            if (filters.companyName !== '' && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) {
                return false;
            }

            // Filter by minExperience
            if (filters.minExperience !== '' && (job.minExp > parseInt(filters.minExperience) || job.maxExp < parseInt(filters.minExperience))) {
                return false;
            }

            // Filter by location
            if (filters.location !== '' && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
                return false;
            }

            // Filter by remote
            if (filters.remote !== false && job.location.toLowerCase() !== 'remote') {
                return false;
            }

            // Filter by techStack
            // if (filters.techStack !== '' && job.techStack.toLowerCase() !== filters.techStack.toLowerCase()) {
            //     return false;
            // }

            // Filter by role
            if (filters.role !== '' && !job.jobRole.toLowerCase().includes(filters.role.toLowerCase())) {
                return false;
            }

            // Filter by minBasePay
            if (filters.minBasePay !== '' && parseInt(job.minBasePay) <= parseInt(filters.minBasePay)) {
                return false;
            }

            // If all filter conditions pass, return true
            return true;
        });

        // Set the filtered jobs
        setFilteredJobs(filteredJobs);
    };

    useEffect(() => {
        applyFilters();
    }, [jobs, filters])

    useEffect(() => {
        dispatch(setLoading(true));
    }, [filteredJobs])

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setLoading(true));
                const jobsData = await fetchJobs(offset, 10); // Fetch 10 jobs at a time
                dispatch(setJobs([...jobs, ...jobsData.jdList]));
                dispatch(setTotalCount(jobsData.totalCount));
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                dispatch(setLoading(false))
            }
        };

        fetchData();
    }, [offset]); // Fetch data whenever the offset changes

    // Function to handle scroll events
    const handleScroll = () => {
        const bottom =
            Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
            document.documentElement.offsetHeight;

        if (bottom && jobs.length < totalCount && !loading) {
            dispatch(setLoading(true));
            setOffset((prevOffset) => prevOffset + 10); // Increment offset to fetch next batch of jobs
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [jobs, totalCount]); // Listen for scroll events when jobs or totalCount changes

    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <FilterPanel onFilterChange={handleFilterChange} filters={filters} />
                </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="center">
                {filteredJobs.map((job, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <JobCard job={job} />
                    </Grid>
                ))}
            </Grid>
            {jobs.length < totalCount && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <CircularProgress />
                </div>
            )}
        </>

    );
};

export default JobsList;
