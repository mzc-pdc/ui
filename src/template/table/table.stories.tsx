import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {alpha} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReplayIcon from '@mui/icons-material/Replay';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EditIcon from "@mui/icons-material/Edit";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import {
  Box, Button, Checkbox, Collapse, Divider,
  Grid, IconButton, List, ListItem, ListItemText, Menu, MenuItem, MenuList, Popover,
  Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,
  Typography,
} from '../../components';
import {AdvancedSearch} from "../advanced-search/advanced-search.stories";
import {theme} from "../../themes";
import {Tooltip} from "../../components/tooltip";

const meta: Meta = {
  title: 'TEMPLATE/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Table ',
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function createData(
  cellA: string,
  cellB: string,
  cellC: string,
  cellD: any,
  cellE: any,
  cellF: any
) {
  return {cellA, cellB, cellC, cellD, cellE, cellF};
}


export const Basic: Story = {
  render: args => {
    const [settingAnchorEl, setSettingAnchorEl] = React.useState<null | HTMLElement>(null);
    const settingOpen = Boolean(settingAnchorEl);
    const handleSettingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSettingAnchorEl(event.currentTarget);
    };
    const handleSettingClose = () => {
      setSettingAnchorEl(null);
    };

    const [cellMenuAnchorEl, setCellMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const cellMenuOpen = Boolean(cellMenuAnchorEl);
    const handleCellMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCellMenuAnchorEl(event.currentTarget);
    };
    const handleCellMenuClose = () => {
      setCellMenuAnchorEl(null);
    };

    const rows = [
      createData(
        'cell A',
        'cell B',
        'cell C',
        'cell D',
        'cell E',
        <>
          <IconButton
            size={'medium'}
            circled
            onClick={handleCellMenuClick}
          >
            <MoreHorizIcon fontSize={'small'}/>
          </IconButton>
          <Menu
            anchorEl={cellMenuAnchorEl}
            open={cellMenuOpen}
            onClose={handleCellMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: '160px',
              },
            }}
          >
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu A</MenuItem>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu B</MenuItem>
            <Divider/>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu C</MenuItem>
          </Menu>
        </>),
    ];
    return (
      <>
        <Grid container alignItems={'center'} py={1.5} px={1}>
          <AdvancedSearch/>
        </Grid>
        <TableContainer sx={{borderTop: `1px solid #dfdfee`}}>
          <Table stickyHeader>
            <colgroup>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col width={'60px'}/>
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Column A</TableCell>
                <TableCell>Column B</TableCell>
                <TableCell>Column C</TableCell>
                <TableCell>Column D</TableCell>
                <TableCell>Column E</TableCell>
                <TableCell>
                  <IconButton
                    size={'medium'}
                    circled
                    onClick={handleSettingClick}
                  >
                    <SettingsIcon fontSize={'small'}/>
                  </IconButton>
                  <Popover
                    anchorEl={settingAnchorEl}
                    open={settingOpen}
                    onClose={handleSettingClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      style: {
                        width: `320px`
                      }
                    }}
                  >
                    {/* 검색 기능은 열이 7개 이상일 경우 사용 */}
                    <Box p={1}>
                      <TextField
                        fullWidth
                        type="search"
                        variant="outlined"
                      />
                    </Box>
                    <MenuList
                      disablePadding
                      sx={{
                        maxHeight: `300px`,
                        overflowY: `auto`
                      }}
                    >
                      <MenuItem><Switch color={'success'}/> Column A</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column B</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column C</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column D</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column E</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column F</MenuItem>
                    </MenuList>
                    <Divider sx={{mt: 1}}/>
                    <Grid container py={1.5} px={1} alignItems={'center'}>
                      <Grid item xs>
                        <Grid container>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Hide all
                          </Button>
                          <Divider flexItem orientation={'vertical'} sx={{mx: 1, my: 0.75}}/>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Show all
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <IconButton
                          circled
                        >
                          <ReplayIcon fontSize={'small'}/>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Popover>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  hover
                  key={row.cellA}
                >
                  <TableCell>
                    {row.cellA}
                  </TableCell>
                  <TableCell>{row.cellB}</TableCell>
                  <TableCell>{row.cellC}</TableCell>
                  <TableCell>{row.cellD}</TableCell>
                  <TableCell>{row.cellE}</TableCell>
                  <TableCell>
                    {row.cellF}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}


