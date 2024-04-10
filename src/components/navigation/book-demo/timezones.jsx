import { timezones } from "../../../lib/constants";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";

export const DemoTimezones = ({ selectedTimezone, setSelectedTimezone }) => (
	<Select onValueChange={setSelectedTimezone} value={selectedTimezone}>
		<SelectTrigger>
			<SelectValue placeholder="Select timezone" />
		</SelectTrigger>
		<SelectContent side="top">
			{Object.entries(timezones).map(([region, zones]) => (
				<SelectGroup key={region} label={region}>
					<SelectLabel>{region}</SelectLabel>
					{zones.map(zone => (
						<SelectItem key={zone} value={zone}>
							{zone.replace("_", " ")}
						</SelectItem>
					))}
				</SelectGroup>
			))}
		</SelectContent>
	</Select>
);
