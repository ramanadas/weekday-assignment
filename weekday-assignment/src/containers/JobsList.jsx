import { useEffect, useState } from "react";
import { fetchJobs } from "../api/JobsApi";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";

const JobsList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jobsData = await fetchJobs(0, 10);
                setJobs(jobsData.jdList);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Grid container spacing={2} justifyContent="center">
            {jobs.map((job, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <JobCard job={job} />
                </Grid>
            ))}
        </Grid>
    );
};

export default JobsList;
