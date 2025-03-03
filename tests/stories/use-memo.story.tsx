import { hooked, useMemo, useState } from "@rbxts/roact-hooked";
import Roact from "@rbxts/roact";

const WorldsWorstClock = hooked(() => {
	const [unrelated, setUnrelated] = useState(0);
	const [updater, setUpdater] = useState(0);

	const currentTime = useMemo(() => os.clock(), [updater]);

	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout
				FillDirection={Enum.FillDirection.Vertical}
				Padding={new UDim(0, 5)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			<textlabel
				BackgroundTransparency={1}
				Font={Enum.Font.Code}
				LayoutOrder={1}
				Size={new UDim2(1, 0, 0, 38)}
				Text={"The current time might be " + currentTime}
				TextColor3={new Color3(0, 1, 0)}
				TextSize={32}
			/>
			<textbutton
				BackgroundColor3={new Color3(1, 0, 0)}
				Font={Enum.Font.Code}
				LayoutOrder={2}
				Size={new UDim2(1, 0, 0, 38)}
				Text={"Um..."}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				Event={{
					Activated: () => setUnrelated(unrelated + 1),
				}}
			/>
			<textbutton
				BackgroundColor3={new Color3(1, 0, 0)}
				Font={Enum.Font.Code}
				LayoutOrder={3}
				Size={new UDim2(1, 0, 0, 38)}
				Text={"New time, please"}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				Event={{
					Activated: () => setUpdater(updater + 1),
				}}
			/>
		</frame>
	);
});

export = (target: Frame) => {
	const handle = Roact.mount(<WorldsWorstClock />, target, "WorldsWorstClock");

	return () => Roact.unmount(handle);
};
