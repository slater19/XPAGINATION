import React, { useEffect, useState } from "react";
import './PAGINATION.css';


const Pagination = ({postsPerPage,length,setCurrentPage,currentPage}) => {
    
    const PageNumbers = []
    
    
        

    const getPrevious  = () => {
        if (PageNumbers.includes(currentPage  - 1)) {
    setCurrentPage(currentPage - 1);}
    // paginate(currentPage - 1);
    }
    const getNext  = () => {
        if (PageNumbers.includes(currentPage  + 1)) {
        setCurrentPage(currentPage + 1);
        // paginate(currentPage + 1);
    }}
        

        for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
            PageNumbers.push(i);
        }

        return (
            <nav>
            <ul className="pagination">
            <li>
                 <a className="btn"onClick={() => {
                 getPrevious()   
                }}>
                    Previous 
                </a>
                </li>
                    <li  className="btn">
                         {currentPage} 
                        
                    </li>
                <li >
                <a className="btn"onClick={() => {
                    getNext()  
                }}>Next
                </a></li>
            </ul>
        </nav>
        );
    };
    export default Pagination;