/**@jsxImportSource @emotion/react **/
import { Page } from "../components/Page"
import { css } from "@emotion/react"; 
import { black1, blue1, gray4, gray6, gray7, Line, SmallFormButton, white2 } from "../Styles";
import { BsImages } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { CreateTweet } from "../components/CreateTweet";

export const HomePage = () => {
    return (
    <Page>  
        <div css={css`
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
        `}>
            {/* div for main content of homePage */}
            <div css={css`
                display: flex;
                margin-top: 40px;
                margin-left: 200px;
            `}>
                <CreateTweet />

                <div css={css`
                    width: 305px;
                    height: 495px;
                    border-radius: 4px;
                    background-color: ${white2};
                    color: ${gray4};
                    margin-left: 25px;
                    display: flex;
                    flex-direction: column;
                `}>
                    <h4 css={css`
                        font-size: 13px;
                        font-weight: 600;
                        font-family: sans-serif;
                        margin-left: 1rem;
                    `}>Trends for you</h4>
                    <Line />

                    <div>
                        <h3 css={css`
                            color: ${black1};
                            font-size: 16px;
                            font-family: sans-serif;
                            font-weight: 600;
                            margin-left: 1rem;
                        `}>
                            #programming
                        </h3>
                        <p css={css`
                            color: ${gray6};
                            font-size: 12px;
                            font-family: sans-serif;
                            font-weight: 600;
                            margin-left: 1rem;
                        `}>
                            200k tweets
                        </p> 
                    </div>
                    
                    <div>
                        <h3 css={css`
                            color: ${black1};
                            font-size: 16px;
                            font-family: sans-serif;
                            font-weight: 600;
                            margin-left: 1rem;
                        `}>
                            #coding
                        </h3>
                        <p css={css`
                            color: ${gray6};
                            font-size: 12px;
                            font-family: sans-serif;
                            font-weight: 600;
                            margin-left: 1rem;
                        `}>
                            10k tweets
                        </p> 
                    </div>

                </div>
            </div>
        </div>
    </Page>
    )
}