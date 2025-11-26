import { useState } from "react";

interface AccordionProps {
  title: string;
  text: string;
  opened?: boolean;
}

export default function Accordion({
  title,
  text,
  opened = false,
}: AccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(opened || false);

  const toggleActive = (): void => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={`questions__container-item ${isActive ? "questions__container-item--active" : ""}`}
    >
      <div
        className="questions__container-item-title"
        onClick={toggleActive}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleActive();
          }
        }}
      >
        {title}
      </div>

      {isActive && <div className="questions__container-item-text">{text}</div>}
    </div>
  );
}
