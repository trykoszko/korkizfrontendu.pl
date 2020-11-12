import styled from 'styled-components'

import {
    theme
} from '../../constants'

import {
    above,
    under
} from '../../helpers/breakpoints'


export const StyledLogoWrapper = styled.a`
    margin: ${theme.s()} 0;
    margin-bottom: ${theme.s(6)};

    font-family: ${theme.monoFont};
    color: ${theme.colorPrimary};

    display: flex;
    flex-direction: row;
    align-items: center;

    ${theme.transitions.ease}

    &:hover {
        transform: translateY(-3px);
    }
`

export const StyledLogo = styled.img`
    max-width: ${props => props.windowScrolled ? 48 : 64}px;
    height: auto;

    ${theme.transitions.ease}

    margin: 0;
    margin-right: ${theme.s(2)};

    @media ${under.tablet} {
        max-width: ${props => props.windowScrolled ? 48 : 80}px;
    }
`

export const StyledLogoDesc = styled.p`
    margin: 0;

    font-size: ${props => props.windowScrolled ? 1 : 1.35}rem;

    ${theme.transitions.ease}

    display: flex;
    flex-direction: column;

    @media ${under.tablet} {
        font-size: ${props => props.windowScrolled ? 1 : 1.8}rem;
    }
`

export const StyledHero = styled.div`
    width: 100%;
    height: 100%;

    color: ${theme.colorDefault};

    overflow: hidden;
`

export const StyledHeroContent = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 10;
`

export const StyledHeroContentWrapper = styled.div`
    width: 100%;

    margin: 0;
    /* margin-top: ${theme.s(3)}; */
    margin-bottom: ${theme.s(3)};

    @media ${above.tablet} {
        margin-top: ${theme.s(6)};
        margin-bottom: ${theme.s(10)};
    }
    @media ${above.smDesktop} {
        max-width: 60%;
    }
`

export const StyledHeading = styled.h1`
    font-size: 2em;
    font-weight: 400;

    line-height: 1.4;

    margin: 0;
    margin-bottom: ${theme.s(3)};

    color: ${theme.colorPrimary};

    @media ${above.mobile} {
        font-size: 2.1em;
    }
    @media ${above.smDesktop} {
        font-size: 2.8em;

        margin-bottom: ${theme.s(4)};
    }
`

export const StyledDesc = styled.div`
    font-family: ${theme.defaultFont};
    font-size: 1rem;
    line-height: 1.8;

    margin: 0;
    margin-bottom: ${theme.s(2)};

    max-width: 100%;

    p {
        margin-bottom: .7rem;
    }

    @media ${above.tablet} {
        margin-bottom: ${theme.s(4)};

        font-size: 1.1rem;
        line-height: 2.2;
    }
    @media ${above.smDesktop} {
        max-width: 95%;
    }
`

export const StyledBgImage = styled.img.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right
    }
}))`
    position: absolute;

    ${props => props.mw ? `max-width: ${props.mw}; height: auto;` : ''}

    z-index: 9;

    @media ${under.smDesktop} {
        display: none;
    }
    @media ${above.desktop} {
        ${props => props.mwDesktop ? `max-width: ${props.mwDesktop}; height: auto;` : ''}
    }
`

export const StyledBgColor = styled.div.attrs(props => ({
    style: {
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right
    }
}))`
    display: block;

    position: absolute;

    ${props => props.mw ? `max-width: ${props.mw}; height: auto;` : ''}

    background-color: ${props => props.bg ? props.bg : 'rgba(255, 255, 255, .7)'};

    width: ${props => props.dimensions};
    height: ${props => props.dimensions};

    ${props => props.rounded ? `border-radius: 100%;` : ''}

    @media ${under.smDesktop} {
        display: none;
    }
`

export const StyledUl = styled.ul`
    line-height: 1.3;
    margin-bottom: ${theme.s(2)};

    li {
        margin-bottom: ${theme.s()};
    }

    @media ${above.tablet} {
        margin-bottom: ${theme.s(3)};

        li {
            margin-bottom: ${theme.s(1.5)};
        }
    }
`

export const StyledCountdown = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;

    margin: ${theme.s(2)} 0;
    margin-bottom: ${theme.s(2)};

    text-align: center;

    p {
        margin: 0;

        padding: ${theme.s(2)};

        text-align: left;

        flex: 0 1 50%;

        &:first-of-type {
            background-color: ${theme.colorOrange};

            span {
                color: white;
            }
        }
        &:last-of-type {
            background-color: white;
        }
    }

    @media ${above.tablet} {
        margin-bottom: ${theme.s(4)};

        max-width: 60%;
    }
    @media ${above.desktop} {
        margin: 0;
        margin-bottom: ${theme.s(4)};

        font-size: 1rem;
    }
`

export const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > a {
        margin-top: ${theme.s(2)};
    }

    @media ${above.tablet} {
        flex-direction: row;
        align-items: center;

        & > a {
            margin-top: 0;
            margin-left: ${theme.s(2)};
        }
    }
`
