import styled, { css } from 'styled-components'

import {
    above
} from '../../helpers/breakpoints'

import {
    theme
} from '../../constants'

const styledInput = css`
    padding: ${theme.s(1.2)} ${theme.s(1.2)} 0 ${theme.s(1.2)};

    background-color: rgba(255, 255, 255, 0.2);

    border: none;
    border: 2px solid transparent;
    border-bottom: 1px solid ${theme.colorDefault};
    border-radius: 0;

    font-family: ${theme.handFont};
    letter-spacing: .5px;
    color: ${theme.colorPrimary};

    &:focus {
        outline: none;
        border-radius: 0;

        border: 2px solid ${theme.colorBlue};
    }
    &:hover {
        background-color: rgba(${theme.colorBeigeRGB}, 0.1);
    }
`

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    width: 100%;

    font-size: 1.2rem;

    @media ${above.smDesktop} {

    }
`

export const StyledFormWrapper = styled.div`
    /* padding: ${theme.s(4)} 0; */
`

export const StyledFormGroup = styled.div`
    ${props => props.isVisible ? css`display: flex;` : css`display: none;`}
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    ${props => props.isUnderlined ? css`
        /* border-bottom: 1px solid ${theme.colorPrimary}; */
        padding-bottom: ${theme.s(2)};
        margin-bottom: ${theme.s(2)};
    ` : ''}
`

export const StyledLabel = styled.label`
    ${props => props.width ? css`width: ${props.width};` : css`width: 100%;`}

    margin-bottom: ${theme.s()};

    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
    align-items: flex-start;
    justify-content: flex-start;

    padding: 0 ${theme.s()};
    padding-bottom: ${theme.s(2)};

    position: relative;

    small {
        position: absolute;
        bottom: 0;
        left: ${theme.s()};
        font-size: .9rem;
    }
    span {
        padding-bottom: ${theme.s(.25)};

        font-size: 1rem;

        letter-spacing: -.5px;
    }

    ${props => props.hasErrors ? css`
        small, span {
            color: red;
        }
        input,
        select {
            border: 2px solid red;
            background-color: rgba(255, 0, 0, .05);
        }
        input[type="checkbox"] + span {
            border-bottom: 1px solid red;
        }
    ` : ''}
`

export const StyledSelect = styled.select`
    width: 100%;
    height: ${theme.s(5)};

    ${styledInput}
`

export const StyledInput = styled.input`
    width: 100%;
    height: ${theme.s(5)};

    ${styledInput}
`

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: ${theme.s(10)};

    ${styledInput}
`

export const StyledCheckboxWrapper = styled.div`
    display: flex;
    flex-direction: row;

    cursor: pointer;

    span {
        margin-left: ${theme.s(1.5)};
    }
    input {
        border: none;
    }
`
