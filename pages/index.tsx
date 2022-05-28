import Exploration from 'components/Exploration';
import Introduction from 'components/Introduction';
import Box from 'customs/Box';
import BoxWrap from 'customs/BoxWrap';
import { NextPage } from 'next';
import React from 'react';

const Homepage: NextPage = () => {
  return (
    <Box
      className="w-full relative"
      wrapper={
        <BoxWrap
          className="w-full flex flex-col"
          element={
            <React.Fragment>
              {/* insert components */}
              <Introduction />
              <Exploration />
            </React.Fragment>
          }
        />
      }
    />
  );
};

export default Homepage;
