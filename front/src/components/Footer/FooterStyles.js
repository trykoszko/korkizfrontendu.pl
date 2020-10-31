import styled from 'styled-components'

import {
    theme
} from '../../constants'

import {
    above
} from '../../helpers/breakpoints'

export const StyledFooter = styled.div`
    font-size: .8rem;

    height: 100%;
`

export const StyledFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
`

export const StyledFooterColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: ${theme.s(2)};

    & > * {
        margin: 0;
    }
    p {
        line-height: 1.5;
    }
    h4 {
        flex: 0 0 40%;
    }

    @media ${above.desktop} {
        h4 {
            flex: 0 0 20%;
        }
    }
`

export const StyledFooterNav = styled.ul`
    list-style: none;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    font-family: ${theme.monoFont};

    li {
        display: block;

        margin: ${theme.s()} ${theme.s(2)} ${theme.s()} 0;

        padding: 0;
    }

    @media ${above.desktop} {
        justify-content: center;

        li {
            margin: 0;
            margin-right: ${theme.s(2)};
        }
    }
`

export const StyledFooterNavItem = styled.li`
    ${props => props.isCurrent ? `
        a {
            ${theme.underscoreDecor()}

            &:hover {
                &:after {
                    opacity: 1;
                }
            }
        }
    ` : ``}
`

export const StyledCopyright = styled.div`
    width: 100%;

    margin-top: ${theme.s(2)};

    text-align: center;

    p {
        margin: 0;
    }
`
