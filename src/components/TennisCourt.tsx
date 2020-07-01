import React from 'react';
import Player from '../models/player.model';
import { IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import './TennisCourt.css';

interface TennisCourtProps {
	currentPlayers: Player[];
	onMistake(index: number): any;
	onShot(i: number): any;
	rememberShots: boolean;
}

const TennisCourt: React.FC<TennisCourtProps> = ({
	currentPlayers,
	onMistake,
	onShot,
	rememberShots,
}) => {
	const handleShot = (e: any, index: number) => {
		e.preventDefault();
		onShot(index);
	};

	return (
		<div>
			<h1>Tennis Court</h1>
			<div className="court">
				{currentPlayers.map((p, idx) => (
					<div
						key={idx}
						className="player-tile"
						onContextMenu={e => onShot(idx)}
						onClick={e => onMistake(idx)}
					>
						<div className="player-name">{p.name}</div>
						{rememberShots && <span>Shot Count: {p.shotCount}</span>}
						<span>Score: {p.score}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TennisCourt;
