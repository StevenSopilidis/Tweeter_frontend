/** @jsxImportSource @emotion/react **/
import { css } from "@emotion/react";
import { useState } from "react";
import { BsImages } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { blue1, gray4, gray7, Line, SmallFormButton, white2 } from "../Styles";

export const CreateTweet = () => {
    //wether the user whats the post to be public or not
    const [publicPost, setPublicPost] = useState<boolean>(false);

    return (
        <div css={css`
            display: flex;
            flex-direction: column;
            width: 745px;
            height: 156px;
            color: ${gray4};
            background-color: ${white2};
            border-radius: 4px;
        `}>
            <h4 css={css`
                margin-left: 10px;
                font-size: 12px;
                font-family: sans-serif;
            `}>Tweet something</h4>
            <Line />
            <form css={css`
                display:flex;
                flex-direction: column;
                align-items: center;
            `}>
                <textarea
                    css={css`
                    border: none;
                    margin-left: 10px;
                    margin-top: 5px;
                    resize: none;
                    width: 710px;
                    height: 50px;
                `}
                    placeholder="Whats happening?"></textarea>
                <div css={css`
                    width: 710px;
                    display: flex;
                    align-items: center;
                `}>
                    <div css={css`
                        width: 710px;
                        display: flex;
                        align-items: center;
                    `}>
                        <BsImages css={css`
                            color: ${blue1};
                            height: 15px;
                            width: 15px;
                            cursor: pointer;
                        `} />
                        <div css={css`
                            display: flex;
                            align-items: center;
                            margin-left: 1rem;
                            cursor: pointer;
                            color: ${publicPost? blue1 : gray4 };
                            `}
                            onClick={() => setPublicPost(!publicPost)}
                            >
                            <FaGlobeAmericas 
                                css={css`
                                    height: 15px;
                                    width: 15px;
                                `} 
                            />
                            <p css={css`
                                font-family: sans-serif;
                                font-size: 12px;
                                margin-left: 5px;
                            `}>Everyone can reply</p>
                        </div>
                    </div>
                    <SmallFormButton>Tweet</SmallFormButton>
                </div>
            </form>
        </div>
    );
}