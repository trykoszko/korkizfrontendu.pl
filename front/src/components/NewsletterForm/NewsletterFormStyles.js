import styled from 'styled-components'
import { theme } from '../../constants'
import { above, under } from '../../helpers/breakpoints'

export const StyledNewsletterForm = styled.form`
    display: flex;
    flex-direction: column;

    ${props => props.isLoading ? `opacity: .4;` : ``}

    input {
        border: none;
        border-radius: ${theme.borderRadius.small};

        background-color: ${theme.colorBeigeAlt};

        padding: ${theme.s(2)};
    }

    margin-bottom: 0;

    @media ${under.mobile} {

        input {
            margin-bottom: ${theme.s()};
        }
    }
    @media ${above.mobile} {

        input {
            margin-right: ${theme.s()};
        }
    }
    @media ${above.tablet} {
        max-width: 80%;
    }
`

export const StyledNewsletterWrapper = styled.div`
    display: ${props => props.hidden ? 'none' : 'flex'};
    flex-direction: ${props => props.layout};

    margin-bottom: ${theme.s()};

    ${props => props.isSent ? `display: none;` : ''}

    @media ${under.mobile} {
        flex-direction: ${props => props.mobileLayout};
    }
`

export const StyledInput = styled.input`
    flex: 1 1 auto;

    margin: 0;
`

export const StyledRadioGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin-top: ${theme.s(2)};

    opacity: .7;

    input {
        margin-right: ${theme.s()};

        flex: 0 0 25px;
    }
    label {
        font-size: .75rem;

        line-height: 1.4;

        display: flex;
    }
`

export const StyledFormResponse = styled.p`
    font-size: 1rem;

    padding: ${theme.s()};

    border-radius: 3px;

    background-color: ${props => props.resType ? 'green' : 'red'};
    color: ${props => props.resType ? 'white' : 'black'};
`

export const StyledCheckbox = styled.input`
    /* width: ${theme.s(6)}; */
`
