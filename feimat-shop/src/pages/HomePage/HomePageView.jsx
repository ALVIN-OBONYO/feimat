import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { KidTab } from 'components/modules/KidTab';
import { MenTab } from 'components/modules/MenTab';
import { WomenTab } from 'components/modules/WomenTab';
function HomePageView() {
  return (
    <>
      <PageWrapper>
        {/* Men's Watches */}
      <div className="px-20 py-4">
          <div>
            <h1 className="text-black font-bold text-4xl">
              Men's Watches
            </h1>
            <MenTab />
          </div>
        </div>
        <div className="px-20 py-4">
          <div>
            <h1 className="text-black font-bold text-4xl">
              Women's Watches
            </h1>
            <WomenTab />
          </div>
        </div>
        {/* Kid's Watches */}
        <div className="px-20 py-4">
          <div>
            <h1 className="text-black font-bold text-4xl">Kid's Watches</h1>
            <KidTab />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default HomePageView;
