import { useEffect, useState } from "react";

function App() {
	const [advice, setAdvice] = useState("Your Test Advice");
	const [adviceId, setAdviceId] = useState(0);
	function MainContainer({ containerClass, children }) {
		return <div className={containerClass}>{children}</div>;
	}
	function AdviceNumber() {
		return <p className="advice-number">Advice {`#${adviceId}`}</p>;
	}
	function ButtonSvg({ btnClass, imgSrc, imgAlt, imgClass, onClick }) {
		return (
			<button className={btnClass} onClick={onClick}>
				<img className={imgClass} src={imgSrc} alt={imgAlt} />
			</button>
		);
	}
	function AdviceContainer({ children }) {
		return <p className="advice">{children}</p>;
	}
	function AdviceDivider() {
		return (
			<>
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
			</>
		);
	}
	async function getAdvice() {
		const rest = await fetch("https://api.adviceslip.com/advice");
		const data = await rest.json();
		const {
			slip: { id, advice },
		} = data;
		setAdvice(advice);
		setAdviceId(id);
	}
	useEffect(function () {
		getAdvice();
		console.log();
	}, []);
	return (
		<MainContainer containerClass={"app-main"}>
			<AdviceNumber />
			<AdviceContainer>{advice}</AdviceContainer>
			<AdviceDivider />
			<ButtonSvg
				onClick={getAdvice}
				btnClass={"dice-btn"}
				imgSrc={"/images/icon-dice.svg"}
				imgAlt={"Dice icon"}
				imgClass={"dice"}
			/>
		</MainContainer>
	);
}

export default App;
// W useEfet stworzyć dwa useState ktore bea przechowywać porade i id, a potem uzyc tego w komponentach
