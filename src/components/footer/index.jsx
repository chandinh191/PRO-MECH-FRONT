import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

function index() {
  return (
    <Stack sx={{ borderTop: '1px solid black', borderBottom: '1px solid black', fontSize: '1rem', mt: '3rem' }}>
      <Stack flexDirection={'row'} sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ width: '30%', textAlign: 'left', }}>
          <Typography variant='body1'>
            FPT University, D1 Street, Saigon Hi-tech Park, Long Thanh My Ward, ​Thu Duc City, Ho Chi Minh City.
          </Typography>
          <Typography variant='body1'>
            Phone: 091 551 1566
          </Typography>
          <Typography variant='body1'>
            Email: trucntmse151130@fpt.edu.vn
          </Typography>
        </Box>
        <Box sx={{ width: '20%', textAlign: 'left' }}>
          <ul style={{ margin: '0', padding: '0', marginLeft: '5rem', listStyle: 'none' }}>
            Our Services
            <li>Vệ sinh máy tính</li>
            <li>Cân màu màn hình</li>
            <li>Cài đặt phần mềm </li>
          </ul>
        </Box>
        <Box sx={{ width: '50%', textAlign: "left" }}>
          <Typography variant='p'>Pro-Mech được thành lập ngày 02/12/2021.  Chúng tôi là nền tảng cung cấp các dịch vụ laptop cho sinh viên Đại học FPT TP.HCM. Với mức giá cực kỳ cạnh tranh, chúng tôi hứa hẹn sẽ mang đến những trải nghiệm tuyệt vời nhất cho khách hàng.</Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default index