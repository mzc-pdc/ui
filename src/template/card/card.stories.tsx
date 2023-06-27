import {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {alpha, CardActionArea} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import {
  Autocomplete, Avatar,
  Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, Divider,
  Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem,
  Stack, TextField, ToggleButton,
  Typography,
} from '../../components';
import {theme} from "../../themes";
import {Tooltip} from "../../components/tooltip";

const meta: Meta = {
  title: 'TEMPLATE/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Card ',
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const assetCard: Story = {
  render: args => {
    const [checked, setChecked] = React.useState(false);
    const [selected, setSelected] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    const handleSelected = () => {
      setSelected(!selected);
    };
    return (
      <>
        <Grid container gap={2.5}>
          <Card
            sx={{
              position: `relative`,
              width: `202px`,
              boxShadow: `none`
            }}
          >
            <CardHeader
              action={
                <>
                  <Checkbox color={'default'} checked={checked} onChange={handleChange}/>
                  <IconButton
                    size={'small'}
                    circled
                    sx={{m: 1}}
                    onClick={handleClick}
                  >
                    <MoreHorizIcon/>
                  </IconButton>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: '160px',
                      },
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Move</MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>Download</MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </>
              }
              sx={{
                position: `absolute`,
                width: `100%`,
                zIndex: `1`,
                p: 0,
                '.MuiCardHeader-content': {
                  display: `none`
                },
                '.MuiCardHeader-action': {
                  flexGrow: 1,
                  display: `flex`,
                  justifyContent: `space-between`,
                  m: 0,
                }
              }}
            />
            <CardActionArea
              onClick={handleSelected}
            >
              <Box
                sx={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  width: `202px`,
                  height: `202px`,
                  padding: 1.5,
                  backgroundColor: checked ? alpha('#c9d4f4', 0.4) : selected ? alpha('#c9d4f4', 0.6) : alpha('#e5e7ed', 0.5),
                  borderRadius: `8px`,

                }}
              >
                <CardMedia
                  image="https://mui.com/static/images/cards/paella.jpg"
                  sx={{
                    width: `100%`,
                    height: `100%`,
                    backgroundSize: `contain`,
                    backgroundPosition: `center center`,
                    borderRadius: `4px`
                  }}
                  title="green iguana"
                />
              </Box>
            </CardActionArea>
            <CardActionArea
              sx={{
                '.MuiCardActionArea-focusHighlight': {
                  display: `none`
                }
              }}
              onClick={() => {
                console.log('contents click')
              }}
            >
              <CardContent>
                <Stack>
                  <Grid container alignItems={'center'} gap={1}>
                    <SmartDisplayIcon sx={{fontSize: `20px`, color: '#405fff'}}/>
                    <Typography variant={'body1'}>Asset Name</Typography>
                  </Grid>
                  <Grid container alignItems={'center'} gap={1} mt={1}>
                    <LockOpenIcon sx={{fontSize: `16px`, color: '#2e9812'}}/>
                    <Typography variant={'body3Regular'} color={theme.palette.text.secondary}>mp3</Typography>
                    <Divider flexItem orientation={'vertical'}/>
                    <Typography variant={'body3Regular'} color={theme.palette.text.secondary}>290MB</Typography>
                  </Grid>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{
              position: `relative`,
              width: `202px`,
              boxShadow: `none`
            }}
          >
            <CardHeader
              action={
                <>
                  <Checkbox color={'default'} checked={checked} onChange={handleChange}/>
                  <IconButton
                    size={'small'}
                    circled
                    sx={{m: 1}}
                    onClick={handleClick}
                  >
                    <MoreHorizIcon/>
                  </IconButton>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        width: '160px',
                      },
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Move</MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>Download</MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </>
              }
              sx={{
                position: `absolute`,
                width: `100%`,
                zIndex: `1`,
                p: 0,
                '.MuiCardHeader-content': {
                  display: `none`
                },
                '.MuiCardHeader-action': {
                  flexGrow: 1,
                  display: `flex`,
                  justifyContent: `space-between`,
                  m: 0,
                }
              }}
            />
            <CardActionArea
              onClick={handleSelected}
            >
              <Box
                sx={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  width: `202px`,
                  height: `202px`,
                  padding: 1.5,
                  backgroundColor: checked ? alpha('#c9d4f4', 0.4) : selected ? alpha('#c9d4f4', 0.6) : alpha('#e5e7ed', 0.5),
                  borderRadius: `8px`,
                  border: `1px dashed`,
                  borderColor: alpha('#6f6f83', 0.5)
                }}
              >
                <CardMedia
                  image="https://mui.com/static/images/cards/paella.jpg"
                  sx={{
                    width: `100%`,
                    height: `100%`,
                    backgroundSize: `contain`,
                    backgroundPosition: `center center`,
                    borderRadius: `4px`
                  }}
                  title="green iguana"
                />
              </Box>
            </CardActionArea>
            <CardActionArea
              sx={{
                '.MuiCardActionArea-focusHighlight': {
                  display: `none`
                }
              }}
              onClick={() => {
                console.log('contents click')
              }}
            >
              <CardContent>
                <Stack>
                  <Grid container alignItems={'center'} gap={1} flexWrap={'nowrap'}>
                    <SmartDisplayIcon sx={{fontSize: `20px`, color: '#405fff'}}/>
                    <Typography variant={'body1'} noWrap>Asset NameAsset NameAsset NameAsset NameAsset NameAsset NameAsset Name</Typography>
                  </Grid>
                  <Grid container alignItems={'center'} gap={1} mt={1}>
                    <LockIcon sx={{fontSize: `16px`, color: '#6b769a'}}/>
                    <Typography variant={'body3Regular'} color={theme.palette.text.secondary}>mp3</Typography>
                    <Divider flexItem orientation={'vertical'}/>
                    <Typography variant={'body3Regular'} color={theme.palette.text.secondary}>290MB</Typography>
                  </Grid>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </>
    )
  }
}

