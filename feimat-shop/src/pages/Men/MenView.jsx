import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { MenTab } from 'components/modules/MenTab';

function MenView() {
  return (
    <>
      <PageWrapper>
        <div className="px-20 py-4">
          <div>
            <h1 className="text-black font-bold text-4xl">
              Men's Watches
            </h1>
            <MenTab />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default MenView;