export const Selecting: Story = {
  render: args => {
    const [settingAnchorEl, setSettingAnchorEl] = React.useState<null | HTMLElement>(null);
    const settingOpen = Boolean(settingAnchorEl);
    const handleSettingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSettingAnchorEl(event.currentTarget);
    };
    const handleSettingClose = () => {
      setSettingAnchorEl(null);
    };

    const [cellMenuAnchorEl, setCellMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const cellMenuOpen = Boolean(cellMenuAnchorEl);
    const handleCellMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCellMenuAnchorEl(event.currentTarget);
    };
    const handleCellMenuClose = () => {
      setCellMenuAnchorEl(null);
    };

    const rows = [
      createData(
        'cell A',
        'cell B',
        'cell C',
        'cell D',
        'cell E',
        <>
          <IconButton
            size={'medium'}
            circled
            onClick={handleCellMenuClick}
          >
            <MoreHorizIcon fontSize={'small'}/>
          </IconButton>
          <Menu
            anchorEl={cellMenuAnchorEl}
            open={cellMenuOpen}
            onClose={handleCellMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: '160px',
              },
            }}
          >
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu A</MenuItem>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu B</MenuItem>
            <Divider/>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu C</MenuItem>
          </Menu>
        </>),
    ];
    return (
      <>
        <Grid container alignItems={'center'} py={1.5} px={1}>
          <AdvancedSearch isCheck/>
        </Grid>
        <TableContainer sx={{borderTop: `1px solid #dfdfee`}}>
          <Table stickyHeader>
            <colgroup>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col width={'60px'}/>
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Column A</TableCell>
                <TableCell>Column B</TableCell>
                <TableCell>Column C</TableCell>
                <TableCell>Column D</TableCell>
                <TableCell>Column E</TableCell>
                <TableCell>
                  <IconButton
                    size={'medium'}
                    circled
                    onClick={handleSettingClick}
                  >
                    <SettingsIcon fontSize={'small'}/>
                  </IconButton>
                  <Popover
                    anchorEl={settingAnchorEl}
                    open={settingOpen}
                    onClose={handleSettingClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      style: {
                        width: `320px`
                      }
                    }}
                  >
                    {/* 검색 기능은 열이 7개 이상일 경우 사용 */}
                    <Box p={1}>
                      <TextField
                        fullWidth
                        type="search"
                        variant="outlined"
                      />
                    </Box>
                    <MenuList
                      disablePadding
                      sx={{
                        maxHeight: `300px`,
                        overflowY: `auto`
                      }}
                    >
                      <MenuItem><Switch color={'success'}/> Column A</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column B</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column C</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column D</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column E</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column F</MenuItem>
                    </MenuList>
                    <Divider sx={{mt: 1}}/>
                    <Grid container py={1.5} px={1} alignItems={'center'}>
                      <Grid item xs>
                        <Grid container>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Hide all
                          </Button>
                          <Divider flexItem orientation={'vertical'} sx={{mx: 1, my: 0.75}}/>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Show all
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <IconButton
                          circled
                        >
                          <ReplayIcon fontSize={'small'}/>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Popover>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  hover
                  key={row.cellA}
                >
                  <TableCell>
                    <Checkbox color='secondary'/>
                    <Typography ml={1}>{row.cellA}</Typography>
                  </TableCell>
                  <TableCell>{row.cellB}</TableCell>
                  <TableCell>{row.cellC}</TableCell>
                  <TableCell>{row.cellD}</TableCell>
                  <TableCell>{row.cellE}</TableCell>
                  <TableCell>
                    {row.cellF}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}


