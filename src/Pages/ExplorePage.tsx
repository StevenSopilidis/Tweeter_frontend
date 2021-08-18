/**@jsxImportSource @emotion/react **/
import React from "react";
import { css } from "@emotion/react";
import { Page } from "../components/Page";
import { ExplorePageOptions, gray5, SmallFormButton, white2 } from "../Styles";
import { BsSearch } from "react-icons/bs";


export const ExplorePage = () => {
    return (
    <Page>
        <div css={css`
            width: 100vw;
            height: 100vh;
            justify-content: space-around;
            display: flex;
        `}>
            {/* div for main content of homePage */}
            <div css={css`
                display: flex;
                margin-top: 40px;
            `}>
                {/* options for exporing the content */}
                <div css={css`
                    width: 304px;
                    height: 220px;
                    background-color: ${white2};
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                `}>
                    <ExplorePageOptions>Top</ExplorePageOptions>
                    <ExplorePageOptions>Latest</ExplorePageOptions>
                    <ExplorePageOptions>People</ExplorePageOptions>
                    <ExplorePageOptions>Media</ExplorePageOptions>
                </div>  

                {/* the main content */}
                <div css={css`
                    width: 745px;
                    display: flex;
                    flex-direction: column;
                    margin-left: 24px;
                `}>
                    {/* search bar */}
                    <div css={css`
                        width: 100%;
                        height: 54px;
                        background-color: ${white2};
                        border-radius: 8px;
                    `}>
                        <form css={css`
                            display: flex;
                            align-items: center;
                            width: 100%;
                            height: 100%;
                        `}>
                            <BsSearch css={css`
                                height: 17px;
                                width: 17px;
                                color: ${gray5};
                                margin-left: 13px;
                            `}/>
                            
                            <input 
                            css={css`
                                border: none;
                                margin-left: 20px;
                                height: 80%;
                                width: 70%;
                                :focus
                                { 
                                    outline: none;
                                }
                            `}
                            type="text" 
                            placeholder="Search"/>

                            <SmallFormButton 
                            css={css`
                                margin-left: 50px;
                            `}
                            type="submit">Search</SmallFormButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Page>
    )
}