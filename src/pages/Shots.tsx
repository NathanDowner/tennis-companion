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
	IonList,
	IonItem,
} from '@ionic/react';
import TennisCourt from '../components/TennisCourt';
import AddPlayer from '../components/AddPlayer';
import PlayerList from '../components/PlayerList';
import GameSettingsModal from './GameSettingsModal';
import { GameSettings } from '../models/gameSettings.model';
import { settingsSharp, remove, play } from 'ionicons/icons';

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
		name: 'Chad',
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
	const [players, setPlayers] = useState<Player[]>([]);
	const [currentPlayers, setCurrentPlayers] = useState<Player[]>([]);
	const [gameSettings, setGameSettings] = useState<GameSettings>(
		new GameSettings()
	);
	const [hasGameStarted, setHasGameStarted] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const onSelectPlayer = (player: Player) => {
		if (currentPlayers.length < 4 && hasGameStarted) {
			setCurrentPlayers([...currentPlayers, player]);
			setPlayers(players.filter(p => p.name !== player.name));
		}
	};

	const resetPlayerScores = () => {
		let resetPlayers = [...currentPlayers];
		resetPlayers.forEach(p => (p.score = 0));
		setCurrentPlayers(resetPlayers);
	};

	const removeFromCourt = (player: Player) => {
		player.score = 0;
		if (!gameSettings.rememberPoints) {
			resetPlayerScores();
		}
		if (gameSettings.changePlayersAutomatically) {
			if (players.length) {
				setPlayers([...players].slice(1, players.length).concat(player));
				setCurrentPlayers(
					currentPlayers
						.filter(cp => cp.name !== player.name)
						.concat(players[0])
				);
			} else {
				setPlayers([player]);
				setCurrentPlayers(currentPlayers.filter(cp => cp.name !== player.name));
			}
		} else {
			setCurrentPlayers([
				...currentPlayers.filter(cp => cp.name !== player.name),
			]);
			setPlayers([...players, player]);
		}
	};

	const addPlayer = (player: Player) => {
		setPlayers([...players, player]);
	};

	const addMistake = (index: number) => {
		let newPlayers = [...currentPlayers];
		newPlayers[index].score++;
		setCurrentPlayers(newPlayers);
		if (newPlayers[index].score === gameSettings.pointLimit) {
			removeFromCourt(newPlayers[index]);
		}
		console.log(currentPlayers);
	};

	const addShot = (index: number) => {
		let newPlayers = [...currentPlayers];
		let shotPlayer = newPlayers[index];
		shotPlayer.shotCount++;
		// setCurrentPlayers(newPlayers);
		removeFromCourt(shotPlayer);
	};

	const closeModal = (state: GameSettings) => {
		setGameSettings(state);
		setShowModal(false);
	};

	const deletePlayer = (player: Player) => {
		setPlayers([...players].filter(p => p.name !== player.name));
	};

	const startGame = () => {
		if (players.length >= 4) {
			let startingList = players.slice(0, 4);
			let whatsLeft = players.slice(4, players.length);
			setCurrentPlayers(startingList);
			setPlayers(whatsLeft);
		} else {
			setCurrentPlayers([
				...currentPlayers.concat(players.slice(0, players.length)),
			]);
			setPlayers([]);
		}
	};

	const endGame = () => {
		setPlayers([...players].concat(currentPlayers));
		setCurrentPlayers([]);
	};

	const handleGameState = () => {
		setHasGameStarted(!hasGameStarted);
		hasGameStarted ? endGame() : startGame();
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
				<div className="background"></div>
				<TennisCourt
					currentPlayers={currentPlayers}
					onMistake={addMistake}
					onShot={addShot}
					rememberShots={gameSettings.rememberShots}
				/>
				<AddPlayer addPlayer={addPlayer} />
				<PlayerList
					players={players}
					onClick={onSelectPlayer}
					deletePlayer={deletePlayer}
				/>
				<IonModal isOpen={showModal}>
					<GameSettingsModal onClose={closeModal} gameSettings={gameSettings} />
				</IonModal>
			</IonContent>
			<IonFooter className="ion-padding">
				<IonButton
					expand="block"
					fill={hasGameStarted ? 'solid' : 'outline'}
					color={hasGameStarted ? 'danger' : 'solid'}
					size="large"
					onClick={handleGameState}
				>
					{hasGameStarted ? 'End Game' : 'Start Game'}
				</IonButton>
			</IonFooter>
		</IonPage>
	);
};

export default Shots;