export const Ordering: Story = {
  render: args => {
    const [settingAnchorEl, setSettingAnchorEl] = React.useState<null | HTMLElement>(null);
    const settingOpen = Boolean(settingAnchorEl);
    const handleSettingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSettingAnchorEl(event.currentTarget);
    };
    const handleSettingClose = () => {
      setSettingAnchorEl(null);
    };

    const [cellMenuAnchorEl, setCellMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const cellMenuOpen = Boolean(cellMenuAnchorEl);
    const handleCellMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCellMenuAnchorEl(event.currentTarget);
    };
    const handleCellMenuClose = () => {
      setCellMenuAnchorEl(null);
    };

    const rows = [
      createData(
        'cell A',
        'cell B',
        'cell C',
        'cell D',
        'cell E',
        <>
          <IconButton
            size={'medium'}
            circled
            onClick={handleCellMenuClick}
          >
            <MoreHorizIcon fontSize={'small'}/>
          </IconButton>
          <Menu
            anchorEl={cellMenuAnchorEl}
            open={cellMenuOpen}
            onClose={handleCellMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: '160px',
              },
            }}
          >
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu A</MenuItem>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu B</MenuItem>
            <Divider/>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu C</MenuItem>
          </Menu>
        </>),
    ];
    return (
      <>
        <Grid container alignItems={'center'} py={1.5} px={1}>
          <AdvancedSearch/>
        </Grid>
        <TableContainer sx={{borderTop: `1px solid #dfdfee`}}>
          <Table stickyHeader>
            <colgroup>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col width={'60px'}/>
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Column A</TableCell>
                <TableCell>Column B</TableCell>
                <TableCell>Column C</TableCell>
                <TableCell>Column D</TableCell>
                <TableCell>Column E</TableCell>
                <TableCell>
                  <IconButton
                    size={'medium'}
                    circled
                    onClick={handleSettingClick}
                  >
                    <SettingsIcon fontSize={'small'}/>
                  </IconButton>
                  <Popover
                    anchorEl={settingAnchorEl}
                    open={settingOpen}
                    onClose={handleSettingClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      style: {
                        width: `320px`
                      }
                    }}
                  >
                    {/* 검색 기능은 열이 7개 이상일 경우 사용 */}
                    <Box p={1}>
                      <TextField
                        fullWidth
                        type="search"
                        variant="outlined"
                      />
                    </Box>
                    <MenuList
                      disablePadding
                      sx={{
                        maxHeight: `300px`,
                        overflowY: `auto`
                      }}
                    >
                      <MenuItem><Switch color={'success'}/> Column A</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column B</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column C</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column D</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column E</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column F</MenuItem>
                    </MenuList>
                    <Divider sx={{mt: 1}}/>
                    <Grid container py={1.5} px={1} alignItems={'center'}>
                      <Grid item xs>
                        <Grid container>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Hide all
                          </Button>
                          <Divider flexItem orientation={'vertical'} sx={{mx: 1, my: 0.75}}/>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Show all
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <IconButton
                          circled
                        >
                          <ReplayIcon fontSize={'small'}/>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Popover>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  hover
                  key={row.cellA}
                >
                  <TableCell>
                    <IconButton
                      circled
                    >
                      <DragIndicatorIcon fontSize={'small'}/>
                    </IconButton>
                    <Typography ml={1}>{row.cellA}</Typography>
                  </TableCell>
                  <TableCell>{row.cellB}</TableCell>
                  <TableCell>{row.cellC}</TableCell>
                  <TableCell>{row.cellD}</TableCell>
                  <TableCell>{row.cellE}</TableCell>
                  <TableCell>
                    {row.cellF}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}


