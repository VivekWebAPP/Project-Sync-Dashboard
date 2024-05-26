import React, { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { action } from '../../redux';
import Context from '../../context/ContextAPI';
import Team from './index';


const EditingTable = () => {
    const ref = useRef(null);
    const context = useContext(Context);
    const { typeOfUser, authData, typeOfPlaceholderBasedOnTypeOfUser } = context;
    const typeUser = typeOfUser();
    const typeOfPlaceholderBasedOnUser = typeOfPlaceholderBasedOnTypeOfUser();
    const dispatch = useDispatch();
    const [StatusOfTheProject, setStatusOfTheProject] = useState('');
    const [Priority, setPriority] = useState('');
    let updationId = '';
    const typeOfUse = authData.profession;

    const [previousData, setpreviousData] = useState({
        CompanyName: '',
        ProjectName: '',
        ProjectType: '',
        ProjectPrice: 0,
        FromDate: '',
        ToDate: '',
        StatusOfTheProject: StatusOfTheProject,
        Location: '',
        Priority: Priority,
    });


    const onClickUpdate = (id) => {
        ref.current.click();
        updationId = id;
    };

    const handleChangeForStatusOfProject = (name) => {
        setStatusOfTheProject(name);
    };

    const handleOnChange = (event) => {
        setpreviousData({ ...previousData, [event.target.name]: event.target.value });
    }

    const handleChangePriority = (event) => {
        setPriority(event.target.value);
    };

    const onSubmit = () => {
        previousData.StatusOfTheProject = StatusOfTheProject;
        previousData.Priority = Priority;
        previousData.FromDate = previousData.FromDate.toString(previousData.FromDate);
        previousData.ToDate = previousData.ToDate.toString(previousData.ToDate);
        let token = localStorage.getItem('jwtToken');
        console.log(previousData);
        if (typeOfUse === 'Employer') {
            dispatch(action.UpdateEmployeerProject(token, updationId, previousData.CompanyName, previousData.ProjectName, previousData.ProjectType, previousData.ProjectPrice, previousData.FromDate, previousData.ToDate, previousData.StatusOfTheProject, previousData.Location, previousData.Priority));
        }
        else if (typeOfUse === 'Employee') {
            dispatch(action.UpdateEmployeeProject(token, updationId, previousData.CompanyName, previousData.ProjectName, previousData.ProjectType, previousData.ProjectPrice, previousData.FromDate, previousData.ToDate, previousData.StatusOfTheProject, previousData.Location, previousData.Priority));
        }
        else if (typeOfUse === "Teacher") {
            dispatch(action.UpdateTeacherProject(token, updationId, previousData.CompanyName, previousData.ProjectName, previousData.ProjectType, previousData.ProjectPrice, previousData.FromDate, previousData.ToDate, previousData.StatusOfTheProject, previousData.Location, previousData.Priority));
        }
        else if (typeOfUse === "Student") {
            dispatch(action.UpdateStudentProject(token, updationId, previousData.CompanyName, previousData.ProjectName, previousData.ProjectType, previousData.ProjectPrice, previousData.FromDate, previousData.ToDate, previousData.StatusOfTheProject, previousData.Location, previousData.Priority));
        }
    };
    return (
        <>
            {<div>
                <button type="button" ref={ref} style={{ display: "none" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form style={{color:'black'}}>
                                    <h6>{typeUser.HeadPersion}<span style={{ color: "red" }}>*</span></h6>
                                    <input type='text' className='label' required placeholder={typeOfPlaceholderBasedOnUser.HeadPersion} style={{ borderRadius: "10px", height: "40px", width: "90%", padding: "10px" }} name='CompanyName' value={previousData.CompanyName} onChange={handleOnChange} />

                                    <h6 style={{ marginTop: "20px" }}>{typeUser.WorkName} <span style={{ color: "red" }}>*</span></h6>
                                    <input type='text' className='Amount' placeholder={typeOfPlaceholderBasedOnUser.WorkName} style={{ borderRadius: "10px", height: "40px", width: "90%", padding: "10px", marginBottom: "20px" }} name='ProjectName' value={previousData.ProjectName} onChange={handleOnChange} />

                                    <h6>{typeUser.WorkType}<span style={{ color: "red" }}>*</span></h6>
                                    <input type='text' className='label' required placeholder={typeOfPlaceholderBasedOnUser.WorkType} style={{ borderRadius: "10px", height: "40px", width: "90%", padding: "10px" }} name='ProjectType' value={previousData.ProjectType} onChange={handleOnChange} />

                                    <h6 style={{ marginTop: "20px" }}>{typeUser.ProjectPrice} <span style={{ color: "red" }}>*</span></h6>
                                    <input type='number' className='Amount' placeholder={typeOfPlaceholderBasedOnUser.ProjectPrice} style={{ borderRadius: "10px", height: "40px", width: "90%", padding: "10px", marginBottom: "20px" }} name='ProjectPrice' value={previousData.ProjectPrice} onChange={handleOnChange} />

                                    <h6>{typeUser.FromDate}<span style={{ color: "red" }}>*</span></h6>
                                    <input type="date" name="FromDate" value={previousData.FromDate} onChange={handleOnChange} id="fromDate" style={{ borderRadius: "10px", height: "40px", width: "90%", padding: "10px" }} />

                                    <h6 style={{ marginTop: "20px" }}>{typeUser.ToDate}<span style={{ color: "red" }}>*</span></h6>
                                    <input type='date' className='To Date' placeholder='Ex: DD/MM/YY' style={{ borderRadius: "10px", height: "40px", width: "90%", padding: "10px", marginBottom: "20px" }} name='ToDate' value={previousData.ToDate} onChange={handleOnChange} />

                                    <h6>{typeUser.StatusOfTheWork}<span style={{ color: "red" }}>&nbsp;*</span></h6>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Option
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><p className="dropdown-item" onClick={() => handleChangeForStatusOfProject('Just Started')}>Just Started</p></li>
                                            <li><p className="dropdown-item" onClick={() => handleChangeForStatusOfProject('On Going')}>On Going</p></li>
                                            <li><p className="dropdown-item" onClick={() => handleChangeForStatusOfProject('About to finish')}>About to finish</p></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><p className="dropdown-item" onClick={() => handleChangeForStatusOfProject('Finished')}>Finished</p></li>
                                        </ul>
                                    </div>

                                    <h6 style={{ marginTop: "20px" }}>{typeUser.Location}<span style={{ color: "red" }}>&nbsp;*</span></h6>
                                    <input type='text' className='Amount' placeholder={typeOfPlaceholderBasedOnUser.Location} style={{ borderRadius: "10px", height: "40px", width: "90%", padding: "10px", marginBottom: "20px" }} name='Location' value={previousData.Location} onChange={handleOnChange} />

                                    <h6>{typeUser.Priority}<span style={{ color: "red" }}>&nbsp;*</span></h6>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Option
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><p className="dropdown-item" onClick={() => handleChangePriority('Low')}>Low</p></li>
                                            <li><p className="dropdown-item" onClick={() => handleChangePriority('Medium')}>Medium</p></li>
                                            <li><p className="dropdown-item" onClick={() => handleChangePriority('High')}>High</p></li>
                                            <li><hr className="dropdown-divider" /></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Team onClickUpdate={onClickUpdate} />
            </div>}
        </>
    )
}

export default EditingTable
