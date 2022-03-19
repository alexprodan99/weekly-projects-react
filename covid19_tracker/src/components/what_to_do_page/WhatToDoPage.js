import React from 'react'
import './WhatToDoPage.css'

export default function WhatToDoPage() {
    return (
        <div className="covid-advices">
            <h1>Covid Prevention Advices</h1>
            <div className="covid-advices-img">
                <figure>
                    <img src="images/wash-hands.svg" alt="Wash Hands" />
                    <figcaption>Wash Hands</figcaption>
                </figure>
                <figure>
                    <img src="images/stay-home.svg" alt="Stay Home" />
                    <figcaption>Stay Home</figcaption>
                </figure>
                <figure>
                    <img
                        src="images/social-distancing.svg"
                        alt="Social Distancing"
                    />
                    <figcaption>Social Distancing</figcaption>
                </figure>
            </div>
        </div>
    )
}
