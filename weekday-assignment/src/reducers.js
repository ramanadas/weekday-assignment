// reducers.js
const initialState = {
    jobs: [],
    filters: {
        minExperience: '',
        companyName: '',
        location: '',
        remote: false,
        techStack: '',
        role: '',
        minBasePay: '',
    },
    loading: false,
    totalCount: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload,
            };
        case 'SET_FILTERS':
            return {
                ...state,
                filters: action.payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
