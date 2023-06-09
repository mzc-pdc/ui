import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion} from "./accordion";
import {AccordionSummary} from "../accordion-summary";
import {AccordionDetails} from "../accordion-details";

const meta: Meta<typeof Accordion> = {
    title: 'Components/SURFACES/Accordion',
    tags: ['autodocs'],
    component: Accordion,
    args: { //storybook common args
        color: `default`,
    }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return (
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        Accordion 2
                    </AccordionSummary>
                    <AccordionDetails>
                        
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        Disabled Accordion
                    </AccordionSummary>
                </Accordion>
            </div>
        )
    }
}