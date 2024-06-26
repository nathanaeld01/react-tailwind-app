import clsx from "clsx";
import { format } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import { twMerge } from "tailwind-merge";

function cn(...classes) {
	return twMerge(clsx(classes));
}

function formatDate(date) {
	return format(date, "EEEE, MMMM d");
}

function formatTime(time, timezone) {
	return format(fromZonedTime(time, timezone, "h:mm a"), "h:mm a");
}

function getBookingDate(time, date) {
	return time + ", " + format(new Date(date), "EEEE, MMMM d, yyyy");
}

export { cn, formatDate, formatTime, getBookingDate };
