import axios, {AxiosRequestConfig} from 'axios'
import moment from 'moment'

const sms = async function(data: any) {
    try {
        
        let currentDateMoment   = moment().format("DD-MM-YYYY hh:mm:ss.SSS");
        const configs:any = {
            method          : "post",
            url             : `https://vgateway.viriyah.co.th/sms/Send`,
            data            : data,
            headers         : { 
                'Access-Control-Allow-Origin'   : '*',
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers"  : "Content-Type, Authorization",
                'Access-Control-Allow-Methods'  : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Content-Type'                  : 'application/json; charset=utf-8', 
                'Authorization'                 : 'Basic Y2huZGV2OmNobjIxYw==',
                'Accept'                        : '*/*'
              }
        }
        const response = await axios(configs);

        // API Response
        return response.data
    } catch (error) {
        throw error;
    }
}

export default sms;