import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatNumber = (num: number | undefined) => {
    if (!num) return "0";

    if (num >= 1000) {
        let formatted = (num / 1000).toFixed(1);
        if (formatted.endsWith(".0")) {
            formatted = formatted.slice(0, -2);
        }
        formatted = formatted.replace(".", ",");
        return formatted + "K";
    }
    return num.toString();
};
