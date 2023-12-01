import ViewController from "./controller/ViewController.js";
class App {
	async play() {
		ViewController.resultGame(await ViewController.playGame());
	}
}

export default App;
