import React, { useState } from 'react';

const RuntimeInfo = ({ runtime }) => {
  return (
    <div style={{ marginBottom: "60px" }}>
  <h3>Runtime Information</h3>
  <p>Total Runtime: {runtime} seconds</p>
</div>

  );
};

export default RuntimeInfo;
