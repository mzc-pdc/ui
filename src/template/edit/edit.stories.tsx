import {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {alpha} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';
import WarningIcon from '@mui/icons-material/Warning';
import {
  Autocomplete,
  Box, Button, Chip, Divider,
  Grid, IconButton, List, ListItem, ListItemIcon, ListItemText,
  Stack, TextField,
  Typography,
} from '../../components';
import {theme} from "../../themes";
import {Tooltip} from "../../components/tooltip";

const meta: Meta = {
  title: 'TEMPLATE/Edit',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Edit ',
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const BigTitle: Story = {

  parameters: {
    docs: {
      description: {
        story: `일정 Byte 이상이면 font size 가 조절됨.`,
      },
    },
  },
  render: args => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('TitleName0101010101010101010101010101010101010101010101010101010101010101010101010101010101');
    const threshold = 255;
    const handleChange = event => {
      const newText = event.target.value;
      setText(newText);
    };

    return (
      <>
        {edit ? (
          <Stack>
            <TextField
              fullWidth
              multiline
              value={text}
              onChange={handleChange}
              sx={{
                '.MuiInputBase-root': {
                  minHeight: `46px`,
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
                  fontSize: text.length > threshold ? '16px' : '20px',
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
              <Typography variant={text.length > threshold ? 'subtitle2' : 'h3'} component={'p'}
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
      </>
    )
  }
}


export const SmallTitle: Story = {
  parameters: {
    docs: {
      description: {
        story: `일정 Byte 이상이면 font size 가 조절됨.`,
      },
    },
  },
  render: args => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('SmallTitleName');
    const threshold = 255;
    const handleChange = event => {
      const newText = event.target.value;
      setText(newText);
    };

    return (
      <>
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
      </>
    )
  }
}


export const Property: Story = {
  render: args => {
    const [editLabel, setEditLabel] = useState(false);
    const [editAttribution, setEditAttribution] = useState(false);
    const [editTags, setEditTags] = useState(false);
    return (
      <List>
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
                  variant={'body2'}
                  color={theme.palette.secondary[600]}
                  mb={1}
                >
                  title
                </Typography>
                {!editLabel && (
                  <Tooltip title={'Edit'}>
                    <IconButton
                      circled
                      variant={"dashed"}
                      size={'xsmall'}
                      color={'secondary'}
                      onClick={() => {
                        setEditLabel(true)
                      }}
                    >
                      <EditIcon fontSize={'small'} sx={{fontSize: `12px`}}/>
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
            }
            secondary={<>
              {editLabel ? (
                <Stack>
                  <TextField/>
                  <Grid container gap={0.5} mt={0.5} justifyContent={'flex-end'}>
                    <IconButton
                      color={`inherit`}
                      size={`medium`}
                      variant={'outlined'}
                      onClick={() => {
                        setEditLabel(false)
                      }}
                    >
                      <CloseIcon/>
                    </IconButton>
                    <IconButton
                      color={`primary`}
                      size={`medium`}
                      variant={'outlined'}
                      onClick={() => {
                        setEditLabel(false)
                      }}
                    >
                      <CheckIcon/>
                    </IconButton>
                  </Grid>
                </Stack>
              ) : (
                <>
                  <Typography color="text.primary" component="span" sx={{display: 'inline'}} variant="body2">Ali
                    Connors</Typography>
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
                  variant={'body2'}
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
                        primary={<Typography>Primary</Typography>}
                        secondary={<Typography> : Secondary</Typography>}
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
                  variant={'body2'}
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
    )
  }
}