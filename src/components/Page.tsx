/**@jsxImportSource @emotion/react **/
import React from "react";
import { css } from "@emotion/react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { User } from "../Models/User";
import { CurrentUserClient } from "../Api/CurrentUserClient";
import CircleLoader from "./CircleLoader";

interface IProps
{
    children: React.ReactNode;  
}

export const Page = ({ children }: IProps) => {
    const [currentUser, setCurrentUser] = React.useState<User>();
    
    const navigate = useNavigate();


    React.useEffect(() => {
        const client = new CurrentUserClient();

        const getResult = async () => {
            var response = await client.request();
            if(!response.ok)
                navigate("/login");

            if(response.data)
            {
                const user: User = {
                    username: response.data.username,
                    email: response.data.email,
                    token: response.data.token
                };
                setCurrentUser(user);
            }
        }

        getResult();
    }, [navigate]);
    
    return (
        <div css={css`
            width: 100vw;
            height: 100vh;
        `}>
            {currentUser &&
                <div css={css`width: 100%; height: 100%`}>
                    <Header />
                    <div css={css`
                        margin-top: 70px;
                    `}>
                        {children}
                    </div>
                </div>
            }
            {!currentUser && 
                <div css={css`
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `}>
                    <CircleLoader></CircleLoader>
                </div>
            }
        </div>
    )
}