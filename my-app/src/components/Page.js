import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ArrowRight from '../icons/ArrowRight';
import Content from './Content';

const Wrapper = styled.div`
	background: #f8fafc;
	border: 1px solid #cbd5e1;
	box-shadow: 0px 1px 0px #e2e8f0;
	border-radius: 8px;
	margin: 16px 32px 0px 32px;
`;

const WrapperHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 8px 16px;
	border-radius: 8px 8px 0 0;
	background: #f8fafc;
	box-shadow: 0px 1px 0px #e2e8f0;
	border-bottom: 1px solid #e2e8f0;
`;

const WrapperBreadcrumbs = styled.div`
	display: flex;
	align-items: center;
	font-weight: 400;
	font-size: 14px;
	color: #334155;
	& > ul > li > span {
		font-weight: 600;
		font-size: 14px;
	}
	& > ul > li > a {
		color: #334155;
		text-decoration: none;
	}
	& > ul {
		list-style: none;
		display: contents;
	}
`;

const breadcrumbs = [
	{
		label: 'Home',
		path: '/',
	},
	{
		label: 'Add new warehouse',
	},
];

const Breadcrumbs = ({ items, ...rest }) => {
	return (
		<WrapperBreadcrumbs {...rest}>
			<ul>
				{items.map((item, index) => (
					<React.Fragment key={index}>
						<li>
							{item.path ? (
								<a href={item.path}>{item.label}</a>
							) : (
								<span className='active'>{item.label}</span>
							)}
						</li>
						{index < items.length - 1 && <ArrowRight color={'#101C2D'} />}
					</React.Fragment>
				))}
			</ul>
		</WrapperBreadcrumbs>
	);
};

function HeaderContent() {
	return (
		<WrapperHeader>
			<Breadcrumbs items={breadcrumbs} />
			<Button
				sx={{
					color: '#475569',
					borderColor: '#475569',
					fontWeight: 600,
					fontSize: 12,
				}}
				variant='outlined'>
				{'Save as draft'}
			</Button>
		</WrapperHeader>
	);
}

function Page() {
	return (
		<Wrapper>
			<HeaderContent />
			<Content />
		</Wrapper>
	);
}

export default Page;
