import React, { useState } from "react";
import AddProjectModal from "./addProjectModal/addProjectModal";
import "./manageTests.css";

function ManageTests() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="manage-tests">
            <div className="add-project-container">
                <button className="add-project-btn" onClick={toggleModal}>
                    Add Project
                </button>
                {showModal && <AddProjectModal onClose={toggleModal} />}
            </div>
        </div>
    );
}

export default ManageTests;
