import React, { useEffect, useState } from 'react';
import citizenService from '../../services/citizenService';

const TrackVehicle = () => {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    const fetchTracking = async () => {
      const res = await citizenService.trackVehicle();
      setTrackingData(res.data);
    };
    fetchTracking();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded mt-4">
      <h2 className="text-lg font-semibold mb-4">Vehicle Tracking</h2>
      <ul className="space-y-2">
        {trackingData.map((track, idx) => (
          <li key={idx} className="border p-2 rounded">
            {track.message || 'Vehicle status info'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackVehicle;
