import { Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState('false')
    useEffect(() => {
        setLoading('true')
        axios.get('https://pro-mech.azurewebsites.net/Ticket/ALL')
            .then(resp => {
                const data = resp
                setData(data.data)
                console.log(data);
                setLoading(false)
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
    }, [])
    return (
        <Stack  >
            {loading ? (
                <Skeleton variant="circular" width={40} height={40} />
            ) : (<Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'}>
                {data?.map((value) => (
                    <Stack key={value?.index} sx={{ border: '1px solid black', textAlign:'left',width:'30%', height:'100%' }} m={2} flexWrap={'nowrap'}>
                        <Typography variant='p'> Họ và tên: {value?.name} </Typography>
                        <Typography variant='p'> Miêu tả: {value?.description} </Typography>
                        <Typography variant='p'> Password máy: {value?.password} </Typography>
                        <Typography variant='p' > Số điện thoại: {value?.phone} </Typography>
                    </Stack>
                ))}
            </Stack >)}
        </Stack>
    )
}

export default Dashboard