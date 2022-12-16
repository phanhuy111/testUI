import '../App.css';
import WarehouseIcons from '../icons/WarehouseIcons';
import Logo from '../images/Logo.png';
import styled from 'styled-components';
import DashboardIcons from '../icons/DashboardIcons';
import QuotationIcons from '../icons/QuotationIcons';
import BookingIcons from '../icons/BookingIcons';
import UserManagerIcons from '../icons/UserManagerIcons';
import Notification from '../icons/Notification';
import ClientsIcons from '../icons/ClientsIcons';
import ProfileIcons from '../icons/ProfileIcons';
import LogoutIcons from '../icons/LogoutIcons';

const WrapperImage = styled.img`
	width: 95%;
`;

const Rows = styled.div`
	color: #f8fafc;
	list-style: none;
	width: 100%;
	padding-left: 0;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
`;

const Row = styled.li`
	display: flex;
	flex-direction: row;
	padding: 8px 18px 8px 24px;
	gap: 8px;
	align-items: center;
	&:hover {
		border-left: 8px solid #22a244;
		border-radius: 4px 0px 0px 4px;
		padding: 8px 18px 8px 16px;
		background: #64748b;
	}
`;

const RowEnd = styled.li`
	display: flex;
	flex-direction: row;
	padding: 8px 18px 8px 24px;
	gap: 8px;
	align-items: center;
	color: #64748b;
	&:hover {
		color: #ffff;
		border-left: 8px solid #ffff;
		border-radius: 4px 0px 0px 4px;
		padding: 8px 18px 8px 16px;
		background: #64748b;
	}
`;

const TitleSection = styled.div`
	text-transform: uppercase;
	color: #94a3b8;
	margin-left: 24px;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	margin-top: 36px;
	margin-bottom: 16px;
`;

const WrapperSidebar = styled.div`
	width: 25%;
	background-color: #282c34;
	position: relative;
`;

function SideBar() {
	return (
		<WrapperSidebar>
			<WrapperImage src={Logo} alt='' />
			<Rows>
				<Row>
					<DashboardIcons />
					{'Dashboard'}
				</Row>
				<Row>
					<WarehouseIcons />
					{'Warehouse'}
				</Row>
				<Row>
					<QuotationIcons />
					{'Quotations'}
				</Row>
				<Row>
					<BookingIcons />
					{'Bookings'}
				</Row>
			</Rows>
			<TitleSection>{'ACCOUNT MANAGEMENT'}</TitleSection>
			<Rows>
				<Row>
					<UserManagerIcons />
					{'User Management'}
				</Row>
				<Row>
					<Notification />
					{'Notifications'}
				</Row>
				<Row>
					<ClientsIcons />
					{'Clients'}
				</Row>
				<Row>
					<ProfileIcons />
					{'Business Profile'}
				</Row>
				<Row>
					<WarehouseIcons />
					{'Settings'}
				</Row>
			</Rows>

			<Rows
				style={{
					position: 'absolute',
					bottom: 0,
				}}>
				<RowEnd>
					<LogoutIcons />
					{'Logout'}
				</RowEnd>
			</Rows>
		</WrapperSidebar>
	);
}

export default SideBar;
