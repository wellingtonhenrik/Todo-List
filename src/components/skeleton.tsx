import {cva, type VariantProps} from "class-variance-authority";
import type React from "react";


export const sketelonVariants = cva(`
    animate-pulse bg-gray-200 pointer-events-none`,{
variants:{
    rounded:{
        sm: "rounded-sm",
        lg: "roudned-lg",
        full: "rounded-full"
    }
},

defaultVariants:{
    rounded: "lg"
}
});

interface SkeletonProps extends VariantProps<typeof sketelonVariants>,
React.ComponentProps<"div">{}

export default function Skeleton({
    rounded,
    className,
    ...props
}: SkeletonProps){

    return <div className={sketelonVariants({rounded, className})} {...props} />
}