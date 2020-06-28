import React, { useState, useEffect } from 'react';
import Player from '../models/player.model';
import {
	IonPage,
	IonHeader,
	IonTitle,
	IonContent,
	IonToolbar,
	IonFooter,
	IonButton,
	IonModal,
	IonButtons,
	IonIcon,
} from '@ionic/react';

import TennisCourt from '../components/TennisCourt';
import AddPlayer from '../components/AddPlayer';
import PlayerList from '../components/PlayerList';
import GameSettingsModal from './GameSettingsModal';
import { GameSettings } from '../models/gameSettings.model';
import { settingsSharp } from 'ionicons/icons';

const playerList: Player[] = [
	{
		name: 'Player 1',
		score: 0,
		shotCount: 0,
	},
	{
		name: 'Player 2',
		score: 0,
		shotCount: 0,
	},
	{
		name: 'Nathan',
		score: 0,
		shotCount: 0,
	},
	{
		name: 'Timmy',
		score: 0,
		shotCount: 0,
	},
];

const Shots: React.FC = () => {
	const [players, setPlayers] = useState<Player[]>(playerList);
	const [currentPlayers, setCurrentPlayers] = useState<Player[]>([]);
	const [gameSettings, setGameSettings] = useState<GameSettings>(
		new GameSettings()
	);
	const [showModal, setShowModal] = useState(false);

	const onSelectPlayer = (player: Player) => {
		if (currentPlayers.length < 4) {
			setCurrentPlayers([...currentPlayers, player]);
			setPlayers(players.filter(p => p.name !== player.name));
		}
	};

	const getShot = (player: Player) => {
		player.score = 0;
		setCurrentPlayers(currentPlayers.filter(cp => cp.name !== player.name));
		setPlayers([...players, player]);
	};

	const addPlayer = (player: Player) => {
		setPlayers([...players, player]);
	};

	const addMistake = (index: number) => {
		let newPlayers = [...currentPlayers];
		newPlayers[index].score++;
		setCurrentPlayers(newPlayers);
		console.log(currentPlayers);
	};

	const addShot = (index: number) => {
		let newPlayers = [...currentPlayers];
		let shotPlayer = newPlayers[index];
		shotPlayer.shotCount++;
		setCurrentPlayers(newPlayers);
		getShot(shotPlayer);
	};

	const closeModal = (state: GameSettings) => {
		setGameSettings(state);
		setShowModal(false);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Shots</IonTitle>
					<IonButtons slot="primary">
						<IonButton color="secondary" onClick={() => setShowModal(true)}>
							<IonIcon slot="icon-only" icon={settingsSharp} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding-horizontal">
				<TennisCourt
					currentPlayers={currentPlayers}
					onMistake={addMistake}
					onShot={addShot}
				/>
				<AddPlayer addPlayer={addPlayer} />
				<PlayerList players={players} onClick={onSelectPlayer} />
				<IonModal isOpen={showModal}>
					<GameSettingsModal onClose={closeModal} gameSettings={gameSettings} />
				</IonModal>
			</IonContent>
		</IonPage>
	);
};

export default Shots;
