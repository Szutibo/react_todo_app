import React from 'react'

const TodosPage = ({selectedUser}) => {


  return (
    <div>
        <div>
        {selectedUser.userName}, {selectedUser.id}
        </div>
    </div>
  )
}

export default TodosPage;