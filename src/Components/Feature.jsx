import React from 'react'
import { Collapse } from 'bootstrap'

export default function Feature(props) {
    return (
        <div className="accordion-item rounded-0">
            <h2 className="accordion-header" id={"heading" + props.id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.id} aria-expanded="false" aria-controls={"collapse" + props.id}>
                    {props.title}
                </button>
            </h2>
            <div id={"collapse" + props.id} className="accordion-collapse collapse" aria-labelledby={"heading" + props.id} data-bs-parent="#featureAccordion">
                <div className="accordion-body">
                    {'Feature LVL: ' + props.level} <br />
                    {props.children}
                </div>
            </div>
        </div>
    )
}
