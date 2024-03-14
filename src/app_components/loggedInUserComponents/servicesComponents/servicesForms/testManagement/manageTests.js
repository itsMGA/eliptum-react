// ManageTests.js
import React, { useState } from "react";
import AddProjectModal from "./addProjectModal/addProjectModal";
import "./manageTests.css";

function ManageTests() {
    const [projects, setProjects] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSelectProject = (projectId) => {
        setSelectedProjectId(projectId);
    };

    const handleAddSection = (projectId) => {
        const updatedProjects = projects.map((project) => {
            if (project.id === projectId) {
                return {
                    ...project,
                    sections: [...project.sections, { id: Date.now(), name: "New Section", expanded: true }],
                };
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    const handleSectionToggle = (projectId, sectionId) => {
        const updatedProjects = projects.map((project) => {
            if (project.id === projectId) {
                const updatedSections = project.sections.map((section) => {
                    if (section.id === sectionId) {
                        return { ...section, expanded: !section.expanded };
                    }
                    return section;
                });
                return { ...project, sections: updatedSections };
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    const handleAddProject = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleProjectAdded = (newProject) => {
        setProjects([...projects, newProject]);
    };

    return (
        <div className="manage-tests">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <button key={project.id} onClick={() => handleSelectProject(project.id)}>
                        {project.name}
                    </button>
                ))}
                <button className="project-button" onClick={handleAddProject}>
                    Add
                </button>
            </div>

            <div className="sections-container">
                {selectedProjectId && projects.find(project => project.id === selectedProjectId)?.sections.map((section) => (
                    <div key={section.id} className="section">
                        <h4 onClick={() => handleSectionToggle(selectedProjectId, section.id)}>
                            {section.name}
                        </h4>
                        {section.expanded && (
                            <div className="test-cases-container">
                                {/* Map through test cases here, if any */}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {showModal && (
                <AddProjectModal
                    onClose={handleCloseModal}
                    onProjectAdded={handleProjectAdded}
                />
            )}
        </div>
    );
}

export default ManageTests;