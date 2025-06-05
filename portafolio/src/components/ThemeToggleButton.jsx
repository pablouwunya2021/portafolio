import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 1000,
        padding: "0.5rem 1rem",
        cursor: "pointer",
        borderRadius: "6px",
        border: "none",
        backgroundColor: theme === "dark" ? "#444" : "#ddd",
        color: theme === "dark" ? "#eee" : "#111",
        fontWeight: "bold",
      }}
    >
      {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}
