import React, { useState } from 'react';
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonLabel,
	IonToggle,
	IonButtons,
	IonButton,
	IonIcon,
	IonInput,
} from '@ionic/react';
import { closeSharp } from 'ionicons/icons';
import { GameSettings } from '../models/gameSettings.model';

interface GameSettingsProps {
	onClose(settings: GameSettings): any;
	gameSettings: GameSettings;
}

const GameSettingsModal: React.FC<GameSettingsProps> = ({
	onClose,
	gameSettings,
}) => {
	const [pointLimit, setPointLimit] = useState<number>(gameSettings.pointLimit);
	const [rememberShots, setRememberShots] = useState<boolean>(
		gameSettings.rememberShots
	);
	const [rememberPoints, setRememberPoints] = useState<boolean>(
		gameSettings.rememberPoints
	);
	const [changePlayersAuto, setChangePlayersAuto] = useState<boolean>(
		gameSettings.changePlayersAutomatically
	);

	const handleClose = () => {
		const gs = new GameSettings(
			pointLimit,
			rememberPoints,
			rememberShots,
			changePlayersAuto
		);
		onClose(gs);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Game Settings</IonTitle>
					<IonButtons slot="primary">
						<IonButton color="secondary" onClick={handleClose}>
							<IonIcon slot="icon-only" icon={closeSharp} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonList>
					<IonItem>
						<IonLabel>Remember Points</IonLabel>
						<IonToggle
							checked={rememberPoints}
							onIonChange={e => setRememberPoints(e.detail.checked)}
						></IonToggle>
					</IonItem>
					<IonItem>
						<IonLabel>Remember Shots</IonLabel>
						<IonToggle
							checked={rememberShots}
							onIonChange={e => setRememberShots(e.detail.checked)}
						></IonToggle>
					</IonItem>
					<IonItem>
						<IonLabel>Change Players Automatically</IonLabel>
						<IonToggle
							checked={changePlayersAuto}
							onIonChange={e => setChangePlayersAuto(e.detail.checked)}
						></IonToggle>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Point Limit</IonLabel>
						<IonInput
							type="number"
							value={pointLimit}
							onIonChange={e => setPointLimit(+e.detail.value!)}
						></IonInput>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default GameSettingsModal;
