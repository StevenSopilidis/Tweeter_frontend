
export enum RequestTypes
{
    Get= "get",
    Post= "post",
    Put= "put",
    Delete= "delete"
}

//base reponse from any client

export class BaseResponse<T>
{
    public ok: boolean = false;
    public errors: string[] | null = null;
    public data: T | null;
    
    constructor(ok : boolean, errors: string[] | null= null, data: T | null)
    {
        this.ok = ok;
        this.errors = errors;
        this.data = data;
    }
}

export abstract class BaseClient<T>
{
    protected abstract url: string;
    protected abstract method: RequestTypes;
    protected requestData: any;

    constructor(data?: any)
    {
        this.requestData= data;
    }

    protected handleError(err: any): string[]
    {
        const {status, data} = err.response;
        const errors: string[] = [];

        switch(status)
        {
            case 400:
                if(typeof(data) === 'string')
                {
                    errors.push(data)
                    break;
                }else {
                    var keys = Object.keys(data.errors);
                    keys.map(key => {
                        const error_message_array : string[] = data.errors[key];
                        error_message_array.map(error_message => {
                            errors.push(error_message);
                        })
                    });
                    break;
                }
            case 401:
                errors.push("You need to be authenticated for this action");
                break;
            case 403:
                break;
            case 404:
                break;
            case 500:
                break;
        }

        return errors;
    }

    //request returns either the data coming from the request
    //or an null if the request failed
    abstract request() : Promise<BaseResponse<T>>;
}