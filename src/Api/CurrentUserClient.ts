import axios from "axios";
import { User } from "../Models/User";
import { BaseClient, RequestTypes, BaseResponse } from "./baseClient";
import { basePath } from "./path";

export class CurrentUserClient extends BaseClient<User | null>
{
    protected url = `${basePath}/accounts`;
    protected method= RequestTypes.Get;

    async request() {
        
        try{
            var token = window.localStorage.getItem("TweeterJwt");
            const result = await axios[this.method](this.url, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            return new BaseResponse<User>(true, null, result.data);
        }
        catch(err : any)
        {
            var res = new BaseResponse<null>(false, this.handleError(err), null);
            return res;
        }
    }
}