function App() {
	function MainContainer({ containerClass, children }) {
		return <div className={containerClass}>{children}</div>;
	}
	function AdviceNumber() {
		return <p className="advice-number">Advice #123</p>;
	}
	function ButtonSvg({ btnClass, imgSrc, imgAlt, imgClass }) {
		return (
			<button className={btnClass}>
				<img className={imgClass} src={imgSrc} alt={imgAlt} />
			</button>
		);
	}
	function AdviceContainer({ children }) {
		return <p className="advice">{children}</p>;
	}
	return (
		<MainContainer containerClass={"app-main"}>
			<AdviceNumber />
			<AdviceContainer>
				"It is easy to sit up and trake notice, what's difficult is
				getting up and taking ation."
			</AdviceContainer>
			<img
				src="/images/pattern-divider-desktop.svg"
				alt="Pattern Divider"
			/>
			<ButtonSvg
				btnClass={"dice-btn"}
				imgSrc={"/images/icon-dice.svg"}
				imgAlt={"Dice icon"}
				imgClass={"dice"}
			/>
		</MainContainer>
	);
}

export default App;
