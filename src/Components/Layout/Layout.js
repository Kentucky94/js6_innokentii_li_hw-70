import React, {Fragment} from 'react';

import SearchBar from "../SearchBar/SearchBar";

const Layout = props => {
  return (
    <Fragment>
      <SearchBar />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;