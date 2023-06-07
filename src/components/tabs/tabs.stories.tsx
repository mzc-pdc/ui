import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Typography} from "@mui/material";
import {Tabs} from "./tabs";
import {Box} from "../box";
import {Tab} from "../tab";
import {Badge} from "../badge";


const meta: Meta<typeof Tabs> = {
    title: 'Components / Tabs',
    tags: ['autodocs'],
    component: Tabs,
    parameters: {
        docs: {
            description: {
                component: 'Tabs Description',
            },
        },
    },
    args: {
        textColor: 'secondary',
        indicatorColor: 'secondary'
        //storybook common args
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        interface TabPanelProps {
            children?: React.ReactNode;
            index: number;
            value: number;
        }

        function TabPanel(props: TabPanelProps) {
            const { children, value, index, ...other } = props;

            return (
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box sx={{ p: 3 }}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            );
        }
        const [value, setValue] = React.useState(0);

        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };
        return (
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}

                        textColor={args.textColor}
                        indicatorColor={args.indicatorColor}
                    >
                        <Tab label="Item One"  />
                        <Tab label="Item Two"  disabled/>
                        <Tab label="Item Three"  icon={<Badge badgeContent={4} color="primary" position={false}/>} iconPosition="end" ></Tab>
                        <Tab label="Item four"  />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item four
                </TabPanel>
            </Box>
        )
    }
}


export const Scrollable: Story = {
    render: args => {
        interface TabPanelProps {
            children?: React.ReactNode;
            index: number;
            value: number;
        }

        function TabPanel(props: TabPanelProps) {
            const { children, value, index, ...other } = props;

            return (
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box sx={{ p: 3 }}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            );
        }
        const [value, setValue] = React.useState(0);

        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };
        return (
            <Box sx={{ width: '400px' }}>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        textColor={args.textColor}
                        indicatorColor={args.indicatorColor}
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Four" />
                        <Tab label="Item Five" />
                        <Tab label="Item Six" />
                        <Tab label="Item Seven" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Seven
                </TabPanel>
            </Box>
        )
    }
}


