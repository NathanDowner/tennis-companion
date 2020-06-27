import React from 'react';
import Player from '../models/player.model';
import { IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import './TennisCourt.css';

interface TennisCourtProps {
	currentPlayers: Player[];
	onKick: Function;
	onMistake: Function;
	onShot: Function;
}

const TennisCourt: React.FC<TennisCourtProps> = ({
	currentPlayers,
	onKick,
	onMistake,
	onShot,
}) => {
	return (
		<div>
			<h1>Tennis Court</h1>
			<IonGrid>
				<IonRow>
					{currentPlayers.map((p, index) => (
						<IonCol key={index} size="6">
							<div
								className="player-tile"
								onContextMenu={e => onKick(p)}
								onClick={e => onMistake(p)}
								onDoubleClick={e => onShot(p)}
							>
								<div className="player-name">{p.name}</div>
								<span>{p.shotCount}</span>
								<span>{p.score}</span>
							</div>
							{/* <IonCard
								className="player-tile"
								onContextMenu={e => onKick(p)}
								onClick={e => onMistake(p)}
								onDoubleClick={e => onShot(p)}
							>
								<h3 className="player-name">{p.name}</h3>
							</IonCard> */}
						</IonCol>
					))}
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default TennisCourt;
