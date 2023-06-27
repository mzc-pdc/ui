import {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from "@mui/icons-material/Check";
import {alpha} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import WarningIcon from "@mui/icons-material/Warning";
import {theme} from "../../themes";
import {
  Autocomplete,
  Box,
  Button, Chip,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem, ListItemIcon, ListItemText,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from "../../components";
import {Tooltip} from "../../components/tooltip";

const meta: Meta = {
  title: 'TEMPLATE/Panel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '화면 오른쪽에서 콘텐츠를 밀면서 노출'
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('SmallTitleName');
    const [editAttribution, setEditAttribution] = useState(false);
    const [editTags, setEditTags] = useState(false);
    const threshold = 255;
    const handleChange = event => {
      const newText = event.target.value;
      setText(newText);
    };

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };


    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    interface TabPanelProps {
      children?: React.ReactNode;
      index: number;
      value: number;
    }

    function TabPanel(props: TabPanelProps) {
      const {children, value, index, ...other} = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          {...other}
        >
          {value === index && (
            <Box sx={{p: 1.5}}>
              {children}
            </Box>
          )}
        </div>
      );
    }

    return (

      <div>
        <React.Fragment>
          <Button onClick={handleDrawerOpen}>open</Button>
          <Drawer
            variant="persistent"
            anchor="right"
            open={open}

            sx={{
              width: 400,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 400,
              },
            }}
          >
            <Stack height={'100%'}>
              <Grid container alignItems={'center'} justifyContent={'space-between'} p={2} pr={1}>
                <Grid item xs>
                  {edit ? (
                    <Stack>
                      <TextField
                        fullWidth
                        multiline
                        value={text}
                        onChange={handleChange}
                        sx={{
                          '.MuiInputBase-root': {
                            minHeight: `40px`,
                            padding: 1,
                            alignItems: `center`,
                            lineHeight: `1.5`
                          },
                          '.MuiOutlinedInput-notchedOutline ': {
                            borderColor: theme.palette.primary.main,
                          }
                        }}
                        inputProps={{
                          sx: {
                            fontSize: text.length > threshold ? '14px' : '16px',
                          }
                        }}
                      />
                      <Grid container gap={0.5} mt={0.5} justifyContent={'flex-end'}>
                        <IconButton
                          variant={"outlined"}
                          color={'secondary'}
                          onClick={() => {
                            setEdit(false)
                          }}
                        >
                          <CloseIcon fontSize={'small'}/>
                        </IconButton>
                        <IconButton
                          variant={"outlined"}
                          color={'primary'}
                          onClick={() => {
                            setEdit(false)
                          }}
                        >
                          <CheckIcon fontSize={'small'}/>
                        </IconButton>
                      </Grid>
                    </Stack>
                  ) : (
                    <Grid
                      container
                      flexWrap={'nowrap'}
                      gap={1.5}
                      p={1}
                      sx={{
                        borderRadius: `2px`,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                        }
                      }}
                    >
                      <Grid item>
                        <Typography variant={text.length > threshold ? 'body1Bold' : 'subtitle2'} component={'p'}
                                    sx={{wordBreak: `break-all`}}>
                          {text}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Tooltip title={'Edit'}>
                          <IconButton
                            circled
                            variant={"dashed"}
                            size={'small'}
                            color={'secondary'}
                            onClick={() => {
                              setEdit(true)
                            }}
                          >
                            <EditIcon fontSize={'small'} sx={{fontSize: `16px`}}/>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
                <IconButton
                  circled
                  onClick={handleDrawerClose}
                >
                  <CloseIcon fontSize={'small'}/>
                </IconButton>
              </Grid>
              <Stack flex={1}>
                <Box height={225}>
                  <img src={'https://mui.com/static/images/cards/paella.jpg'} alt={''}
                       style={{width: `100%`, height: `100%`, objectFit: `cover`}}/>
                </Box>
                <Tabs
                  value={value}
                  onChange={handleTabChange}
                  indicatorColor="secondary"
                  sx={{
                    '.MuiTabs-flexContainer': {
                      position: `relative`,
                      marginLeft: `-1px`,
                      '&:before': {
                        content: '""',
                        position: `absolute`,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        borderBottom: `1px solid #dfdfee`,
                      },
                      '.MuiTab-root': {
                        position: `relative`,
                        '&:hover': {
                          borderBottomColor: `#fff`
                        }
                      }
                    }
                  }}
                >
                  <Tab label={'Overview'}/>
                  <Tab label={'Metadata'}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                  <List disablePadding>
                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            ID
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.primary" component="span" variant="body1Regular">
                            123213654
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            Status
                          </Typography>
                        }
                        secondary={
                          <Grid container gap={0.5} alignItems={'center'}>
                            <CircleIcon sx={{width: 10, height: 10, color: theme.palette.success.main}}/>
                            <Typography color="success.main" component="span" variant="body1Regular">
                              ACTIVE
                            </Typography>
                          </Grid>
                        }
                      />
                    </ListItem>
                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            Type
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.primary" component="span" variant="body1Regular">
                            FileType
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            Size
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.primary" component="span" variant="body1Regular">
                            250MB
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                  <Divider sx={{my: 1.5}}/>
                  <List disablePadding>
                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            Project
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.primary" component="span" variant="body1Regular">
                            Project Name
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            Owner
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.primary" component="span" variant="body1Regular">
                            Owner Name
                          </Typography>
                        }
                      />
                    </ListItem>

                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            Created
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.primary" component="span" variant="body1Regular">
                            2023-11-28 11:50:35
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem sx={{px: 1.5}}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant={'body3Regular'}
                            component={'p'}
                            color={theme.palette.secondary[600]}
                            mb={1}
                          >
                            Updated
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.primary" component="span" variant="body1Regular">
                            2023-11-28 11:50:35 by updater
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <List disablePadding>
                    <ListItem sx={{
                      borderRadius: `2px`,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                      }
                    }}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Grid container gap={1}>
                            <Typography
                              variant={'body3Regular'}
                              component={'p'}
                              color={theme.palette.secondary[600]}
                              mb={1}
                            >
                              Attributions
                            </Typography>
                            {!editAttribution && (
                              <Tooltip title={'Edit'}>
                                <IconButton
                                  circled
                                  variant={"dashed"}
                                  size={'xsmall'}
                                  color={'secondary'}
                                  onClick={() => {
                                    setEditAttribution(true)
                                  }}
                                >
                                  <EditIcon fontSize={'small'} sx={{fontSize: `12px`}}/>
                                </IconButton>
                              </Tooltip>
                            )}
                          </Grid>
                        }
                        secondary={<>
                          {editAttribution ? (
                            <>
                              <Box
                                sx={{
                                  p: 2,
                                  borderRadius: `2px`,
                                  border: `1px solid ${theme.palette.primary.main}`,
                                  backgroundColor: theme.palette.common.white
                                }}
                              >
                                <Stack gap={0.5} mb={2}>
                                  <Grid container gap={0.5} alignItems={'center'}>
                                    <Grid item xs>
                                      <TextField fullWidth/>
                                    </Grid>
                                    <Grid item xs>
                                      <TextField fullWidth/>
                                    </Grid>
                                    <Grid item>
                                      <IconButton size={'small'}>
                                        <CloseIcon sx={{fontSize: `12px`}}/>
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                  <Grid container gap={0.5} alignItems={'center'}>
                                    <Grid item xs>
                                      <TextField fullWidth/>
                                    </Grid>
                                    <Grid item xs>
                                      <TextField fullWidth/>
                                    </Grid>
                                    <Grid item>
                                      <IconButton size={'small'}>
                                        <CloseIcon sx={{fontSize: `12px`}}/>
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                </Stack>
                                <Divider/>
                                <Grid container gap={1} py={1.5}>
                                  <WarningIcon color={'warning'}/>
                                  <Typography variant={'body1Regular'}>Warning Message</Typography>
                                </Grid>

                                <Button
                                  variant={'outlined'}
                                  color={'secondary'}
                                >
                                  Add
                                </Button>

                              </Box>
                              <Grid container gap={0.5} mt={0.5} justifyContent={'flex-end'}>
                                <IconButton
                                  color={`inherit`}
                                  size={`medium`}
                                  variant={'outlined'}
                                  onClick={() => {
                                    setEditAttribution(false)
                                  }}
                                >
                                  <CloseIcon/>
                                </IconButton>
                                <IconButton
                                  color={`primary`}
                                  size={`medium`}
                                  variant={'outlined'}
                                  onClick={() => {
                                    setEditAttribution(false)
                                  }}
                                >
                                  <CheckIcon/>
                                </IconButton>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <List disablePadding>
                                <ListItem disablePadding>
                                  <ListItemIcon sx={{minWidth: `10px`}}>
                                    <CircleIcon sx={{fontSize: `3px`}}/>
                                  </ListItemIcon>
                                  <ListItemText
                                    sx={{
                                      display: `flex`,
                                      margin: 0,
                                    }}
                                    primary={<Typography variant="body1Regular">Primary</Typography>}
                                    secondary={<Typography variant="body1Regular"> : Secondary</Typography>}
                                  />
                                </ListItem>
                              </List>
                            </>
                          )}
                        </>
                        }
                      />
                    </ListItem>


                    <ListItem sx={{
                      borderRadius: `2px`,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                      }
                    }}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Grid container gap={1}>
                            <Typography
                              variant={'body3Regular'}
                              component={'p'}
                              color={theme.palette.secondary[600]}
                              mb={1}
                            >
                              Tags
                            </Typography>
                            {!editTags && (
                              <Tooltip title={'Edit'}>
                                <IconButton
                                  circled
                                  variant={"dashed"}
                                  size={'xsmall'}
                                  color={'secondary'}
                                  onClick={() => {
                                    setEditTags(true)
                                  }}
                                >
                                  <EditIcon fontSize={'small'} sx={{fontSize: `12px`}}/>
                                </IconButton>
                              </Tooltip>
                            )}
                          </Grid>
                        }
                        secondary={<>
                          {editTags ? (
                            <Stack>
                              <Autocomplete
                                multiple
                                defaultValue={[
                                  {
                                    label: 'Tag1',
                                  }
                                ]}
                                renderInput={params => (
                                  <TextField {...params} placeholder="Tags" />
                                )}
                                getOptionLabel={option => option.label}
                                options={[
                                  {
                                    label: 'Tag1',
                                  },
                                  {
                                    label: 'Tag2',
                                  },
                                  {
                                    label: 'Tag3',
                                  }
                                ]
                                }
                              />
                              <Grid container gap={0.5} mt={0.5} justifyContent={'flex-end'}>
                                <IconButton
                                  color={`inherit`}
                                  size={`medium`}
                                  variant={'outlined'}
                                  onClick={() => {
                                    setEditTags(false)
                                  }}
                                >
                                  <CloseIcon/>
                                </IconButton>
                                <IconButton
                                  color={`primary`}
                                  size={`medium`}
                                  variant={'outlined'}
                                  onClick={() => {
                                    setEditTags(false)
                                  }}
                                >
                                  <CheckIcon/>
                                </IconButton>
                              </Grid>
                            </Stack>
                          ) : (
                            <>
                              <Chip
                                variant={'outlined'}
                                size={'small'}
                                label={'# Tags'}
                              />
                            </>
                          )}
                        </>
                        }
                      />
                    </ListItem>
                  </List>
                </TabPanel>
              </Stack>
              <Button
                variant={'contained'}
                color={'secondary'}
                endIcon={
                  <ArrowCircleRightIcon sx={{color: `#6280ff`}}/>
                }
                sx={{
                  height: 44,
                  justifyContent:'flex-end',
                  borderRadius: 0,
                  '.MuiButton-endIcon': {
                    transition: `transform ${theme.transitions.easing.easeIn} .2s `,
                  },
                  '&:hover': {

                    '.MuiButton-endIcon': {
                      transform: `translateX(10px)`
                    }
                  }
                }}
              >
                Go to Detail
              </Button>
            </Stack>
          </Drawer>
        </React.Fragment>
      </div>
    )
  }
}

