import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { KidTab } from 'components/modules/KidTab';
function KidView() {
  return (
    <>
      <PageWrapper>
      <div className="px-20 py-4">
          <div>
            <h1 className="text-black font-bold text-4xl">
              Kid's Watches
            </h1>
            <KidTab />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default KidView;