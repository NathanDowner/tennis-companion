export class GameSettings {
	pointLimit: number;
	rememberPoints: boolean;
	rememberShots: boolean;
	changePlayersAutomatically: boolean;

	constructor(
		pointLimit: number = 3,
		rememberPoints: boolean = false,
		rememberShots: boolean = false,
		changePlayersAutomatically: boolean = false
	) {
		this.pointLimit = pointLimit;
		this.rememberPoints = rememberPoints;
		this.rememberShots = rememberShots;
		this.changePlayersAutomatically = changePlayersAutomatically;
	}
}