export const Thumbnail: Story = {
  render: args => {
    const [settingAnchorEl, setSettingAnchorEl] = React.useState<null | HTMLElement>(null);
    const settingOpen = Boolean(settingAnchorEl);
    const handleSettingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSettingAnchorEl(event.currentTarget);
    };
    const handleSettingClose = () => {
      setSettingAnchorEl(null);
    };

    const [cellMenuAnchorEl, setCellMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const cellMenuOpen = Boolean(cellMenuAnchorEl);
    const handleCellMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCellMenuAnchorEl(event.currentTarget);
    };
    const handleCellMenuClose = () => {
      setCellMenuAnchorEl(null);
    };

    const rows = [
      createData(
        'cell Acell Acell Acell Acell Acell Acell Acell Acell Acell Acell Acell Acell Acell Acell Acell Acell A',
        'cell B',
        'cell C',
        'cell D',
        'cell E',
        <>
          <IconButton
            size={'medium'}
            circled
            onClick={handleCellMenuClick}
          >
            <MoreHorizIcon fontSize={'small'}/>
          </IconButton>
          <Menu
            anchorEl={cellMenuAnchorEl}
            open={cellMenuOpen}
            onClose={handleCellMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: '160px',
              },
            }}
          >
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu A</MenuItem>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu B</MenuItem>
            <Divider/>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu C</MenuItem>
          </Menu>
        </>),
    ];
    return (
      <>
        <Grid container alignItems={'center'} py={1.5} px={1}>
          <AdvancedSearch isCheck/>
        </Grid>
        <TableContainer sx={{borderTop: `1px solid #dfdfee`}}>
          <Table stickyHeader>
            <colgroup>
              <col width={'350px'}/>
              <col width={'150px'}/>
              <col width={'150px'}/>
              <col width={'150px'}/>
              <col width={'150px'}/>
              <col width={'60px'}/>
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Column A</TableCell>
                <TableCell>Column B</TableCell>
                <TableCell>Column C</TableCell>
                <TableCell>Column D</TableCell>
                <TableCell>Column E</TableCell>
                <TableCell>
                  <IconButton
                    size={'medium'}
                    circled
                    onClick={handleSettingClick}
                  >
                    <SettingsIcon fontSize={'small'}/>
                  </IconButton>
                  <Popover
                    anchorEl={settingAnchorEl}
                    open={settingOpen}
                    onClose={handleSettingClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      style: {
                        width: `320px`
                      }
                    }}
                  >
                    {/* 검색 기능은 열이 7개 이상일 경우 사용 */}
                    <Box p={1}>
                      <TextField
                        fullWidth
                        type="search"
                        variant="outlined"
                      />
                    </Box>
                    <MenuList
                      disablePadding
                      sx={{
                        maxHeight: `300px`,
                        overflowY: `auto`
                      }}
                    >
                      <MenuItem><Switch color={'success'}/> Column A</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column B</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column C</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column D</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column E</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column F</MenuItem>
                    </MenuList>
                    <Divider sx={{mt: 1}}/>
                    <Grid container py={1.5} px={1} alignItems={'center'}>
                      <Grid item xs>
                        <Grid container>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Hide all
                          </Button>
                          <Divider flexItem orientation={'vertical'} sx={{mx: 1, my: 0.75}}/>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Show all
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <IconButton
                          circled
                        >
                          <ReplayIcon fontSize={'small'}/>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Popover>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  hover
                  key={row.cellA}
                >
                  <TableCell>
                    <Grid container alignItems={'center'} flexWrap={'nowrap'}>
                      <Checkbox color='secondary'/>
                      <Box sx={{
                        minWidth: 44,
                        width: 44,
                        height: 44,
                        borderRadius: `4px`,
                        backgroundColor: alpha('#e5e7ed', 0.5),
                        overflow: `hidden`,
                        ml: 1,
                        mr: 1.5
                      }}>
                        <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt=""
                             style={{
                               width: 44,
                               height: 44,
                               objectFit: `cover`
                             }}
                        />
                      </Box>
                      <Stack sx={{maxWidth: `300px`}}>
                        <Typography variant={'body1Regular'} noWrap>{row.cellA}</Typography>
                        <Typography mt={0.5} variant={'body3Regular'} color={'#6f6f83'} noWrap>{row.cellA}</Typography>
                      </Stack>
                    </Grid>
                  </TableCell>
                  <TableCell>{row.cellB}</TableCell>
                  <TableCell>{row.cellC}</TableCell>
                  <TableCell>{row.cellD}</TableCell>
                  <TableCell>{row.cellE}</TableCell>
                  <TableCell>
                    {row.cellF}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}

