import { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Box, Checkbox, ListItemText, MenuItem, Stack } from '@mui/material';
import { Select } from './select';
import { FormControl } from '../form-control';
import { InputLabel } from '../input-label';
import { OutlinedInput } from '../outlined-input';
import { Chip } from '../chip';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  tags: ['autodocs'],
  component: Select,
  args: {
    size: `medium`,
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: args => {
    return (
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        // onChange={handleChange}
        {...args}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    );
  },
};
export const Default: Story = {
  render: args => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: any) => {
      setAge(event.target.value);
    };
    return (
      <Stack gap={3}>
        <Grid container alignItems={'center'} gap={2}>
          <FormControl size="small" sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={age}
              label="Age "
              size="small"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            displayEmpty
            size="small"
            onChange={handleChange}
            sx={{ width: 200 }}
          >
            <MenuItem disabled value="" sx={{ display: `none` }}>
              Default Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid container alignItems={'center'} gap={2}>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={age}
              label="Age "
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            displayEmpty
            onChange={handleChange}
            sx={{ width: 200 }}
          >
            <MenuItem disabled value="" sx={{ display: `none` }}>
              Default Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
      </Stack>
    );
  },
};

export const Multiple: Story = {
  render: args => {
    const names = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleMultipleChange = (event: any) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
      );
    };

    return (
      <Stack gap={2}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleMultipleChange}
            input={<OutlinedInput label="Name" />}
            renderValue={(selected: any) => selected.join(', ')}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  color="default"
                  checked={personName.indexOf(name) > -1}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleMultipleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected: any) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip
                    key={value}
                    label={value}
                    size="small"
                    variant="filled"
                    onDelete={() => {
                      console.log('delete');
                    }}
                  />
                ))}
              </Box>
            )}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    );
  },
};
