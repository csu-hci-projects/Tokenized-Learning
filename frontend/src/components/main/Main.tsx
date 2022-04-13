import { FC } from 'react';
import { Calendar } from './Calender';
import { useEthers } from '@usedapp/core';
import { Address } from '../../types';
import { Info } from './Info';

interface Props {
	owner: Address;
}

export const Main: FC<Props> = ({ owner }) => {
	const { account } = useEthers();
	return (
		<div className='main-content-area'>
			{!account && <Info />}
			{account && <Calendar owner={owner} />}
		</div>
	);
};
