import React from 'react';
import Loader from '../../Images/WorkingChart.gif';

const TableEntryLoader = () => {
  return (
    <>
        <div className="container d-flex flex-row flex-wrap justify-content-center align-items-center">
            <img src={Loader} alt="LoaderImage" width="500px" height="500px"/>
        </div>
    </>
  )
}

export default TableEntryLoader
