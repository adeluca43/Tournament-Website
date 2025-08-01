import React from "react";

export default function Info() {
  return (
    <div className="container mt-4">
      <h1 className="mb-3">Tournament Information</h1>
      <p>
        We’re proud to host our **annual in-house Jiu-Jitsu tournament for
        kids**! This is an exciting opportunity for some children to step onto
        the mats for the very first time, while others gain valuable competition
        experience. We strive to pair competitors within **1 year of age** and
        **10 pounds** to keep matches fair and fun. We’re excited for everyone
        to get involved and show their skills!
      </p>

      <ul className="list-group list-group-flush mt-4">
        <li className="list-group-item">
          <strong>Date:</strong> December 31
        </li>
        <li className="list-group-item">
          <strong>Location:</strong> Tennessee BJJ Academy – Spring Hill
        </li>
        <li className="list-group-item">
          <strong>Time:</strong> All day event
        </li>
        <li className="list-group-item">
          <strong>Cost:</strong> $40 per division (Gi and No-Gi)
        </li>
        <li className="list-group-item">
          <strong>Ages:</strong> 4–16 years old
        </li>
      </ul>
    </div>
  );
}