export const Accordion: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false);
    const [settingAnchorEl, setSettingAnchorEl] = React.useState<null | HTMLElement>(null);
    const settingOpen = Boolean(settingAnchorEl);
    const handleSettingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSettingAnchorEl(event.currentTarget);
    };
    const handleSettingClose = () => {
      setSettingAnchorEl(null);
    };

    const [cellMenuAnchorEl, setCellMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const cellMenuOpen = Boolean(cellMenuAnchorEl);
    const handleCellMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCellMenuAnchorEl(event.currentTarget);
    };
    const handleCellMenuClose = () => {
      setCellMenuAnchorEl(null);
    };

    const rows = [
      createData(
        'cell A',
        'cell B',
        'cell C',
        'cell D',
        'cell E',
        <Grid container alignItems={'center'} justifyContent={'flex-end'} gap={2.5}>
          <IconButton
            size={'medium'}
            circled
            onClick={handleCellMenuClick}
          >
            <MoreHorizIcon fontSize={'small'}/>
          </IconButton>
          <Menu
            anchorEl={cellMenuAnchorEl}
            open={cellMenuOpen}
            onClose={handleCellMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: '160px',
              },
            }}
          >
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu A</MenuItem>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu B</MenuItem>
            <Divider/>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu C</MenuItem>
          </Menu>
          <IconButton
            circled
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </Grid>),
    ];
    return (
      <>
        <Grid container alignItems={'center'} py={1.5} px={1}>
          <AdvancedSearch isCheck/>
        </Grid>
        <TableContainer sx={{borderTop: `1px solid #dfdfee`}}>
          <Table stickyHeader>
            <colgroup>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col width={'120px'}/>
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Column A</TableCell>
                <TableCell>Column B</TableCell>
                <TableCell>Column C</TableCell>
                <TableCell>Column D</TableCell>
                <TableCell>Column E</TableCell>
                <TableCell align={'right'}>
                  <IconButton
                    size={'medium'}
                    circled
                    onClick={handleSettingClick}
                  >
                    <SettingsIcon fontSize={'small'}/>
                  </IconButton>
                  <Popover
                    anchorEl={settingAnchorEl}
                    open={settingOpen}
                    onClose={handleSettingClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      style: {
                        width: `320px`
                      }
                    }}
                  >
                    {/* 검색 기능은 열이 7개 이상일 경우 사용 */}
                    <Box p={1}>
                      <TextField
                        fullWidth
                        type="search"
                        variant="outlined"
                      />
                    </Box>
                    <MenuList
                      disablePadding
                      sx={{
                        maxHeight: `300px`,
                        overflowY: `auto`
                      }}
                    >
                      <MenuItem><Switch color={'success'}/> Column A</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column B</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column C</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column D</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column E</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column F</MenuItem>
                    </MenuList>
                    <Divider sx={{mt: 1}}/>
                    <Grid container py={1.5} px={1} alignItems={'center'}>
                      <Grid item xs>
                        <Grid container>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Hide all
                          </Button>
                          <Divider flexItem orientation={'vertical'} sx={{mx: 1, my: 0.75}}/>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Show all
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <IconButton
                          circled
                        >
                          <ReplayIcon fontSize={'small'}/>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Popover>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  hover
                  key={row.cellA}
                >
                  <TableCell>
                    <Checkbox color='secondary'/>
                    <Typography ml={1}>{row.cellA}</Typography>
                  </TableCell>
                  <TableCell>{row.cellB}</TableCell>
                  <TableCell>{row.cellC}</TableCell>
                  <TableCell>{row.cellD}</TableCell>
                  <TableCell>{row.cellE}</TableCell>
                  <TableCell align={'right'}>
                    {row.cellF}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell sx={{p: 0, borderBottom: 0}} colSpan={6}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{p: 2.5, borderBottom: `1px solid #dfdfee`, backgroundColor: `#fcfcfc`}}>
                      <Grid container>
                        <Grid item xs={4}>
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

                                    <Tooltip title={'Edit'}>
                                      <IconButton
                                        circled
                                        variant={"dashed"}
                                        size={'xsmall'}
                                        color={'secondary'}
                                      >
                                        <EditIcon fontSize={'small'} sx={{fontSize: `12px`}}/>
                                      </IconButton>
                                    </Tooltip>
                                  </Grid>
                                }
                                secondary={<>

                                  <Typography color="text.primary" component="span" sx={{display: 'inline'}}
                                              variant="body2">Ali
                                    Connors</Typography>

                                </>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={4}>
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

                                    <Tooltip title={'Edit'}>
                                      <IconButton
                                        circled
                                        variant={"dashed"}
                                        size={'xsmall'}
                                        color={'secondary'}
                                      >
                                        <EditIcon fontSize={'small'} sx={{fontSize: `12px`}}/>
                                      </IconButton>
                                    </Tooltip>
                                  </Grid>
                                }
                                secondary={<>

                                  <Typography color="text.primary" component="span" sx={{display: 'inline'}}
                                              variant="body2">Ali
                                    Connors</Typography>

                                </>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={4}>
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

                                    <Tooltip title={'Edit'}>
                                      <IconButton
                                        circled
                                        variant={"dashed"}
                                        size={'xsmall'}
                                        color={'secondary'}
                                      >
                                        <EditIcon fontSize={'small'} sx={{fontSize: `12px`}}/>
                                      </IconButton>
                                    </Tooltip>
                                  </Grid>
                                }
                                secondary={<>

                                  <Typography color="text.primary" component="span" sx={{display: 'inline'}}
                                              variant="body2">Ali
                                    Connors</Typography>

                                </>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}

