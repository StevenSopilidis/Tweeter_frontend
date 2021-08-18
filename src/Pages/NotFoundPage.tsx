/** @jsxImportSource @emotion/react **/
import { css } from "@emotion/react";
import React from "react";
import { blue1 } from "../Styles";



export const NotFoundPage = () => (
    <div css={css`
        width: 100vw;
        height: 100vh;
    `}
    >
        <h1 css={css`
            color: ${blue1};
            margin: 1rem;
            font-family: sans-serif;
        `}>Resource Not Found</h1>
    </div>
)