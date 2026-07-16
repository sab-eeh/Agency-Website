export function easing(name: "easeOut" | "easeIn" = "easeOut") {
  return name === "easeOut" ? "cubic-bezier(0.22, 1, 0.36, 1)" : "cubic-bezier(0.4, 0, 1, 1)";
}