export const administrationCard: Story = {
  render: args => {
    return (
      <>
        <Card
          variant="outlined"
          sx={{
            width: `336px`,
          }}
        >
          <CardActionArea>
            <CardContent sx={{p: 3, pr: 2}}>
              <Grid container alignItems={'center'} justifyContent={'space-between'} flexWrap={'nowrap'}>
                <Grid item xs sx={{overflow: 'hidden'}}>
                  <Grid container flexWrap={'nowrap'} >
                    <Box
                      sx={{
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        minWidth: 44,
                        width: 44,
                        height: 44,
                        mr: 2,
                        backgroundColor: `#3c3d4f`,
                        borderRadius: `4px`
                      }}
                    >
                      <PermDataSettingIcon sx={{color: `#fff`}}/>
                    </Box>
                    <Stack gap={0.5} sx={{overflow: 'hidden'}} >
                      <Typography variant={'subtitle2'}>
                        Administration
                      </Typography>
                      <Typography variant={'body3Regular'} color={theme.palette.text.secondary} noWrap>
                        Spacename01
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      minWidth: 32,
                      width: 32,
                      height: 32,
                      borderRadius: `50%`,
                      '&:hover': {
                        backgroundColor: alpha('#3c3d4f', 0.08)
                      }
                    }}
                  >
                    <OpenInNewIcon fontSize={'small'}/>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    )
  }
}


export const projectCard: Story = {
  render: args => {
    const [selected, setSelected] = React.useState(false);
    return (
      <>
        <Box
          sx={{
            position: `relative`,
            width: `336px`,
          }}
        >
          <Card variant="outlined">
            <CardActionArea>
              <CardHeader
                avatar={
                  <><LogoDevIcon/></>
                }
                title="Product Name"
                sx={{
                  pl: 3,
                  pt: 3,
                  '.MuiCardHeader-avatar': {
                    mr: 1.5
                  },
                  '.MuiCardHeader-title': {
                    fontSize: 12,
                    fontWeight: `bold`
                  }
                }}
              />
              <CardContent sx={{pl: 3, pb: 3}}>
                <Avatar>P</Avatar>
                <Typography mt={1} mb={0.5} variant={'subtitle2'} component={'p'}>Projectname01</Typography>
                <Typography variant={'body3Regular'} color={theme.palette.text.secondary} noWrap>Spacename01</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <ToggleButton
            size={'small'}
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            sx={{
              position: `absolute`,
              right: 18,
              top: 22,
              border: `none`,
              borderRadius: `50%`,
              '&.Mui-selected': {
                backgroundColor: `transparent`
              }
            }}
          >
            {selected ? <StarIcon sx={{color: `#ff9b02`}} /> : <StarBorderIcon/>}
          </ToggleButton>
        </Box>
      </>
    )
  }
}