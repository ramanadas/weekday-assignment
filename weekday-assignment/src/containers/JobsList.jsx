import React, { useEffect, useState } from "react";
import { fetchJobs } from "../api/JobsApi";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const JobsList = () => {
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const jobsData = await fetchJobs(offset, 10); // Fetch 10 jobs at a time
                setJobs((prevJobs) => [...prevJobs, ...jobsData.jdList]);
                setTotalCount(jobsData.totalCount);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
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
        setLoading(true); // Set loading to true when bottom of page is reached and not already loading
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
                {jobs.map((job, index) => (
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
