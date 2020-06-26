import React from 'react';
import Player from '../models/player.model';
import { IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';

interface TennisCourtProps {
	currentPlayers: Player[];
	onKick: Function;
}

const TennisCourt: React.FC<TennisCourtProps> = ({
	currentPlayers,
	onKick,
}) => {
	return (
		<div>
			<h1>Tennis Court</h1>
			<IonGrid>
				<IonRow>
					{currentPlayers.map((p, index) => (
						<IonCol key={index} size="6">
							<IonCard onContextMenu={e => onKick(p)}>{p.name}</IonCard>
						</IonCol>
					))}
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default TennisCourt;
