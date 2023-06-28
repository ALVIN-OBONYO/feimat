import React from 'react';
// import { logo } from 'assets/images';
// import { Link } from 'react-router-dom';

function PageFooter() {
  return (
    <>
      <div className="text-white grid grid-cols-3 w-full">
        <div>
          <p className="text-white font-semibold">
            {`© Copyright ${new Date().getFullYear()} Feimat Shop All rights reserved.`}
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default PageFooter;
