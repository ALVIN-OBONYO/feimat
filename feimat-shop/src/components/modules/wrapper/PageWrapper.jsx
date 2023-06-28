import React from 'react';
import PropTypes from 'prop-types';
import { PageNavBar } from 'components/modules/navBars';
import { PageFooter } from 'components/modules/footer';

function PageWrapper({ children }) {
  return (
    <div>
      <nav className="py-2 text-white bg-black">
        <div>
          <PageNavBar />
        </div>
      </nav>

      <main>
        <div className="h-[75vh] box-border w-full">{children}</div>
      </main>

      <footer className="bg-black flex justify-center items-center pt-10 pb-10">
        <div className="md:container py-8 px-4 lg:px-16 ">
          <PageFooter />
        </div>
      </footer>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.any,
};

export default PageWrapper;