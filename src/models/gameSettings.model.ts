export class GameSettings {
	resetOnShots: boolean;
	pointLimit: number;
	rememberPoints: boolean;
	rememberShots: boolean;
	changePlayersAutomatically: boolean;

	constructor(
		pointLimit: number = 3,
		resetOnShots: boolean = true,
		rememberPoints: boolean = false,
		rememberShots: boolean = false,
		changePlayersAutomatically: boolean = false
	) {
		this.resetOnShots = resetOnShots;
		this.pointLimit = pointLimit;
		this.rememberPoints = rememberPoints;
		this.rememberShots = rememberShots;
		this.changePlayersAutomatically = changePlayersAutomatically;
	}
}
