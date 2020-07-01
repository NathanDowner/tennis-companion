import React, { useRef } from 'react';
import Player from '../models/player.model';
import {
	IonList,
	IonItem,
	IonLabel,
	IonItemOptions,
	IonIcon,
	IonItemOption,
	IonItemSliding,
} from '@ionic/react';
import { trash } from 'ionicons/icons';

interface PlayerListProps {
	players: Player[];
	onClick(p: Player): any;
	deletePlayer(p: Player): any;
}

const PlayerList: React.FC<PlayerListProps> = ({
	players,
	onClick,
	deletePlayer,
}) => {
	const slidingRef = useRef<HTMLIonItemSlidingElement>(null);
	const listRef = useRef<HTMLIonListElement>(null);

	const onDeletePlayer = async (p: Player) => {
		listRef.current?.closeSlidingItems();
		deletePlayer(p);
	};
	return (
		<IonList ref={listRef}>
			{players.map((p, index) => (
				<IonItemSliding key={index} ref={slidingRef}>
					<IonItem onClick={e => onClick(p)}>
						<IonLabel>{p.name}</IonLabel>
					</IonItem>
					<IonItemOptions side="end">
						<IonItemOption color="danger" onClick={() => onDeletePlayer(p)}>
							<IonIcon slot="icon-only" icon={trash} />
						</IonItemOption>
					</IonItemOptions>
				</IonItemSliding>
			))}
		</IonList>
	);
};

export default PlayerList;
