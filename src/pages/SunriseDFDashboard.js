import React from 'react';
import ConnectedSCDB from '../components/ConnectedSCDB';
import GeneralInformation from '../components/GeneralInformation';
import SubNavbar from '../components/SubNavbar';
import { Routes, Route } from 'react-router-dom';

const ScenariosComponent = () => <div>Scenarios Content</div>;
const ParametersComponent = () => <div>Parameters Content</div>;
const MetaDataComponent = () => <div>Meta-data Content</div>;
const QualityMetricsComponent = () => <div>Quality Metrics Content</div>;

function SunriseDFDashboard() {
    const databases = ['Adscene', 'StreetWise', 'Scenius', 'VMMethods', 'SafetyPool'];
    const generalInfo = {
        ODD: "Urban City",
        Cost: "$200M",
        Version: "1.0.3",
        "Data Quantity": "1500 TB",
        Owner: "Sunrise Inc."
    };

    return (
        <div className="dashboard">
            <ConnectedSCDB databases={databases} />
            <SubNavbar />
            <Routes>
                <Route path="general" element={<GeneralInformation info={generalInfo} />} />
                <Route path="scenarios" element={<ScenariosComponent />} />
                <Route path="parameters" element={<ParametersComponent />} />
                <Route path="meta-data" element={<MetaDataComponent />} />
                <Route path="quality-metrics" element={<QualityMetricsComponent />} />
            </Routes>
        </div>
    );
}

export default SunriseDFDashboard;
