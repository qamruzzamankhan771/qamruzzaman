import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 outline-none", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
};

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    );
};
