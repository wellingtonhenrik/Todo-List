import React from "react";
import {cva, type VariantProps} from "class-variance-authority";

export const iconVariants = cva("", {
variants: {
    animate: {
        false: "",
        true: "animate-spin",
    },

}, defaultVariants: {
    animate: false
}
});

interface IconsProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({svg: SvgComponent, animate, className, ...props}: IconsProps){
return <SvgComponent className={iconVariants({animate, className})} {...props}/>;
}