export const functionUse: Story = {
  render: args => {
    const [settingAnchorEl, setSettingAnchorEl] = React.useState<null | HTMLElement>(null);
    const settingOpen = Boolean(settingAnchorEl);
    const handleSettingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSettingAnchorEl(event.currentTarget);
    };
    const handleSettingClose = () => {
      setSettingAnchorEl(null);
    };

    const [cellMenuAnchorEl, setCellMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const cellMenuOpen = Boolean(cellMenuAnchorEl);
    const handleCellMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setCellMenuAnchorEl(event.currentTarget);
    };
    const handleCellMenuClose = () => {
      setCellMenuAnchorEl(null);
    };

    const rows = [
      createData(
        'cell A',
        'cell B',
        'cell C',
        <>
          <Grid container gap={1.5}>
            <IconButton
              size={'medium'}
              circled
              onClick={handleCellMenuClick}
            >
              <FileDownloadIcon fontSize={'small'}/>
            </IconButton>
            <IconButton
              size={'medium'}
              circled
              onClick={handleCellMenuClick}
            >
              <DriveFileMoveIcon fontSize={'small'}/>
            </IconButton>
            <IconButton
              size={'medium'}
              circled
              onClick={handleCellMenuClick}
            >
              <InsertLinkIcon fontSize={'small'}/>
            </IconButton>
          </Grid>
        </>,
        <>
          <Switch color={'success'}/>
        </>,
        <>
          <IconButton
            size={'medium'}
            circled
            onClick={handleCellMenuClick}
          >
            <MoreHorizIcon fontSize={'small'}/>
          </IconButton>
          <Menu
            anchorEl={cellMenuAnchorEl}
            open={cellMenuOpen}
            onClose={handleCellMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              style: {
                width: '160px',
              },
            }}
          >
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu A</MenuItem>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu B</MenuItem>
            <Divider/>
            <MenuItem size={'medium'} onClick={handleCellMenuClose}>Menu C</MenuItem>
          </Menu>
        </>),
    ];
    return (
      <>
        <Grid container alignItems={'center'} py={1.5} px={1}>
          <AdvancedSearch isCheck/>
        </Grid>
        <TableContainer sx={{borderTop: `1px solid #dfdfee`}}>
          <Table stickyHeader>
            <colgroup>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col width={'60px'}/>
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Column A</TableCell>
                <TableCell>Column B</TableCell>
                <TableCell>Column C</TableCell>
                <TableCell>Column D</TableCell>
                <TableCell>Column E</TableCell>
                <TableCell>
                  <IconButton
                    size={'medium'}
                    circled
                    onClick={handleSettingClick}
                  >
                    <SettingsIcon fontSize={'small'}/>
                  </IconButton>
                  <Popover
                    anchorEl={settingAnchorEl}
                    open={settingOpen}
                    onClose={handleSettingClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      style: {
                        width: `320px`
                      }
                    }}
                  >
                    {/* 검색 기능은 열이 7개 이상일 경우 사용 */}
                    <Box p={1}>
                      <TextField
                        fullWidth
                        type="search"
                        variant="outlined"
                      />
                    </Box>
                    <MenuList
                      disablePadding
                      sx={{
                        maxHeight: `300px`,
                        overflowY: `auto`
                      }}
                    >
                      <MenuItem><Switch color={'success'}/> Column A</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column B</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column C</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column D</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column E</MenuItem>
                      <MenuItem><Switch color={'success'}/> Column F</MenuItem>
                    </MenuList>
                    <Divider sx={{mt: 1}}/>
                    <Grid container py={1.5} px={1} alignItems={'center'}>
                      <Grid item xs>
                        <Grid container>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Hide all
                          </Button>
                          <Divider flexItem orientation={'vertical'} sx={{mx: 1, my: 0.75}}/>
                          <Button variant={'text'} size={'small'} color={'secondary'}>
                            Show all
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <IconButton
                          circled
                        >
                          <ReplayIcon fontSize={'small'}/>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Popover>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  hover
                  key={row.cellA}
                >
                  <TableCell>
                    <Checkbox color='secondary'/>
                    <Typography ml={1}>{row.cellA}</Typography>
                  </TableCell>
                  <TableCell>{row.cellB}</TableCell>
                  <TableCell>{row.cellC}</TableCell>
                  <TableCell>{row.cellD}</TableCell>
                  <TableCell>{row.cellE}</TableCell>
                  <TableCell>
                    {row.cellF}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}


export const Empty: Story = {
  render: args => {
    return (
    <div style={{height: `500px`}}>
      <Divider sx={{borderColor: `#3c3d4f`}}/>
      <Box
        sx={{
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`
        }}
      >
        <Stack sx={{textAlign: `center`}}>
          <>EmptyIcon</>
          <Typography mt={2.5} gutterBottom variant={'subtitle2'}>No Event Trigger items yet.</Typography>
          <Typography variant={'body3Bold'}>Add it using the “Add Event Trigger” button.</Typography>
        </Stack>
      </Box>
    </div>
    )
  }
}


export const NoSearchResults: Story = {
  render: args => {
    return (
      <div style={{height: `500px`}}>
        <Divider sx={{borderColor: `#3c3d4f`}}/>
        <Box
          sx={{
            width: `100%`,
            height: `100%`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`
          }}
        >
          <Stack sx={{textAlign: `center`}}>
            <>EmptyIcon</>
            <Typography mt={2.5} gutterBottom variant={'subtitle2'}>None of assets matched this search</Typography>
            <Typography variant={'body3Bold'}>Try another search,<br/>or use the search option to find an asset.</Typography>
          </Stack>
        </Box>
      </div>
    )
  }
}