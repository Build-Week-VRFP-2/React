import { axiosWithAuth } from "../utils/axiosWIthAuth";


export const FetchProjects = (id) => dispatch => {
  dispatch ({ type: "GETPROJ" });
  axiosWithAuth()
  .get(`/api/applicant/${id}/projects`)
  .then(res => {
    console.log(res);
    dispatch({ type: "SUCCESS", payload: res.data });
  })
  .catch((err) => console.log(err.response));
};



export const postProject = (id, data) => {
  axiosWithAuth()
  .post(`/api/applicant/${id}/project`, data)
  .then(res => {
    console.log(res);
  })
  .catch((err) => console.log(err.response));

}



// export const getprojects = () => dispatch => {
//   dispatch ({ type: "GETPROJECTS" });
//   axiosWithAuth()
//     .get(`/api/applicants/projects`)
//     .then(res => {
//       console.log(res.data);
//       dispatch({ type: "SUCCESS", payload: res.data });
//     })
//     .catch(err => console.error(err));
// };




