import React, { useState } from "react";
import B2BForm from './b2bForm';
import ManageTests from "./testManagement/manageTests";
import RunTests from "./testManagement/runTests";

export function getFormComponentForService(serviceName, onFormSubmitSuccess, showManageTests, handleManageTestsClick, handleTestRunsClick) {
    switch (serviceName) {
        case 'Business to Business':
            return () => <B2BForm onFormSubmitSuccess={onFormSubmitSuccess} />;
        case 'On Demand Test':
            return () => <OnDemandTests
                showManageTests={showManageTests}
                handleManageTestsClick={handleManageTestsClick}
                handleTestRunsClick={handleTestRunsClick}
            />;
        default:
            return () => <div>NO FORM FOUND</div>;
    }
}

function OnDemandTests({ showManageTests, handleManageTestsClick, handleTestRunsClick }) {
    return (
        <div className="on-demand-tests">
            <div className="button-container">
                <button onClick={handleManageTestsClick}>Manage Tests</button>
                <button onClick={handleTestRunsClick}>Test Runs</button>
            </div>
            <div className="content-container">
                {showManageTests ? <ManageTests /> : <RunTests />}
            </div>
        </div>
    );
}