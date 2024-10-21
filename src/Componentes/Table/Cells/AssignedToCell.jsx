import React from 'react'

const AssignedToCell = ({row}) => {
     

    return (
      <span onClick={ () => console.log( row.original.assignedTo )
                  }>
            { row.original.assignedTo === "" ? "Not Assigned" : row?.original?.assignedTo?.slice( 0, 1 ) }
        
        </span>
  )
}

export default AssignedToCell