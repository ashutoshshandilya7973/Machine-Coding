import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


function cn(...input){
    return twMerge(clsx(...input))
}

export {cn}