import React, { useState, useEffect, useRef, useMemo } from 'react';
import {apiCall} from '../../services/trendApi';
import {setRepo} from '../../actions/actions';
import {Container,Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import { Fire } from 'react-bootstrap-icons';
import './developer.css';


import ReactDOM from "react-dom";
import dataItem from '../../services/developers.json';
const  Developers = () => {
    useEffect(() => {

        apiCall('http://localhost:3000/services/repositories.json', {
            method: 'GET',
            successCallback: data => handleResponse(data),
            errorCallback: handleResponseError
        },{"": '' });
    
    }, []);
    const handleResponse = (data) =>{
        setRepo(data);
    console.log(data);
    }
    const handleResponseError = (data) =>{
      console.log(data);
      }
  return (
      
      <div className="list-group">{dataItem && dataItem.map((data) => {
          return (
              <div className="list-group-item">
            <Row>
            <Col className="pr-2"><img src= {data.avatar} className="rounded-circle p-2 avatar"/><span>{data.username}</span></Col>
            <Col xs={5}>
            <div>Popular Repo</div>
            <div>{data.popularRepository.repositoryName}</div>
            <div>{data.popularRepository.description}</div></Col>
            <Col>Sponserer</Col>
          </Row>
          </div>
          )
      })

      }
      </div>
  
    
  );
}

export default Developers;


function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
 

  };
}
