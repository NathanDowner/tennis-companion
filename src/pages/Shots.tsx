import React, { useState, useEffect } from 'react';
import Player from '../models/player.model';
import {
	IonPage,
	IonHeader,
	IonTitle,
	IonContent,
	IonToolbar,
} from '@ionic/react';

import TennisCourt from '../components/TennisCourt';
import AddPlayer from '../components/AddPlayer';
import PlayerList from '../components/PlayerList';

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
];

const Shots: React.FC = () => {
	const [players, setPlayers] = useState<Player[]>([]);
	const [currentPlayers, setCurrentPlayers] = useState<Player[]>([]);

	useEffect(() => {
		setPlayers(playerList);
	}, []);

	const onSelectPlayer = (player: Player) => {
		if (currentPlayers.length < 4) {
			setCurrentPlayers([...currentPlayers, player]);
			setPlayers(players.filter(p => p.name !== player.name));
		}
	};

	function kickFromCourt(player: Player) {
		setCurrentPlayers(currentPlayers.filter(cp => cp.name !== player.name));
		setPlayers([...players, player]);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Shots</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding-horizontal">
				<TennisCourt currentPlayers={currentPlayers} onKick={kickFromCourt} />
				<AddPlayer />
				<PlayerList players={players} onClick={onSelectPlayer} />
			</IonContent>
		</IonPage>
	);
};

export default Shots;
