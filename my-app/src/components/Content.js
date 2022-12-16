import {
	Grid,
	Stack,
	Typography,
	Box,
	Button,
	LinearProgress,
	linearProgressClasses,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import CategoryIcons from '../icons/CategoryIcons';

const Wrapper = styled(Grid)`
	background: #f8fafc;
	height: 100%;
`;

const Left = styled(Grid)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Text = styled(Typography)`
	font-weight: 700 !important;
	font-size: 18px !important;
	color: #1e293b;
`;

const ContentSection = styled(Stack)`
	padding-left: 84px;
	padding-right: 84px;
	padding-top: 84px;
	padding-bottom: 50px;
	background: #ffffff;
`;

const FooterSection = styled(Stack)`
	background: #ffffff;
`;

const BoxOption = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: #f8fafc;
	border: 1px solid #94a3b8;
	border-radius: 4px;
	padding: 10px 20px;
	margin-bottom: 12px;
	text-align: center;
	font-weight: 500;
	font-size: 12px;
	cursor: pointer;
`;

const Options = [
	'Open Yard',
	'General Warehouse',
	'Ambient Warehouse',
	'Temperature-controlled',
	'E-commerce Fulfillment',
];

function SideSection() {
	return (
		<Box ml={2}>
			<CategoryIcons />
			<Box mt={2}>
				<Text>{'What is your type of warehouse?'}</Text>
			</Box>
		</Box>
	);
}

const Progress = styled.div`
	font-weight: 600;
	font-size: 14px;
	color: #64748b;
	& > span {
		color: #1e293b;
	}
`;

function CFooter() {
	const progress = 30;
	return (
		<FooterSection direction={'column'}>
			<Box sx={{ width: '100%' }}>
				<LinearProgress
					sx={{
						height: '2px',
						backgroundColor: '#CBD5E1',
						[`& .${linearProgressClasses.bar}`]: {
							backgroundColor: '#1E293B',
						},
					}}
					variant='determinate'
					value={progress}
				/>
			</Box>
			<Stack
				sx={{
					padding: '16px 20px',
				}}
				direction={'row'}
				alignItems={'center'}
				justifyContent={'space-between'}>
				<Button
					sx={{
						color: '#334155',
						borderColor: '#334155',
						textTransform: 'unset',
					}}
					variant='outlined'
					startIcon={<ArrowLeft />}>
					{'Back'}
				</Button>
				<Progress>
					<span>{'Step 1'}</span>
					{' of 12'}
				</Progress>
				<Button
					sx={{
						color: '#ffff',
						borderColor: '#ffff',
						backgroundColor: '#334155',
						textTransform: 'unset',
					}}
					variant='outlined'
					endIcon={<ArrowRight color={'#ffff'} />}>
					{'Next'}
				</Button>
			</Stack>
		</FooterSection>
	);
}

function CSection() {
	function handleClick(e) {
		alert(e);
	}

	return (
		<ContentSection>
			{Options.map((e) => {
				return <BoxOption onClick={() => handleClick(e)}>{e}</BoxOption>;
			})}
		</ContentSection>
	);
}

function Content() {
	return (
		<Wrapper container>
			<Left item xs={3}>
				<SideSection />
			</Left>
			<Grid item xs={9}>
				{/** TODO: HAS MANY PAGE IN HERE */}
				<CSection />
				<CFooter />
			</Grid>
		</Wrapper>
	);
}

export default Content;
