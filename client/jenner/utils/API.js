import axios from 'axios';

export default {



    getQuote: function () {

        var header = {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
        return axios.get('https://zenquotes.io/api/today/?option1=value&option2=value', header);
    }
};