'use client'
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system';
import { FormControlLabel, Checkbox, FormGroup, Box, Button, Input, List, ListItem, Stack, Typography } from '@mui/material';
//import Services from '../../Components/Pages/CommentsSlider';
//import CommentsSlider from '../../Components/Pages/CommentsSlider';
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Heading from '../../components/common/Heading'

const contact = () => {

	return (<>
		{/* <Header /> */}
		<Container maxWidth={'md'} sx={{py: '4rem', mx: 'auto'}}>
			<Box bgcolor={'#eee'} height={300} justifySelf={'center'} mx={'auto'} mb={5}>
				<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12961.208700938496!2d51.22959817342831!3d35.694180933989685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzM3LjciTiA1McKwMTMnNDYuOSJF!5e0!3m2!1sfa!2s!4v1736087780678!5m2!1sfa!2s" width='100%' height="300" style={{border:'0'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</Box>
			<Typography variant='h4'>با ما در ارتباط باشید</Typography>
			<FormGroup sx={{ pt: '1rem' }}>
				<Grid container>
					<Grid xs={12} md={8} container flexDirection={'column'} rowGap={'1rem'}>
						<textarea placeholder='پیام' rows={8} style={{ padding: '1rem', border: '1px solid black' }}></textarea>
						<Grid container columnSpacing={3}>
							<Grid md={6}>
								<Input type='text' placeholder='نام شما' sx={{ pr: '1rem', width: '100%', ':before': { borderBottom: 'none' }, ':hover': { ':before': { borderBottom: 'none !important' } }, border: '1px solid black' }} />
							</Grid>
							<Grid md={6}>
								<Input type='text' placeholder='آدرس ایمیل' sx={{ pr: '1rem', width: '100%', ':before': { borderBottom: 'none' }, ':hover': { ':before': { borderBottom: 'none !important' } }, border: '1px solid black' }} />
							</Grid>
						</Grid>
						<Input type='text' placeholder='موضوع' sx={{ pr: '1rem', ':before': { borderBottom: 'none' }, ':hover': { ':before': { borderBottom: 'none !important' } }, border: '1px solid black' }} />
						<Button variant='contained' color='inherit' className='button' sx={{ width: '20%', background: 'linear-gradient(to right, rgb(109 41 197 / 85%), rgb(54 13 209 / 85%))', color: 'white', fontSize: '1.1rem', boxShadow: '0px 0px 20px #aaa' }}>ارسال پیام</Button>
					</Grid>
					<Grid xs={12} md={4}>
						<Stack>
							<List>
								<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
									<i></i>
									<Typography fontWeight={'bold'}>ایران | تهران</Typography>
									<Typography>همین حوالی</Typography>
								</ListItem>
								<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
									<i></i>
									<Typography fontWeight={'bold'}>0903230945</Typography>
									<Typography>همه روزه از 8 صبح تا 6 بعد از ظهر</Typography>
								</ListItem>
								<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
									<i></i>
									<Typography fontWeight={'bold'}>info@webrubik.com</Typography>
									<Typography>برا ما پیا بفرستید</Typography>
								</ListItem>
							</List>
						</Stack>
					</Grid>
				</Grid>
			</FormGroup>
		</Container>
		{/* <Footer /> */}
	</>
	)
}

export default contact