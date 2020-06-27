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

interface AddPlayerProps {
	addPlayer(p: Player): void;
}

const AddPlayer: React.FC<AddPlayerProps> = ({ addPlayer }) => {
	const [playerName, setPlayerName] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		addPlayer({
			name: playerName,
			score: 0,
			shotCount: 0,
		});
		setPlayerName('');
	};

	return (
		<div className="addPlayer">
			<form onSubmit={handleSubmit}>
				<IonGrid>
					<IonRow>
						<IonCol size="8">
							<IonInput
								type="text"
								value={playerName}
								onIonChange={e => setPlayerName(e.detail.value!)}
								placeholder="Enter player name..."
							></IonInput>
						</IonCol>
						<IonCol size="4">
							<IonButton type="submit">
								<IonIcon slot="start" icon={personAddOutline}></IonIcon>
								Add Player
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</form>
		</div>
	);
};

export default AddPlayer;
