import React from 'react';
import { isEmpty, merge, indexOf } from 'lodash';
import axios from 'axios';



function handleGenericError(jqXHR, callback) {
    let msg = '',
        title = '';

    const status = [404, 504, 408]
    if (indexOf(jqXHR.status, status) > -1 && isEmpty(jqXHR.data)) {
        msg = 'genericXHRTimeOutMessage';
    } else if (jqXHR.status) {
        if (jqXHR.data.errorCode) {
            msg = jqXHR.data.message || `${ jqXHR.data.developerMessage ? jqXHR.data.developerMessage.replace('user.', '') : jqXHR.data.userMessage }`;
        } else {
            msg = jqXHR.data.message || jqXHR.data.userMessage || 'genericXHRTimeOutMessage';
        }
    }

    if (callback && typeof callback === 'function') {
        callback(msg, 'error', title);
    } else if (typeof callback !== 'function') {
        throw Error("Callback must be a function")
    }
}



function getDefaultRequestConfig(appXhrConfig) {
    let axiosConfig = {

        // `method` is the request method to be used when making the request
        method: 'GET', // default

        // `headers` are custom headers to be sent
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    };
    return merge(axiosConfig, appXhrConfig);
}


    /**
     *
     * @param webserviceURL String Name of the web service used to retrieve its complete url in the app-settings file.
     * @param pathVars Object Path variables to eventually process in the URL. Key of properties are used to target the path variable
     * @param config
     */
    export const apiCall = async (webservice, config, pathVars) => {
       // Webservice must exists in settings
       if (!(webservice)) {
           console.error('Webservice not found, is "' + webservice + '" correct ?');
           return;
       }
       let axiosConfig = getDefaultRequestConfig(config || {});

       // if(config.responseType) {
           axiosConfig.responseType = config.responseType;
           axiosConfig.headers.Accept = '*/*';
        //}

        const data = await axios(webservice, axiosConfig)
            .then(function(response) {
                    return  response.data;
            })
            .catch(function(error) {

                return  error;
            });

        return data;
    }