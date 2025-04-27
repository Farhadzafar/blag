import React from "react";

interface sectionProps {
  children: React.ReactNode;
  styles?: string;
  bgColor?: string;
  py?: string;
}

export default function Section({
  children,
  styles,
  py = "py-24",
  bgColor,
}: sectionProps) {
  return (
    <section
      className={`px-4 md:px-8 lg:px-16 relative overflow-hidden ${bgColor} ${py} ${styles}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
