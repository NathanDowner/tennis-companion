import React from 'react';
import Player from '../models/player.model';
import { IonList, IonItem, IonLabel, IonListHeader } from '@ionic/react';

interface PlayerListProps {
	players: Player[];
	onClick: Function;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, onClick }) => {
	return (
		<IonList>
			<IonListHeader>
				<IonLabel>Players</IonLabel>
			</IonListHeader>
			{players.map((p, index) => (
				<IonItem key={index} onClick={e => onClick(p)}>
					<IonLabel>{p.name}</IonLabel>
				</IonItem>
			))}
		</IonList>
	);
};

export default PlayerList;
