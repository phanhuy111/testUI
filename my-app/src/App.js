import styled from 'styled-components';
import HeaderBar from './components/HeaderBar';
import Page from './components/Page';
import SideBar from './components/SideBar';
import { Stack } from '@mui/material';

const WrapperApp = styled(Stack)`
	display: flex;
	flex-direction: row;
`;

const Wrapper = styled.div`
	width: 100%;
	background: #e2e8f0;
`;

function App() {
	return (
		<WrapperApp
			sx={{
				height: '100vh',
			}}
			direction={'row'}>
			<SideBar />
			<Wrapper>
				<HeaderBar />
				<Page />
			</Wrapper>
		</WrapperApp>
	);
}

export default App;
