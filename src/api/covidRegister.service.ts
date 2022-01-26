import axios, {AxiosRequestConfig} from 'axios'
import moment from 'moment'

const covidRegister = async function(data: any) {
    try {
        
        let currentDateMoment   = moment().format("DD-MM-YYYY hh:mm:ss.SSS");
        const configs:any = {
            method          : "post",
            url             : `https://Vgateway.viriyah.co.th/cdata/CHANNELPRD_SelfRegisterFreeInsurance`,
            headers         : { 
                'Access-Control-Allow-Origin'   : '*',
                'Access-Control-Allow-Methods'  : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Content-Type'                  : 'application/json; charset=utf-8', 
                'x-cdata-authtoken'             : '5e0T8m9k7K5d0o3Q8r9q'
              },
            data            : data
        }
        const response = await axios(configs);

        // API Response
        return response.data
    } catch (error) {
        throw error;
    }
}

export default covidRegister;