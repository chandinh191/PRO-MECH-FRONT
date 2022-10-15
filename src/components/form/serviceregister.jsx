import { Autocomplete, Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Axios from 'axios';
import React, { useState } from 'react';
const data = [
    'Chỉnh màu màn hình', 'Cài đặt phần mềm', 'Sửa lỗi phần mềm', 'Sửa lỗi phần cứng', 'Phủi bụi (80.000 VND)', 'Tra keo tản nhiệt (100.000 VND)', 'Tra keo tản nhiệt (300.000 VND)'
]
function Serviceregister(props) {
    const [autocompleteValues, setAutocompleteValues] = useState([]);
    const [send, setSend] = useState({
        name: {},
        password: {},
        phone: {},
        description: {}

    })
    const handleChange1 = (event, value) => {
        setAutocompleteValues(value)
    }

    const handleChange = (event) => {
        try {
        } catch (err) {
            const value = event.target.value;
            setSend({
                ...send,
                [event.target.name]: value
            });
        }

    };
    console.log(autocompleteValues)
    const handlesubmit = (e) => {
        e.preventDefault(e)
        Axios.post("https://pro-mech.azurewebsites.net/Ticket/CreateTicket", {
            name: send.name,
            password: send.password,
            phone: send.phone,
            description: send.description,
            service: autocompleteValues,
        })
            .then(res => {
                console.log(res.data)
            })
    }
    console.log(send)
    console.log(JSON.stringify(autocompleteValues))
    return (
        <Stack >
            <Typography variant='h4'>
                Đăng ký dịch vụ
            </Typography>
            <Box
                component="form"
                onSubmit={handlesubmit}
                sx={{
                    '& > :not(style)': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField label="TÊN" variant="outlined" onChange={handleChange} name='name' />
                <TextField label="PASSWORD MÁY TÍNH" variant="outlined" onChange={handleChange} name='password' />
                <TextField label="SỐ ĐIỆN THOẠI" variant="outlined" onChange={handleChange} name='phone' />
                <TextField label="MÔ TẢ TÌNH TRẠNG MÁY TÍNH" variant='outlined' onChange={handleChange} name='description'></TextField>
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
                            sx={{ ml: '8.5rem' }}
                            {...params}
                            variant="standard"
                            label="Dịch vụ"

                        />
                    )}
                />

                <Button
                    type="submit"
                    variant='contained'
                >
                    Submit
                </Button>
            </Box>

        </Stack>
    )
}

Serviceregister.propTypes = {}

export default Serviceregister
