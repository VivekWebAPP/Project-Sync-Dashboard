import { useDispatch } from "react-redux";
import { useContext } from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import { Helmet } from 'react-helmet';
import Context from "../../context/ContextAPI";
import { action } from '../../redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Team = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const context = useContext(Context);
  const { fetchProjects, usersType } = context;
  let data = fetchProjects;
  const token = localStorage.getItem('jwtToken');

  const onClickDelete = (token, id) => {
    if (usersType === 'Employer') {
      dispatch(action.DeleteEmployeerProject(token, id));
    }
    else if (usersType === 'Employee') {
      dispatch(action.DeleteEmployeeProject(token, id));
    }
    else if (usersType === 'Teacher') {
      dispatch(action.DeleteTeacherCourse(token, id));
    }
    else if (usersType === 'Student') {
      dispatch(action.DeleteStudentAssignment(token, id));
    }
    window.location.reload()
  }

  // const employer = [
  //   { field: "_id", headerName: "ID" },
  //   {
  //     field: "CompanyName",
  //     headerName: "Company Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "ProjectName",
  //     headerName: "Project Name",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "ProjectPrice",
  //     headerName: "Project Price",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "FromDate",
  //     headerName: "From Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "ToDate",
  //     headerName: "To Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "StatusOfTheProject",
  //     headerName: "Status Of The Project",
  //     flex: 1.5,
  //   },
  //   {
  //     field: "Location",
  //     headerName: "Location",
  //     flex: 1,
  //   },
  //   {
  //     field: "Priority",
  //     headerName: "Priority",
  //     flex: 1,
  //   },
  //   {
  //     field: 'Edit',
  //     headerName: 'Edit',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-success">Edit</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: 'Delete',
  //     headerName: 'Delete',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-danger">Delete</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   }
  // ];

  // const Employee = [
  //   { field: "_id", headerName: "ID" },
  //   {
  //     field: "ProjectManagerName",
  //     headerName: "Project Manager Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "ProjectName",
  //     headerName: "Project Name",
  //     headerAlign: "left",
  //     align: "left",
  //   },  
  //   {
  //     field: "FromDate",
  //     headerName: "From Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "ToDate",
  //     headerName: "To Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "StatusOfTheProject",
  //     headerName: "Status Of The Project",
  //     flex: 1.5,
  //   },
  //   {
  //     field: "Location",
  //     headerName: "Location",
  //     flex: 1,
  //   },
  //   {
  //     field: "Priority",
  //     headerName: "Priority",
  //     flex: 1,
  //   },
  //   {
  //     field: 'Edit',
  //     headerName: 'Edit',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-success">Edit</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: 'Delete',
  //     headerName: 'Delete',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-danger">Delete</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   }
  // ];

  // const Teacher = [
  //   { field: "_id", headerName: "ID" },
  //   {
  //     field: "CourseName",
  //     headerName: "Course Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "NoOfStudentEnrolled",
  //     headerName: "No Of Student Enrolled",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "FromDate",
  //     headerName: "From Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "ToDate",
  //     headerName: "To Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "StatusOfTheCourse",
  //     headerName: "Status Of The Course",
  //     flex: 1.5,
  //   },
  //   {
  //     field: "OverallGradesInTheCourse",
  //     headerName: "Overall Grades In The Course",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "Priority",
  //     headerName: "Priority",
  //     flex: 1,
  //   },
  //   {
  //     field: 'Edit',
  //     headerName: 'Edit',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-success">Edit</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: 'Delete',
  //     headerName: 'Delete',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-danger">Delete</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   }
  // ];

  // const Student = [
  //   { field: "_id", headerName: "ID" },
  //   {
  //     field: "TeacherName",
  //     headerName: "Teacher Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "AssignmentName",
  //     headerName: "Assignment Name",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "FromDate",
  //     headerName: "From Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "ToDate",
  //     headerName: "To Date",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "StatusOfTheAssignment",
  //     headerName: "Status Of The Assignment",
  //     flex: 1.5,
  //   },
  //   {
  //     field: "Grades",
  //     headerName: "Grades",
  //     flex: 1,
  //   },
  //   {
  //     field: "Priority",
  //     headerName: "Priority",
  //     flex: 1,
  //   },
  //   {
  //     field: 'Edit',
  //     headerName: 'Edit',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-success">Edit</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     field: 'Delete',
  //     headerName: 'Delete',
  //     flex: 1,
  //     renderCell: () => {
  //       return (
  //         <>
  //           <Helmet>
  //             <title>Team | ReactDashX</title>
  //           </Helmet>
  //           <Box
  //             width="60%"
  //             p="5px"
  //             display="flex"
  //             justifyContent="center"
  //             borderRadius="4px"
  //           >
  //             <button className="btn btn-danger">Delete</button>
  //           </Box>
  //         </>
  //       );
  //     },
  //   }
  // ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 40px 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Project Name</TableCell>
                <TableCell align="left">Project Type</TableCell>
                <TableCell align="left">From Date</TableCell>
                <TableCell align="left">To Date</TableCell>
                <TableCell align="left">Status Of The Project</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Priority</TableCell>
                <TableCell align="left">Edit</TableCell>
                <TableCell align="left">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersType === 'Employer' && data.map((ele) => (
                <TableRow
                  key={ele._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{ele.CompanyName}</TableCell>
                  <TableCell>{ele.ProjectName}</TableCell>
                  <TableCell>{ele.FromData}</TableCell>
                  <TableCell>{ele.ToDate}</TableCell>
                  <TableCell>{ele.StatusOfTheProject}</TableCell>
                  <TableCell>{ele.Location}</TableCell>
                  <TableCell>{ele.Priority}</TableCell>
                  <TableCell><button className="btn btn-success" onClick={() => { props.onClickUpdate(ele._id) }}><i className="bi bi-pencil-square"></i></button></TableCell>
                  <TableCell><button className="btn btn-danger" type="submit" onClick={() => onClickDelete(token, ele._id)}><i className="bi bi-trash"></i></button></TableCell>
                </TableRow>
              ))}
              {usersType === 'Employee' && data.map((ele) => (
                <TableRow
                  key={ele._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{ele.ProjectManagerName}</TableCell>
                  <TableCell>{ele.ProjectName}</TableCell>
                  <TableCell>{ele.FromData}</TableCell>
                  <TableCell>{ele.ToDate}</TableCell>
                  <TableCell>{ele.StatusOfTheProject}</TableCell>
                  <TableCell>{ele.Location}</TableCell>
                  <TableCell>{ele.Priority}</TableCell>
                  <TableCell><button className="btn btn-success" onClick={() => { props.onClickUpdate(ele._id) }}><i className="bi bi-pencil-square"></i></button></TableCell>
                  <TableCell><button className="btn btn-danger" type="submit" onClick={() => onClickDelete(token, ele._id)}><i className="bi bi-trash"></i></button></TableCell>
                </TableRow>
              ))}
              {usersType === 'Teacher' && data.map((ele) => (
                <TableRow
                  key={ele._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{ele.CourseName}</TableCell>
                  <TableCell>{ele.NoOfStudentEnrolled}</TableCell>
                  <TableCell>{ele.FromData}</TableCell>
                  <TableCell>{ele.ToDate}</TableCell>
                  <TableCell>{ele.StatusOfTheCourse}</TableCell>
                  <TableCell>{ele.OverallGradesInTheCourse}</TableCell>
                  <TableCell>{ele.Priority}</TableCell>
                  <TableCell><button className="btn btn-success" onClick={() => { props.onClickUpdate(ele._id) }}><i className="bi bi-pencil-square"></i></button></TableCell>
                  <TableCell><button className="btn btn-danger" type="submit" onClick={() => onClickDelete(token, ele._id)}><i className="bi bi-trash"></i></button></TableCell>
                </TableRow>
              ))}
              {usersType === 'Student' && data.map((ele) => (
                <TableRow
                  key={ele._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{ele.TeacherName}</TableCell>
                  <TableCell>{ele.AssignmentName}</TableCell>
                  <TableCell>{ele.FromData}</TableCell>
                  <TableCell>{ele.ToDate}</TableCell>
                  <TableCell>{ele.StatusOfTheAssignment}</TableCell>
                  <TableCell>{ele.Grades}</TableCell>
                  <TableCell>{ele.Priority}</TableCell>
                  <TableCell><button className="btn btn-success" onClick={() => { props.onClickUpdate(ele._id) }}><i className="bi bi-pencil-square"></i></button></TableCell>
                  <TableCell><button className="btn btn-danger" type="submit" onClick={() => onClickDelete(token, ele._id)}><i className="bi bi-trash"></i></button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Team;