/** @jsxImportSource @emotion/react **/
import React from "react"
import { css } from "@emotion/react";
import { red1, white2 } from "../Styles";

type props = {
    error: string;
}

export const ErrorBox = ({error}: props) => (
    <div css={css`
        background-color: ${red1};
        color: ${white2};
        width: 280px;
        height: 50px;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 10px;
        margin-left: 4px;
        z-index: 100;
    `}>
        <h4 css={css`
            font-size: 12px;
            font-family: sans-serif;
        `}>{error}</h4>
    </div>
)