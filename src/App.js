import { useEffect, useState } from "react";

function App() {
	const [adviceObj, setAdviceObj] = useState({
		adviceText: "Test Advice",
		id: 0,
	});

	async function getAdvice() {
		const rest = await fetch("https://api.adviceslip.com/advice");
		const data = await rest.json();
		const {
			slip: { id, advice },
		} = data;
		setAdviceObj({ ...adviceObj, adviceText: advice, id: id });
	}
	useEffect(function () {
		getAdvice();
	}, []);
	return (
		<div className="app-main">
			<p className="advice-number">Advice #{adviceObj.id}</p>
			<p className="advice">{adviceObj.adviceText}</p>
			{window.innerWidth > 375 ? (
				<img
					src="/images/pattern-divider-desktop.svg"
					alt="Pattern Divider"
				/>
			) : (
				<img
					src="/images/pattern-divider-mobile.svg"
					alt="Pattern Divider"
				/>
			)}
			<button
				aria-label={"Get another Advice"}
				className={"dice-btn"}
				onClick={getAdvice}
			>
				<img
					src={"/images/icon-dice.svg"}
					alt={"Dice icon"}
					className={"dice"}
				/>
			</button>
		</div>
	);
}

export default App;
