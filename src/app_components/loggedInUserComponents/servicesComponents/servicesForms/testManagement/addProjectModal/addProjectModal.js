import axiosInstance from "../../../../../../axiosConfig";
import React, { useState } from "react";
import "./addProjectModal.css"; // Ensure this CSS supports the dropdown effect


function AddProjectModal({ onClose }) {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/projects/create", {
                name: projectName,
                description: projectDescription,
            });
            setMessage("Project created successfully");
            onProjectAdded(response.data);
            setShowForm(false); // Hide the form on successful creation
            setProjectName(""); // Reset form fields
            setProjectDescription("");
        } catch (error) {
            setMessage("Error creating project: " + error.response.data.message);
        }
    };


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close" onClick={onClose}>&times;</span>
                <h3>Create New Project</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Project Description"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Create Project</button>
                </form>
            </div>
        </div>
    );
}

export default AddProjectModal;