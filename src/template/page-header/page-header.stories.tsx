import {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {alpha, ClickAwayListener} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import SortIcon from '@mui/icons-material/Sort';
import CachedIcon from '@mui/icons-material/Cached';
import ReplayIcon from '@mui/icons-material/Replay';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  Autocomplete, Badge,
  Box, Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  Collapse,
  Divider,
  Grid, IconButton, InputAdornment, Link,
  ListItem,
  Popper, Stack,
  TextField,
  Typography
} from '../../components';
import {theme} from "../../themes";
import {Tooltip} from "../../components/tooltip";

const meta: Meta = {
  title: 'Template/Page header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '목록 및 상세의 최상단',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const firstPage: Story = {
  render: args => {
    return (
      <>
        <Breadcrumbs
          separator={'/'}
        >
          <Link
            color="primary"
            href="/"
            underline="hover"
            variant="body3Regular"
          >
            PDC
          </Link>
          <Link
            color="primary"
            href="/"
            underline="hover"
            variant="body3Regular"
          >
            Core
          </Link>
          <Typography
            color="text.secondary"
            variant="body3Regular"
          >
            Breadcrumbs
          </Typography>
        </Breadcrumbs>
        <Grid container mt={1} mb={2} alignItems={'baseline'}>
          <Typography variant={'h3'} component={'strong'}>
            Title
          </Typography>
          <Button
            variant={'solid'}
            color={'primary'}
          >
            Info
          </Button>
        </Grid>
      </>
    )
  }
}


export const nextDepthPage: Story = {
  render: args => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('TitleName01');
    const threshold = 255;
    const handleChange = event => {
      const newText = event.target.value;
      setText(newText);
    };

    return (
      <>
        <Breadcrumbs
          separator={'/'}
        >
          <Link
            color="primary"
            href="/"
            underline="hover"
            variant="body3Regular"
          >
            PDC
          </Link>
          <Link
            color="primary"
            href="/"
            underline="hover"
            variant="body3Regular"
          >
            Core
          </Link>
          <Typography
            color="text.secondary"
            variant="body3Regular"
          >
            Breadcrumbs
          </Typography>
        </Breadcrumbs>
        <Grid container mt={1} mb={2} flexWrap={'nowrap'} alignItems={'baseline'}>
          <Grid item>
            <IconButton
              circled
              sx={{mt: -1}}
            >
              <ArrowBackIcon/>
            </IconButton>
          </Grid>
          <Grid item xs={edit}>
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
          </Grid>
          <Button
            variant={'solid'}
            color={'primary'}
          >
            Info
          </Button>
        </Grid>
      </>
    )
  }
}
export const complex: Story = {
  render: args => {

    return (
      <React.Fragment>
        <Breadcrumbs
          separator={'/'}
        >
          <Link
            color="primary"
            href="/"
            underline="hover"
            variant="body3Regular"
          >
            PDC
          </Link>
          <Link
            color="primary"
            href="/"
            underline="hover"
            variant="body3Regular"
          >
            Core
          </Link>
          <Typography
            color="text.secondary"
            variant="body3Regular"
          >
            Breadcrumbs
          </Typography>
        </Breadcrumbs>
        <Grid container mt={1} mb={2}>
          <Typography variant={'h3'} component={'strong'}>
            Title
          </Typography>
          <Button
            variant={'solid'}
            color={'primary'}
          >
            Info
          </Button>
        </Grid>
        <Grid container justifyContent={'space-between'}>
          <Grid item xs={6}>
            <TextField
              type="search"
              placeholder="Search"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button
              variant={'contained'}
              color={'primary'}
              size={'medium'}
            >
              Primary Button
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
};
