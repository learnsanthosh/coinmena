export default {
    name: "trend",
    authAppId:'trend',
    logger: {
        levels: true
    },
    pathVars:{},
    layout: {
       default: true
    },
    apiHost: 'https://gh-trending-api.herokuapp.com',
    api:{

        trend: {
            trending: 'https://gh-trending-api.herokuapp.com/repositories',
            developer:'https://gh-trending-api.herokuapp.com/developers',

           
        }
    }
 

};

