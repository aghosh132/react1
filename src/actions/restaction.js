import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restConstant";





// api to access all restaurants data

export const getResturants=async (dispatch)=>{
try{
const result=await axios.get('/restaurants.json')
console.log(result.data.restaurants);
dispatch(
    {
  
   payload:result.data.restaurants,
   type:SUCCESS

    }
)
}
catch(err){
    dispatch(
        {
      
       payload:err,
       type:FAIL

        }
    )
}
}

