import { Box, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import v1 from '../shared/PRO-MECH/v1.png'
import v2 from '../shared/PRO-MECH/v2.png'
import v3 from '../shared/PRO-MECH/v3.png'
import v4 from '../shared/PRO-MECH/v4.png'
import v5 from '../shared/PRO-MECH/v5.png'
import Serviceregister from '../components/form/serviceregister'
const data = [
    { img: v1,label: 'Vệ sinh máy tính', paragraph: '​Với chi phí cực kỳ hạt dẻ cùng nhiều lựa chọn đi kèm về keo' },
    { img: v2,label: 'Chỉnh màu màn hình', paragraph: 'Giúp laptop của khách hàng có mức độ hiển thị màu sắc gần như chính xác' },
    { img: v3,label: 'Cài đặt phần mềm', paragraph: 'Hệ điều hành Windows, MacOS, Office 365,.. cùng loạt ứng dụng khác' }
]
const data2 = [
    { img: v4,label: '​Sửa lỗi phần mềm', paragraph: 'Hỗ trợ khách hàng 24/24 với những vấn đề gặp phải với phần mềm đang sử dụng Picture Sửa lỗi phần cứng' },
    { img: v5,label: 'Sửa lỗi phần cứng', paragraph: 'Sửa lỗi phần cứng' }
]
function Service() {
    return (
        <Container>
            <Box width={'60%'} textAlign={'center'} margin={'auto'} mt={10} mb={10}>
                <Typography variant='h4'>
                    DỊCH VỤ TỪ PRO-MECH
                </Typography>
                <Box mb={5} mt={2}>__________________</Box>

                <Typography variant='p' width={'30%'} mt={10}>
                    Với sứ mệnh mang lại những trải nghiệm dịch vụ laptop đáng tiền nhất, Pro-Mech sẽ tập trung vào những dịch vụ cần thiết nhất cho đối tượng là sinh viên Đại học FPT TP.HCM.
                </Typography>
            </Box>
            <Box>
                <Stack flexDirection={'row'}>
                    {data.map((p) => (
                        <Stack flexDirection={'column'} alignItems={'center'} >
                            <img src={p.img} alt='' width={'56px'}/>
                            <h3 style={{margin:1, padding:1}} >{p.label}</h3>
                            <p style={{margin:1, padding:1}}>{p.paragraph}</p>
                        </Stack>
                    ))}
                </Stack>
                <Stack flexDirection={'row'} sx={{borderBottom:'1px solid black'}}>
                    {data2.map((p) => (
                        <Stack flexDirection={'column'} alignItems={'center'} width={'50%'}>
                            <img src={p.img} alt='' width={'56px'} />
                            <h3 style={{ margin: 1, padding: 1 }} >{p.label}</h3>
                            <p style={{ margin: 1, padding: 1 }}>{p.paragraph}</p>
                        </Stack>
                    ))}
                </Stack>
                <Box>
                    <Serviceregister />
                </Box>
            </Box>
        </Container >

    )
}

export default Service