import axios from "axios";
import { User } from "../Models/User";
import { BaseClient, RequestTypes, BaseResponse } from "./baseClient";
import { basePath } from "./path";

export class LoginClient extends BaseClient<User | null>
{
    protected url = `${basePath}/accounts/login`;
    protected method= RequestTypes.Post;

    async request(){
        
        try{
            const result = await axios[this.method](this.url, this.requestData);

            return new BaseResponse<User>(true, null, result.data);
        }
        catch(err : any)
        {
            var res = new BaseResponse<null>(false, this.handleError(err), null);
            return res;
        }
    }
}