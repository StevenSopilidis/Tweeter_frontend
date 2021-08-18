/** @jsxImportSource @emotion/react **/
import React from "react"
import { css } from "@emotion/react";
import Logo from "../tweeter.svg";
import { blue1, FormButton, gray5, gray6, InputField, white2 } from "../Styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SuccessfullBox } from "../components/SuccessfullBox";
import { ErrorBox } from "../components/ErrorBox";
import { LoginClient } from "../Api/LoginClient";

type FormData =
{
    Email: string;
    Username: string;
    Password: string;
}

export const LoginPage = () => {
    const {register, handleSubmit} = useForm<FormData>();
    //wether the user was registered successfully
    const [logedSuccessfully,setLogedSuccessfully] = React.useState<boolean>(false);

    //errors that where received if user was not register successfully
    const [errors, setErrors] = React.useState<string[]>([]);

    const navigate = useNavigate(); 

    const submitForm = async (data: FormData) =>
    {
        const client = new LoginClient(data);
        const response = await client.request();
        if(response.ok && response.data)
        {
            setLogedSuccessfully(true);
            //save the token to localStorage
            localStorage.setItem("TweeterJwt", response.data.token);
            
            setTimeout(() => {
                navigate("/");
            }, 1500)
        }

        if(!response.ok && response.errors != null)
        {
            setErrors(response.errors);
            setTimeout(() => {
                setErrors([]);
           }, 2500)
        }
    }

    return (
        
        <div css={css`
            width: 100vw;
            height: 100vh;
            `}
        >
            {!logedSuccessfully && errors.length > 0 && 
            <div css={css`
                position: fixed;
                display: flex;
                flex-direction: column;
                align-items: center;
            `}>
                { errors.map(err => <ErrorBox error={err}/>) }
            </div>
            }
            <div css={css`
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            `}>
                <div css={css`
                    width: 475px;
                    height: 635px;
                    border: 1px solid ${gray5};
                    border-radius: 24px;
                `}>
                    <div css={css`
                        width: 100%;
                        display: flex;
                        align-items: center;
                        padding: 1.5rem
                    `}>
                        <img
                        css={css`
                        `}
                        src={Logo}
                        >
                        </img>
                    </div>
                    <div
                        css={css`
                        padding: 1.5rem;
                        width: 100%;
                        `
                        }
                    >
                        <h3
                        css={css`
                        font-size: 18px;
                        font-weight: 600;
                        font-family: sans-serif;
                        width: 70%;
                        `}
                        >Connnect with thousands of people all arround the world</h3>
                    </div>
                    <div css={css`
                    width: 100%;`}>
                        <form css={css`
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        `}
                        onSubmit={handleSubmit(submitForm)}
                        >
                            <InputField {...register("Email")} type="email" placeholder="Email"></InputField>
                            
                            <InputField {...register("Password")} type="password" placeholder="Password"></InputField>
                            
                            <FormButton>Login Now</FormButton>

                            <p css={css`
                            color: ${gray6};
                            font-size: 18px;
                            font-weight: 400;
                            `}>
                            Dont have an Accont?
                            <Link css={css`
                            margin-left: 5px;
                            color: ${blue1};
                            text-decoration: none;
                            `} to="/register">Register Now</Link>
                            </p>
                            
                            {logedSuccessfully && 
                                <SuccessfullBox message="LogedIn Successfully"/>
                            }

                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
} 