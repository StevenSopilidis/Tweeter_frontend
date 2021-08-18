import styled from "@emotion/styled";

import React from "react";

export const white1 = "#f5f5f5"

export const white2 = "#FFFFFF"

export const gray1 = "#f0ecec";

export const gray2 = "#F2F2F2";

export const gray3 = "#adadad";

export const gray4 = "#4F4F4F";

export const gray5 = "#BDBDBD"

export const gray6 = "#828282";

export const gray7 = "#E0E0E0"

export const black1= "#333333";

export const red1 = "#ed2b2b";

export const blue1 = "#2F80ED";

export const green1 = "rgb(166, 226, 46)";

export const NameH5 = styled.h5`
    font-family: sans-serif;
    color: #232323;
    font-weight: bold;
    font-size: 14px;
    color: ${black1};
`

export const HeaderNavigationContainer = styled.div
`
    cursor: pointer;
    :hover{
        border-bottom: 3px solid ${blue1};
        color: ${blue1}
    }
`
export const HeaderNavigationContainerCurrent = styled.div
`
    cursor: pointer;
    color: ${blue1};
    border-bottom: 3px solid ${blue1};
`

export const HeaderNavigationLink = styled.h5`
    margin-left: 13px;
    margin-right: 13px;
    font-size: 17px;
    color: #828282;
    font-family: sans-serif;
`

export const HeaderNavigationLinkCurrent = styled.h5`
    margin-left: 13px;
    margin-right: 13px;
    font-size: 17px;
    color: ${blue1};
    font-family: sans-serif;
`;

export const InputField = styled.input`
    height: 48px;
    width: 357px;
    border: .5px solid ${gray5};
    border-radius: 8px;
    background-color: transparent;
    margin-top: 1.5rem;
`;

export const FormButton = styled.button`
    width: 357px;
    height: 48px;
    background-color: ${blue1};
    color: ${white2};
    margin-top: 2rem;
    font-size: 16px;
    font-weight: 600;
    font-family: sans-serif;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    :hover
    {
        background-color: ${white2};
        color: ${blue1};
    };
    transition: 0.4s ease all;
`

export const SmallFormButton = styled.button`
    width: 90px;
    height: 32px;
    background-color: ${blue1};
    color: ${white2};
    font-size: 13px;
    font-weight: 600;
    font-family: sans-serif;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    :hover
    {
        background-color: ${white2};
        color: ${blue1};
    };
    transition: 0.4s ease all;
`

export const Line = styled.div
`
    width: 90%;
    height: 1.5px;
    background-color: ${gray7};
    margin-left: 10px;
`;

//div for options in explore left hand side section
export const ExplorePageOptions = styled.div
`
    cursor: pointer;
    :hover{
        border-left: 4px solid ${blue1};
    }
    display: flex;
    align-items: center;
    padding: 7px;
    color: ${gray6};
    font-family: sans-serif;
    font-size: 14px;
    width: 100%;
    height: 25%;
`;