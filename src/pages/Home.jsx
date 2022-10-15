import { Button, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../shared/PRO-MECH/logo.png'
import promech from '../shared/PRO-MECH/pro-mech.png'
import promech1 from '../shared/PRO-MECH/pro-mech1.png'
import v1 from '../shared/PRO-MECH/v1.png'
import v2 from '../shared/PRO-MECH/v2.png'
import v3 from '../shared/PRO-MECH/v3.png'
import v4 from '../shared/PRO-MECH/v4.png'
import v5 from '../shared/PRO-MECH/v5.png'
import v6 from '../shared/PRO-MECH/v6.png'
const data = [
    { img: v1, label: 'Vệ sinh máy tính', p: 'Với chi phí cực kỳ hạt dẻ cùng nhiều lựa chọn đi kèm về keo' },
    { img: v2, label: 'Chỉnh màu màn hình', p: 'Giúp laptop của khách hàng có mức độ hiển thị màu sắc gần như chính xác, hỗ trợ đắc lực cho công việc, đặt biệt là lĩnh vực sáng tạo' },
    { img: v3, label: 'Cài đặt phần mềm', p: 'Hệ điều hành Windows, MacOS, Office 365,.. cùng loạt ứng dụng khác sẽ được nhân viên của chúng tôi cài đặt nhanh chóng cho bạn' },
    { img: v4, label: '​Sửa lỗi phần mềm', p: 'Pro-Mech sẵn sàng hỗ trợ khách hàng 24/24 với những vấn đề gặp phải với phần mềm đang sử dụng' },
    { img: v5, label: 'Sửa lỗi phần cứng', p: 'Tư vấn & sửa lỗi & thay thế RAM, HDD, SSD,...' },
    { img: v6, label: 'Tư vấn các lỗi khác', p: 'Ngoài những lỗi trên, Pro-Mech sẽ giúp khách hàng xác định những lỗi mà chủ nhân máy tính không xác định được' }
]
function Home() {
    console.log(data)
    return (
        <Container>
            <Stack>
                <img src={logo} alt="" style={{ width: '100%' }} />
            </Stack>
            <Stack sx={{ borderTop: '2px solid black' }}>
                <Box sx={{ marginTop: '20rem', marginLeft: '5rem', position: 'absolute', width: '20%', textAlign: 'left' }}>
                    <Typography variant='h3' sx={{ color: 'purple', fontWeight: 'bold' }}>
                        Có Pro-Mech
                    </Typography>
                    <Box>
                        <Typography variant='subtitle1' mt={1}>
                            Máy Tính Của Bạn Tốt Hơn Mỗi Ngày
                        </Typography>
                        <Typography variant='p' mt={1} sx={{ color: '#62676C' }}>
                            Bằng cách chú trọng nghiên cứu sửa chữa những vấn đề
                            mà đa số chủ sở hữu laptop gặp phải, Pro-Mech sẽ
                            giải quyết nhanh chóng những yêu cầu cụ thể
                            của khách hàng.
                        </Typography>
                    </Box>
                    <Button variant='contained' sx={{ mt: 2, bgcolor: 'black' }}>
                        <Link to={'/service'} style={{ color: 'white' }}>Đăng kí ngay</Link>
                    </Button>
                    <Button variant='contained' sx={{ mt: 2, bgcolor: 'white', color: 'black' }}>
                        <Link to={'/about'} style={{ color: 'black' }}>Xem thêm về chúng tôi</Link>
                    </Button>
                </Box>
                <img src={promech} alt='' style={{ width: '110%', marginBottom: '5rem' }} />
            </Stack>
            <Stack>
                <Typography variant='h4' textAlign={'left'}>
                    Pro-Mech cung cấp những dịch vụ thiết yếu cho máy tính của bạn
                </Typography>
                <img src={promech1} alt='' style={{ width: 'auto', }} />
            </Stack>
            <Stack display={'flex'} flexDirection={'row'}>
                <Box>
                    <Typography variant='h4' textAlign={'left'}>
                        Danh sách dịch vụ
                    </Typography>
                </Box>
                <Box ml={20} sx={{ width: '50%' }}>
                    {data.map((a) => (
                        <Stack sx={{ borderBottom: '2px solid black', textAlign: 'left' }}>
                            <Stack sx={{ alignItems: 'center' }} direction="row">
                                <img src={a.img} alt='' style={{ width: '56px', height: '56px' }} />
                                <h3 style={{ marginLeft: '1rem' }}>{a.label}</h3>
                            </Stack>
                            <p style={{ fontSize: '1.4rem' }}>{a.p}</p>

                        </Stack>
                    ))}
                </Box>

            </Stack>
            <Button variant='contained' sx={{ bgcolor: '#C5CBCF', mt: 5 }}>
                Đăng kí sử dụng dịch vụ
            </Button>
        </Container>
    )
}

export default Home