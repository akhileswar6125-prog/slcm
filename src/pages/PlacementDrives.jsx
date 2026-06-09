import React from 'react'
import './PlacementDrives.css'

function PlacementDrives() {
  return (
    <div className="placement-page">
      <div className="placement-header">
        <h1 className="placement-title">Placement Drives</h1>
        <p className="placement-sub">Check upcoming Placement Drives here</p>
      </div>
      <div className="placement-card">
        <div className="placement-card-title">Placement Details</div>
        <p className="placement-empty">No Placement drives available yet</p>
      </div>
    </div>
  )
}

export default PlacementDrives
