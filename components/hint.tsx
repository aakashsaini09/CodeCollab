import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import React from "react";
export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
};
export const Hint =({label, children, side, align, sideOffset, alignOffset}: HintProps) => {
    return (
    <TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent align={align} sideOffset={sideOffset} alignOffset={alignOffset} side={side} className="text-white bg-gray-600 text-sm p-1 border-black">
                <p className="font-semibold capitalize">{label}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
    )
};