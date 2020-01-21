import React, {Fragment, useState, useEffect} from 'react';
import {withRouter} from "react-router";

import axiosOrders from "../../axiosOrders";
import SearchItem from "../SearchItem/SearchItem";

import './SearchBar.css';

const SearchBar = props => {
  const SearchInputInitialState = '';

  const SearchResultsInitialState = [];

  const [SearchInput, SetSearchInput] = useState(SearchInputInitialState);

  const [SearchResults, SetSearchResults] = useState(SearchResultsInitialState);

  const OnInputChangeHandler = event => {
    const inputData = event.target.value;

    SetSearchInput(inputData)
  };

  const FetchData = async () => {
    const response = await axiosOrders.get(`/search/shows/?q=${SearchInput}`);

    console.log(response.data);

    SetSearchResults(response.data);
  };

  const GoToMainPageHandler = () => {
    props.history.push(`/`);
  };

  const GoToNextPageHandler = (id) => {
    props.history.push({
      pathname: `/shows/${id}`,
      id,
    });
  };

  const searchNames = SearchResults.map(
    result => <SearchItem
      data={result.show.name}
      key={result.show.id}
      onClick={() => GoToNextPageHandler(result.show.id)}
    />
  );

  useEffect(() => {
    FetchData();
  }, [SearchInput]);

  return (
    <Fragment>
      <div className='DecorationBar'>
        <span onClick={GoToMainPageHandler} style={{color: '#fff', cursor: 'pointer'}}>TV Shows</span>
      </div>
      <div className='SearchBar'>
        <span>
          Search for TV Shows:
        </span>
        <div className='inputBlock'>
          <input type="text" onChange={OnInputChangeHandler}/>
          <div
            className='resultsBlock'
            style={{
              display: SearchResults.length > 0 ? 'block' : 'none'
            }}
          >
            {searchNames}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(SearchBar);