import React from "react";
interface sectionProps {
  children: React.ReactNode;
  styles?: String;
  bgColor?: String;
  py?: String;
}

export default function Section({
  children,
  styles,
  py = "py-24",
  bgColor = "bg-background",
}: sectionProps) {
  return (
    <section
      className={`px-4 md:px-8 lg:px-16 relative overflow-hidden ${bgColor} ${py} ${styles}`}
    >
      <div className=" container mx-auto">{children}</div>
    </section>
  );
}
