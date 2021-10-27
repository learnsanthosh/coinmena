import React from 'react';
import { apiCall } from '../../services/trendApi';
import { Star, Easel } from 'react-bootstrap-icons';
import Trendspinner from '../spinner';
import axios from 'axios';
import {
    useQuery,
    useQueryClient,
} from "react-query";

function useRepo() {


    return useQuery("Repo", async () => {
        const { data } = await axios.get(
          "http://localhost:3000/data/repositories.json"
        );
        return data;
      });

         /* return useQuery("Repo", apiCall('http://localhost:3000/data/repositories.json', {
        method: 'GET',
    }));*/

}
const Repositiories = () => {
    const { status, data, error, isFetching } = useRepo();
    let spinnerProps = {
        showLoading: true,
        browserSupportsAnimations: true
    }
    return (
        <> {status && status === "loading" ? (
            <Trendspinner { ...spinnerProps }
       />
        ) : status && status === "error" ? (
            <span>Error: {error.message}</span>
        ) : (<div className="list-group">{data && data.map((item) => {
            return (<div className=" list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <span className="d-inline"><Easel />
                        <h3 className="mb-1">{item.repositoryName}</h3>
                    </span>
                    <span>
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                        </button>
                    </span>
                </div>
                <p className="mb-1">{item.description}</p>
                <small><span>{item.language}</span><span className="pl-2"><Star />{item.totalStars}</span></small>
            </div>)
        })
        }
        </div>
        )
        }
        </>
    );
}

export default Repositiories;
//if we need Redux store insted of react Query then bellow code 
function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {


    };
}

