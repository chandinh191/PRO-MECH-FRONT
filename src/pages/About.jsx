import { Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import p2 from '../shared/PRO-MECH/0205_cnmu-3.png'
import p3 from '../shared/PRO-MECH/bao-duong-laptop.jpg'
import p5 from '../shared/PRO-MECH/images_4.jpg'
import p1 from '../shared/PRO-MECH/maxresdefault.jpg'
import p4 from '../shared/PRO-MECH/screenshot_1656577259-700x400.jpg'
const img = [
    p1, p2, p3, p4, p5
]

function About() {
    return (
        <Container>
            <Box width={'60%'} textAlign={'center'} margin={'auto'} mt={10} mb={10}>
                <Typography variant='h4'>
                    Về chúng tôi
                </Typography>
                <Box mb={5} mt={2}>__________________</Box>

                <Typography variant='p' width={'30%'} mt={10}>
                    Promech được thành lập ngày 02/12/2021.  Chúng tôi là nền tảng cung cấp các dịch vụ laptop cho sinh viên Đại học FPT TP.HCM. Với mức giá cực kỳ cạnh tranh, chúng tôi hứa hẹn sẽ mang đến những trải nghiệm tuyệt vời nhất cho khách hàng.
                </Typography>
            </Box>
            <Box >
                <Stack flexDirection={'row'} justifyContent={'space-between'}>
                    {img.map((img) => (
                        <Stack>
                            <img src={img} alt='...' style={{ width: '250px', height: '150px' }} />
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Container>
    )
}

export default About