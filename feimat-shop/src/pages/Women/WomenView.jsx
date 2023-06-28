import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { WomenTab } from 'components/modules/WomenTab';
function WomenView() {
  return (
    <>
      <PageWrapper>
      <div className="px-20 py-4">
          <div>
            <h1 className="text-black font-bold text-4xl">
              Women's Watches
            </h1>
            <WomenTab />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default WomenView;