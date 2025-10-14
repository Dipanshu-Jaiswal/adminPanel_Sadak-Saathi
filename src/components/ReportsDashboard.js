import React, { useState } from 'react';
import './ReportsDashboard.css';

const ReportsDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('ALL');
  
  // Sample data - replace with actual API data
  const reportsData = {
    ALL: [
      {
        id: 1,
        type: 'Pothole',
        location: 'MG Road, Indore',
        date: '11/10/2025',
        status: 'PENDING',
        description: 'Large pothole near the intersection causing traffic issues'
      },
      {
        id: 2,
        type: 'Waterlogging',
        location: 'AB Road, Indore',
        date: '10/10/2025',
        status: 'VERIFIED',
        description: 'Water accumulation after heavy rainfall'
      },
      {
        id: 3,
        type: 'Debris',
        location: 'Rajwada Area, Indore',
        date: '09/10/2025',
        status: 'SENT TO ZONAL',
        description: 'Construction debris blocking the road'
      }
    ],
    PENDING: [
      {
        id: 1,
        type: 'Pothole',
        location: 'MG Road, Indore',
        date: '11/10/2025',
        status: 'PENDING',
        description: 'Large pothole near the intersection causing traffic issues'
      }
    ],
    VERIFIED: [
      {
        id: 2,
        type: 'Waterlogging',
        location: 'AB Road, Indore',
        date: '10/10/2025',
        status: 'VERIFIED',
        description: 'Water accumulation after heavy rainfall'
      }
    ],
    SENT_TO_ZONAL: [
      {
        id: 3,
        type: 'Debris',
        location: 'Rajwada Area, Indore',
        date: '09/10/2025',
        status: 'SENT TO ZONAL',
        description: 'Construction debris blocking the road'
      }
    ]
  };

  const ReportCard = ({ report }) => (
    <div className="report-card">
      <div className="report-header">
        <h3 className="report-type">{report.type}</h3>
        <span className={`status-badge status-${report.status.replace(' ', '_')}`}>
          {report.status}
        </span>
      </div>
      <div className="report-details">
        <p className="report-location">📍 {report.location}</p>
        <p className="report-date">📅 {report.date}</p>
        <p className="report-description">{report.description}</p>
      </div>
      <div className="report-actions">
        <button className="view-details-btn">View Details</button>
        {report.status === 'PENDING' && (
          <>
            <button className="verify-btn">Verify</button>
            <button className="reject-btn">Reject</button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="reports-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Reports Dashboard</h1>
          <p>Manage and review road issue reports</p>
        </div>
        <div className="header-right">
          <span className="welcome-text">Welcome, admin</span>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="reports-nav">
        <button 
          className={`nav-tab ${activeTab === 'ALL' ? 'active' : ''}`}
          onClick={() => setActiveTab('ALL')}
        >
          All Reports
        </button>
        <button 
          className={`nav-tab ${activeTab === 'PENDING' ? 'active' : ''}`}
          onClick={() => setActiveTab('PENDING')}
        >
          PENDING
        </button>
        <button 
          className={`nav-tab ${activeTab === 'VERIFIED' ? 'active' : ''}`}
          onClick={() => setActiveTab('VERIFIED')}
        >
          VERIFIED
        </button>
        <button 
          className={`nav-tab ${activeTab === 'SENT_TO_ZONAL' ? 'active' : ''}`}
          onClick={() => setActiveTab('SENT_TO_ZONAL')}
        >
          SENT TO ZONAL
        </button>
      </nav>

      {/* Reports Grid */}
      <main className="reports-grid">
        {reportsData[activeTab]?.map(report => (
          <ReportCard key={report.id} report={report} />
        ))}
        
        {(!reportsData[activeTab] || reportsData[activeTab].length === 0) && (
          <div className="no-reports">
            <p>No reports found in {activeTab.replace('_', ' ')}</p>
          </div>
        )}
      </main>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stat-card errors">
          <h3>ERRORS</h3>
          <p className="stat-count">0</p>
        </div>
        <div className="stat-card verified">
          <h3>VERIFIED</h3>
          <p className="stat-count">{reportsData.VERIFIED.length}</p>
        </div>
        <div className="stat-card zonal">
          <h3>SENT TO ZONAL</h3>
          <p className="stat-count">{reportsData.SENT_TO_ZONAL.length}</p>
        </div>
      </section>
    </div>
  );
};

export default ReportsDashboard;