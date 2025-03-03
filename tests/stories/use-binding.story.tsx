import { hooked, useBinding, useEffect } from "@rbxts/roact-hooked";
import Roact from "@rbxts/roact";

const RunService = game.GetService("RunService");

const Stopwatch = hooked(() => {
	const [timer, setTimer] = useBinding(0);

	useEffect(() => {
		const connection = RunService.Heartbeat.Connect((step) => setTimer(timer.getValue() + step));

		return () => connection.Disconnect();
	});

	return (
		<textlabel
			Size={new UDim2(1, 0, 1, 0)}
			Text={timer.map((time) => `Time: ${"%.02f".format(time)}`)}
			TextSize={32}
		/>
	);
});

export = (target: Frame) => {
	const handle = Roact.mount(<Stopwatch />, target, "Stopwatch");

	return () => Roact.unmount(handle);
};
