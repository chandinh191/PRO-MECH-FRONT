import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Autocomplete, Button, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
const data = [
    'Chỉnh màu màn hình', 'Cài đặt phần mềm', 'Sửa lỗi phần mềm', 'Sửa lỗi phần cứng'
]
function Serviceregister(props) {
    const [combo, setCombo] = useState('');
    const [autocompleteValues, setAutocompleteValues] = useState([
    ]);
    const [send, setSend] = useState({
        name: {},
        email: {},
        phone: {},
        combo: {},
        autocompleteValues: [],
    })
    const handleChange1 = (event, value) => {
        setAutocompleteValues(value)
    }
    const handleChange = (event) => {
        setCombo(event.target.value);
        try {
            setCombo = event.target.value
        } catch (err) {
            const value = event.target.value;
            setSend({
                ...send,
                [event.target.name]: value
            });
        }

    };
    const handlesubmit = (event) => {

    }
    console.log(send)
    return (
        <Stack>
            <Typography variant='h4'>
                Đăng ký dịch VỤ
            </Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="TÊN" variant="outlined" onChange={handleChange} name='name' />
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleChange} name='email' />
                <TextField id="outlined-basic" label="SỐ ĐIỆN THOẠI" variant="outlined" onChange={handleChange} name='phone' />
                <InputLabel id="select-combo">Gói dịch vụ:</InputLabel>
                <Select
                    value={combo}
                    name='combo'
                    onChange={handleChange}
                >
                    <MenuItem value={'Phủi bụi (80.000 VND)'}>Phủi bụi (80.000 VND)</MenuItem>
                    <MenuItem value={'Tra keo tản nhiệt (100.000 VND)'}>Tra keo tản nhiệt (100.000 VND)</MenuItem>
                    <MenuItem value={'Tra keo tản nhiệt (300.000 VND)'}>Tra keo tản nhiệt (300.000 VND)</MenuItem>
                    <MenuItem value={'Phủi bụi (80.000 VND) + Tra keo tản nhiệt (100.000 VND)'}>Phủi bụi (80.000 VND) + Tra keo tản nhiệt (100.000 VND)</MenuItem>
                    <MenuItem value={'Phủi bụi (80.000 VND) + Tra keo tản nhiệt (300.000 VND)'}>Phủi bụi (80.000 VND) + Tra keo tản nhiệt (300.000 VND)</MenuItem>
                    <MenuItem value={''}>Không dùng dịch vụ này</MenuItem>
                </Select>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    name="service"
                    value={send.service}
                    onChange={handleChange1}
                    options={data}
                    getOptionLabel={(option) => option}
                    defaultValue={[data[1]]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Dịch vụ đồng giá 80.000 VND"
                            placeholder="Dịch vụ đồng giá"

                        />
                    )}
                />
                <Button
                    type="submit"
                    variant='contained'
                // onSubmit={handlesubmit}
                >
                    Submit
                </Button>
            </Box>

        </Stack>
    )
}

Serviceregister.propTypes = {}

export default Serviceregister
