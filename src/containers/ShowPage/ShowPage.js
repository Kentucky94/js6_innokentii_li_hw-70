import React, {Fragment,useState, useEffect, useRef} from 'react';

import axiosOrders from "../../axiosOrders";
import {withRouter} from "react-router";

let ShowImage = '';

const ShowPage = props => {
  const initialState = {};

  const [ShowData, SetShowData] = useState(initialState);

  const GetShowData = async () => {
    const response = await axiosOrders.get(`shows/${props.match.params.id}`);

    SetShowData(response.data);

    console.log(ShowData);

    if(ShowData.summary){
      document.getElementById('data').innerHTML = ShowData.summary;
    }

    if(ShowData.image){
      ShowImage = ShowData.image.medium;
    }

    console.log(ShowImage);
  };


  useEffect(() => {
    GetShowData();
  }, [props.match.params.id]);

  return (
    <Fragment>
      <img src={ShowImage} alt=""/>
      <div className='ShowData' id='data'/>
    </Fragment>
  );
};

export default withRouter(ShowPage);