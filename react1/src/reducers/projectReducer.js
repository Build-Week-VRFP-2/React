

const initialState = {
  isLoading: false,
  projects: [],
  allProjects: [],
  project: [],
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPROJ":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };

    case "GETALLPROJECTS":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESSALL":
      return {
        ...state,
        isLoading: false,
        allProjects: action.payload,
      };

    case "GETPROJECT":
      return {
        ...state,
        isLoading: true,
      };

    case "SUCCESSONE":
      return {
        ...state,
        isLoading: false,
        project: action.payload,
      };

    case "":
      return {};

    default:
      return state;
  }
};
