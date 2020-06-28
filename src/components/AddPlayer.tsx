import React, { useState } from 'react';
import {
	IonInput,
	IonGrid,
	IonRow,
	IonCol,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { personAddOutline } from 'ionicons/icons';
import Player from '../models/player.model';

import './AddPlayer.css';

interface AddPlayerProps {
	addPlayer(p: Player): void;
}

const AddPlayer: React.FC<AddPlayerProps> = ({ addPlayer }) => {
	const [playerName, setPlayerName] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (playerName.length) {
			addPlayer({
				name: playerName,
				score: 0,
				shotCount: 0,
			});
			setPlayerName('');
		} else {
		}
	};

	return (
		<div className="add-player">
			<form onSubmit={handleSubmit} className="ion-padding-vertical">
				<IonInput
					type="text"
					value={playerName}
					onIonChange={e => setPlayerName(e.detail.value!)}
					placeholder="Enter player name..."
				></IonInput>

				<IonButton type="submit">
					<IonIcon slot="start" icon={personAddOutline}></IonIcon>
					Add
				</IonButton>
			</form>
		</div>
	);
};

export default AddPlayer;
