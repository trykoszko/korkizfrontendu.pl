import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetWrapper = ({ title }) => {
    return (
        <Helmet>
            <title>{title ? title : `Korki z Front-endu`}</title>
            <meta name="title" content="Korki z Front-endu - szkolenie z tworzenia stron internetowych"></meta>
            <meta name="description" content="HTML, CSS i JS już nigdy nie będą dla Ciebie utrapieniem! Naucz się tworzyć strony internetowe z doświadczonym mentorem."></meta>
            <meta name="author" content="sors Michal Trykoszko"></meta>
            <meta name="keywords" content="HTML,CSS,JS,JavaScript,programowanie,frontend,front-end"></meta>

            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content="https://korkizfrontendu.pl/"></meta>
            <meta property="og:title" content="Korki z Front-endu - szkolenie z tworzenia stron internetowych"></meta>
            <meta property="og:description" content="HTML, CSS i JS już nigdy nie będą dla Ciebie utrapieniem! Naucz się tworzyć strony internetowe z doświadczonym mentorem."></meta>
            <meta property="og:image" content="/static/img/og.png"></meta>
            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:url" content="https://korkizfrontendu.pl/"></meta>
            <meta property="twitter:title" content="Korki z Front-endu - szkolenie z tworzenia stron internetowych"></meta>
            <meta property="twitter:description" content="HTML, CSS i JS już nigdy nie będą dla Ciebie utrapieniem! Naucz się tworzyć strony internetowe z doświadczonym mentorem."></meta>
            <meta property="twitter:image" content="/static/img/og.png"></meta>
        </Helmet>
    )
}

export default HelmetWrapper
