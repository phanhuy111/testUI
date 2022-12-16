import { useState } from 'react';
import styled from 'styled-components';

import '../App.css';
import HamIcons from '../icons/HamIcons';
import NotificationIcons from '../icons/NotificationIcons';
import GlobalIcons from '../icons/GlobalIcons';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Typography, Stack } from '@mui/material';

const Wrapper = styled(Grid)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f8fafc;
	box-shadow: 0px 1px 0px #e2e8f0;
	height: 56px;
	padding-left: 32px;
	padding-right: 32px;
`;

const IconsNotification = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Dot = styled.div`
	position: absolute;
	background: red;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #f2f9ff;
	font-weight: 600;
	font-size: 10px;
	right: 5px;
	bottom: 12px;
`;

const Left = styled(Grid)``;
const Space = styled(Grid)``;
const SelectItem = styled.em`
	display: flex;
	gap: 5px;
	align-items: center;
	font-weight: 600;
	font-size: 14px;
`;

function HeaderBar() {
	const [language, setLanguage] = useState('');
	return (
		<Wrapper container>
			<Left item xs={1}>
				<div className='App-header-icons'>
					<HamIcons />
				</div>
			</Left>

			<Space item xs={6} />

			<Grid item xs={0.6}>
				<IconsNotification>
					<NotificationIcons />
					<Dot>{'5'}</Dot>
				</IconsNotification>
			</Grid>

			<Grid item xs={2.4}>
				<Select
					sx={{
						borderRadius: '5px',
						'& .MuiInputBase-input': {
							padding: '10px',
						},
					}}
					value={language}
					onChange={(e) => setLanguage(e.target.value)}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}>
					<MenuItem value=''>
						<SelectItem>
							<GlobalIcons /> {'English | USD'}
						</SelectItem>
					</MenuItem>
					<MenuItem value={10}>
						<SelectItem>
							<GlobalIcons /> {'VietNam | VND'}
						</SelectItem>
					</MenuItem>
				</Select>
			</Grid>

			<Grid item xs={2}>
				<Stack
					direction={'row'}
					alignItems={'center'}
					justifyContent={'flex-end'}
					gap='8px'>
					<Avatar alt='' src='/static/images/avatar/1.jpg' />
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '14px',
						}}>
						{'Hi, John Doe!'}
					</Typography>
				</Stack>
			</Grid>
		</Wrapper>
	);
}

export default HeaderBar;
