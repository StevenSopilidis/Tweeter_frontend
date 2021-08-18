/** @jsxImportSource @emotion/react **/
import React from "react"
import { css } from "@emotion/react";
import { green1, white2 } from "../Styles";

type props = {
    message: string;
}

export const SuccessfullBox = ({message}: props) => (
    <div css={css`
    background-color: ${green1};
    color: ${white2};
    width: 280px;
    height: 42px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    `}>
        <h4 css={css`
            font-size: 15px;
            font-family: sans-serif;
            padding-bottom: 10px;
        `}>{message}</h4>
    </div>
)