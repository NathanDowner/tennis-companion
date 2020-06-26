import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	bookmarkOutline,
	mailOutline,
	mailSharp,
	paperPlaneOutline,
	paperPlaneSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: 'Shots',
		url: '/shots',
		iosIcon: mailOutline,
		mdIcon: mailSharp,
	},
	{
		title: 'King of teh Court',
		url: '/page/Outbox',
		iosIcon: paperPlaneOutline,
		mdIcon: paperPlaneSharp,
	},
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Games</IonListHeader>
					<IonNote>hi@ionicframework.com</IonNote>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={true}>
								<IonItem
									className={
										location.pathname === appPage.url ? 'selected' : ''
									}
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>

				<IonList id="labels-list">
					<IonListHeader>Labels</IonListHeader>
					{labels.map((label, index) => (
						<IonItem lines="none" key={index}>
							<IonIcon slot="start" icon={bookmarkOutline} />
							<IonLabel>{label}</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
