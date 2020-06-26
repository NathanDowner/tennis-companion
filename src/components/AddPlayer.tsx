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

const AddPlayer = () => {
	const [playerName, setPlayerName] = useState('');
	return (
		<div>
			<form>
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
							<IonButton>
								<IonIcon slot="icon-only" icon={personAddOutline}></IonIcon>
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</form>
		</div>
	);
};

export default AddPlayer;
