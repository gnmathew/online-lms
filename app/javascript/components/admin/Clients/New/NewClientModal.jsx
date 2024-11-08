import React from 'react'
import NewClientForm from './NewClientForm';

const ClientModalForm = ({handleChangeNew, submitNewForm, newClient, selectedTab}) => {

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create New User</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
              <div className="modal-body">
                <NewClientForm
                handleChangeNew={handleChangeNew}
                newClient={newClient}
                selectedTab={selectedTab}
                />
              </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" onClick={submitNewForm} data-bs-dismiss="modal" className="btn btn-success">Save User</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientModalForm;