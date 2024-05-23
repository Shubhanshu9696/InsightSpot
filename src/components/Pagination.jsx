import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import "./Pagination.css"

export const Pagination = () => {

  const {page, handlePageChange, totalPage} = useContext(AppContext);

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
          {page > 1 && (
            <button 
              onClick={() => handlePageChange(page - 1)} 
              style={{
                padding: '10px 20px',
                border: 'none',
                backgroundColor: 'gray',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'gray'}
            >
              Previous
            </button>
          )}
          {page < totalPage && (
            <button 
              onClick={() => handlePageChange(page + 1)} 
              style={{
                padding: '10px 20px',
                border: 'none',
                backgroundColor: 'gray',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'gray'}
            >
              Next
            </button>
          )}
        </div>
        <p>Page {page} of {totalPage}</p>
      </div>
    </div>
  )
}
