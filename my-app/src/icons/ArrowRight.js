function ArrowRight({ color }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'>
			<path
				d='M11 15L13.83 12.17L11 9.34'
				// stroke='#101C2D'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
}

export default ArrowRight;
