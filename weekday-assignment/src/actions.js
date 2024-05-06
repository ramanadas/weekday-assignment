// actions.js
export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
    payload: jobs,
});

export const setFilters = (filters) => ({
    type: 'SET_FILTERS',
    payload: filters,
});

export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload: loading,
});

export const setTotalCount = (totalCount) => ({
    type: 'SET_TOTAL_COUNT',
    payload: totalCount,
});
