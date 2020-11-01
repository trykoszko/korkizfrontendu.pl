import React, { useState } from 'react'
import {
    StyledAccordion,
    StyledAccordionItem,
    StyledAccordionHeader,
    StyledAccordionContent,
    StyledChevronWrapper,
    StyledChevron
} from './AccordionStyles'

import chevron_down from '../../../static/chevron_down.svg'

const AccordionHeader = ({ children, onClick, isOpen }) => {
    return (
        <StyledAccordionHeader onClick={onClick} isOpen={isOpen}>
            {children}
        </StyledAccordionHeader>
    )
}
const AccordionContent = ({ children, isOpen }) => <StyledAccordionContent isOpen={isOpen}><p>{children}</p></StyledAccordionContent>

const AccordionChevron = ({ src }) => <StyledChevronWrapper><StyledChevron src={src} /></StyledChevronWrapper>

const AccordionItem = ({ title, content, itemIndex }) => {
    const [isOpen, setIsOpen] = useState(itemIndex === 0)
    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <StyledAccordionItem>
            <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
                <span>#{itemIndex + 1}</span>
                <strong>{title}</strong>
                <AccordionChevron src={chevron_down} />
            </AccordionHeader>
            <AccordionContent isOpen={isOpen}>
                {content}
            </AccordionContent>
        </StyledAccordionItem>
    )
}

const Accordion = ({ items }) => (
    <StyledAccordion>
        {items.map((item, index) => <AccordionItem key={index} itemIndex={index} title={item.title} content={item.content} />)}
    </StyledAccordion>
)

export default Accordion
