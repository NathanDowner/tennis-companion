import React from 'react';
import Player from '../models/player.model';
import { IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import './TennisCourt.css';

interface TennisCourtProps {
	currentPlayers: Player[];
	onMistake(index: number): any;
	onShot(i: number): any;
}

const TennisCourt: React.FC<TennisCourtProps> = ({
	currentPlayers,
	onMistake,
	onShot,
}) => {
	const handleShot = (e: any, index: number) => {
		e.preventDefault();
		onShot(index);
	};

	return (
		<div>
			<h1>Tennis Court</h1>
			<IonGrid>
				<IonRow>
					{currentPlayers.map((p, index) => (
						<IonCol key={index} size="6">
							{/* <div
								className="player-tile"
								onContextMenu={e => onShot(index)}
								onClick={e => onMistake(index)}
								// onDoubleClick={e => onShot(index)}
							>
								<div className="player-name">{p.name}</div>
								<span>Shot Count: {p.shotCount}</span>
								<span>Score: {p.score}</span>
							</div> */}
							<IonCard
								button
								className="player-tile"
								onContextMenu={e => handleShot(e, index)}
								onClick={e => onMistake(index)}
							>
								<h3 className="player-name">{p.name}</h3>
								<span>Shot Count: {p.shotCount}</span>
								<span>Score: {p.score}</span>
							</IonCard>
						</IonCol>
					))}
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default TennisCourt;
