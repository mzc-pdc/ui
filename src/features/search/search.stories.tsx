import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {alpha, ClickAwayListener} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import {
    Autocomplete, Badge,
    Box,
    Button,
    Checkbox,
    Chip,
    Divider,
    Grid,
    ListItem,
    Popper,
    TextField,
    Typography
} from '../../components';
import {theme} from "../../themes";

const meta: Meta<typeof Chip> = {
    title: 'Features/Search',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Search ',
            },
        },
    },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const playground: Story = {
    render: args => {


        interface LabelType {
            name: string;
            description?: string;
        }

        const labels = [
            {
                label: "good first issue",
                description: "Good for newcomers"
            },
            {
                label: "help wanted",
                description: "Extra attention is needed"
            },
            {
                label: "priority: critical",
                description: ""
            },
            {
                label: "priority: high",
                description: ""
            },
            {
                label: "priority: low",
                description: ""
            },
            {
                label: "priority: medium",
                description: ""
            },
            {
                label: "status: can't reproduce",
                description: ""
            },
            {
                label: "status: confirmed",
                description: ""
            },
            {
                label: "status: duplicate",
                description: "This issue or pull request already exists"
            },
            {
                label: "status: needs information",
                description: ""
            },
            {
                label: "status: wont do/fix",
                description: "This will not be worked on"
            },
            {
                label: "type: bug",
                description: "Something isn't working"
            },
            {
                label: "type: discussion",
                description: ""
            },
            {
                label: "type: documentation",
                description: ""
            },
            {
                label: "type: enhancement",
                description: ""
            },
            {
                label: "type: epic",
                description: "A theme of work that contain sub-tasks"
            },
            {
                label: "type: feature request",
                description: "New feature or request"
            },
            {
                label: "type: question",
                description: "Further information is requested"
            }
        ];


        interface PopperComponentProps {
            anchorEl?: any;
            disablePortal?: boolean;
            open: boolean;
        }

        function PopperComponent(props: PopperComponentProps) {
            const {disablePortal, anchorEl, open, ...other} = props;
            return (
                <Box
                    {...other}
                    sx={{".MuiPaper-root": {boxShadow: "none", margin: 0}}}
                />
            );
        }

        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const [value, setValue] = React.useState<LabelType[]>([]);
        const [pendingValue, setPendingValue] = React.useState<LabelType[]>([]);

        const handleChipClick = (event: React.MouseEvent<HTMLElement>) => {
            console.info("You clicked the Chip.");
            setPendingValue(value);
            setAnchorEl(event.currentTarget);
        };

        const handleChipDelete = () => {
            console.info("You clicked the delete icon.");
            setValue([]);
        };

        const handleClose = () => {
            setValue(pendingValue);
            if (anchorEl) {
                anchorEl.focus();
            }
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? "search-filter-open" : undefined;


        return (
            <React.Fragment>
                <Chip
                    label={
                        <Grid container gap={0.5} alignItems="center">
                            <Typography variant={'body3Regular'} color={ value.length > 0 ? "primary" : "secondary"}>
                                Labels
                            </Typography>
                            <Typography>{value[0]?.label}</Typography>
                            {value.length > 1 && (
                                <Badge
                                    badgeContent={<>+ {value.length - 1}</>}
                                    color="primary"
                                    position={false}
                                />
                            )}
                            <span
                                style={{
                                    display: `inline-flex`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                    width: `20px`,
                                    height: `20px`,
                                    borderRadius: `20px`,
                                }}
                            >
                                <ArrowDropDownIcon/>
                            </span>
                            {value.length > 0 && <Divider flexItem orientation="vertical"/>}
                        </Grid>
                    }
                    onClick={handleChipClick}
                    onDelete={value.length > 0 ? handleChipDelete : undefined}
                />
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    sx={{
                        width: `360px`,
                        offset: 0.25,
                        p: 2,
                        borderRadius: `2px`,
                        boxShadow: `0px 4px 4px 0 rgba(0, 0, 0, 0.05)`,
                        border: `1px solid #dfdfee`,
                        backgroundColor: theme.palette.common.white,
                    }}
                >
                    <ClickAwayListener onClickAway={handleClose}>
                        <div>
                            <Autocomplete
                                open
                                multiple
                                value={pendingValue}
                                onChange={(event, newValue, reason) => {
                                    setPendingValue(newValue);
                                }}
                                disableCloseOnSelect
                                PopperComponent={PopperComponent}
                                renderTags={(value) =>
                                    value.map((label, index) => (
                                        <Chip
                                            key={index}
                                            label={label.label}
                                            onDelete={() => {
                                                console.log("chip delete click");
                                            }}
                                        />
                                    ))
                                }
                                noOptionsText={
                                    <Grid
                                        container
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        textAlign="center"
                                        sx={{
                                            p: 3
                                        }}
                                    >
                                        <SearchOffIcon/>
                                        <Typography>No labels</Typography>
                                    </Grid>
                                }
                                renderOption={(props, option, {selected}) => (
                                    <ListItem
                                        {...props}
                                        disablePadding
                                        selected={selected}
                                        style={{backgroundColor: selected ? "#c9d4f4" : "#fff"}}
                                    >
                                        <Checkbox checked={selected} color={'default'}/>
                                        <Box sx={{flexGrow: 1}}>
                                            <p style={{margin: 0}}>{option.label}</p>
                                            <span style={{fontSize: 12}}>{option.description}</span>
                                        </Box>
                                    </ListItem>
                                )}
                                options={[...labels].sort((a, b) => {
                                    // Display the selected labels first.
                                    let ai = value.indexOf(a);
                                    ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                                    let bi = value.indexOf(b);
                                    bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                                    return ai - bi;
                                })}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        inputProps={params.inputProps}
                                        placeholder="Filter labels"
                                        sx={{
                                            marginBottom: 1,
                                            gap: 0.5,
                                        }}
                                    />
                                )}
                                forcePopupIcon={false}
                                fullWidth
                            />
                            <Divider sx={{mt: 1, mb: 1.5}}/>
                            <Grid container justifyContent="flex-end" gap={0.5}>
                                <Button size={'small'} variant={'outlined'} color={'secondary'}>취소</Button>
                                <Button variant="contained" color="primary" size={'small'} onClick={handleClose}>
                                    적용
                                </Button>
                            </Grid>
                        </div>
                    </ClickAwayListener>
                </Popper>
            </React.Fragment>
        )
    }
};
