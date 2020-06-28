import React from 'react';
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonBackButton,
} from '@ionic/react';

interface HeaderProps {
	title: string;
	backBtnHref: string;
	button: React.FC;
}

const Header: React.FC<HeaderProps> = ({
	title,
	backBtnHref = '',
	button = <></>,
}) => {
	return (
		<IonHeader>
			<IonToolbar>
				{backBtnHref !== '' && (
					<IonButtons slot="start">
						<IonBackButton defaultHref={backBtnHref} />
					</IonButtons>
				)}
				<IonTitle>{title}</IonTitle>
				<IonButtons slot="primary">{button}</IonButtons>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
