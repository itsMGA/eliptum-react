import axiosInstance from "../../../../../../axiosConfig";
import React, { useState } from "react";
import "./addProjectModal.css"; // Ensure this CSS supports the dropdown effect

function AddProjectModal({ onClose, onProjectAdded }) {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [message, setMessage] = useState("");
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility

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
        <div className="project-container">
            <button onClick={() => setShowForm(!showForm)}>Add Project</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="project-form">
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
                    <span className={message.includes("success") ? "success-message" : "error-message"}>
                        {message}
                    </span>
                </form>
            )}
        </div>
    );
}

export default AddProjectModal;
