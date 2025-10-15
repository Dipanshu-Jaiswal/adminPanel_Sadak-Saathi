import React from 'react';
import './ReportDetailsModal.css';

const ReportDetailsModal = ({ report, isOpen, onClose }) => {
  if (!isOpen || !report) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return '#e53e3e';
      case 'VERIFIED':
        return '#38a169';
      case 'SENT_TO_ZONAL':
        return '#3182ce';
      default:
        return '#718096';
    }
  };

  const getPriorityColor = (type) => {
    switch (type) {
      case 'Pothole':
        return '#e53e3e';
      case 'Waterlogging':
        return '#3182ce';
      case 'Debris':
        return '#d69e2e';
      default:
        return '#718096';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2>Report Details</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Report Type and Status */}
        <div className="section">
          <div className="type-status-row">
            <div className="report-type-badge" style={{ backgroundColor: getPriorityColor(report.type) }}>
              {report.type}
            </div>
            <div className="status-badge" style={{ backgroundColor: getStatusColor(report.status) }}>
              {report.status.replace('_', ' ')}
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="section">
          <h3>Basic Information</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Report ID:</span>
              <span className="detail-value">#{report.id}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">📍 {report.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Date Reported:</span>
              <span className="detail-value">📅 {report.date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Priority:</span>
              <span className="detail-value">
                <span 
                  className="priority-dot" 
                  style={{ backgroundColor: getPriorityColor(report.type) }}
                ></span>
                {report.type === 'Pothole' ? 'High' : report.type === 'Waterlogging' ? 'Medium' : 'Low'}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="section">
          <h3>Description</h3>
          <div className="description-box">
            <p>{report.description}</p>
          </div>
        </div>

        {/* Additional Details (You can expand this section) */}
        <div className="section">
          <h3>Additional Information</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Reported By:</span>
              <span className="detail-value">Citizen User</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Zone:</span>
              <span className="detail-value">Indore Central</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Last Updated:</span>
              <span className="detail-value">{report.date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Assigned To:</span>
              <span className="detail-value">
                {report.status === 'SENT_TO_ZONAL' ? 'Zonal Engineer' : 'Not Assigned'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-actions">
          {report.status === 'PENDING' && (
            <>
              <button className="action-btn verify-btn">Verify Report</button>
              <button className="action-btn reject-btn">Reject Report</button>
            </>
          )}
          {report.status === 'VERIFIED' && (
            <button className="action-btn send-zonal-btn">Send to Zonal Department</button>
          )}
          {report.status === 'SENT_TO_ZONAL' && (
            <button className="action-btn track-btn">Track Progress</button>
          )}
          <button className="action-btn close-action-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailsModal;