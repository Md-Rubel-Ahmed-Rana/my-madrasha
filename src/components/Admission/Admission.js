import React, { useContext } from 'react';
import "./Admission.css"
import { Link } from 'react-router-dom';
import { totalStudentInfo } from '../../App';

const Admission = () => {
    const { teachers, totalStudent, newStudent, totalRejected, totalSeet } = useContext(totalStudentInfo)
    return (
        <div className='admission'>
           <div className='sidebar'>
                <Link to="/total">Total Admitted</Link>
                <Link to="/new">New Student</Link>
                <Link to="/edit">Update</Link>
           </div>
           <div className='admit-form'>
            <form onSubmit={(e) => e.preventDefault()}>
                <h4 className='text-white'>Fill up this form</h4>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="email">
                    Email:
                        <input type="text" name="email" id="email" />
                </label>
                <label htmlFor="address">
                    Address:
                        <input type="text" name="address" id="address" />
                </label>
                    <label htmlFor="phone">
                    Phone:
                        <input type="number" name="phone" id="phone" />
                </label>
                <button className='border-0 py-2 px-5 rounded fw-bold' type="submit">Submit</button>
            </form>
           </div>
           <div className='bg-dark text-white p-4 text-start'>
            <h4>Teachers: {teachers}</h4>
            <h4>Total Student: {totalStudent}</h4>
            <h4>New Student: {newStudent}</h4>
            <h4>Total rejected: {totalRejected}</h4>
            <h4>Total Seet: {totalSeet}</h4>
           </div>
        </div>
    );
};

export default Admission;