/**
 * Pretend 1 ns lasts 1 second, then describe it in the biggest sensible unit.
 * humanScale(100) → '1.7 minutes'
 */
export function humanScale(ns) {
  const seconds = [31536000, 86400, 3600, 60, 1];
  const unit = ["years", "days", "hours", "minutes", "seconds"];
  let value = ns;
  for (let i = 0; i < unit.length; i++) {
    let result = Number(value.toFixed(1)) / seconds[i];
    if (result >= 1) {
      return `${result.toFixed(1)} ${unit[i]}`;
    } else if (unit[i] === "seconds") {
      return `${value.toFixed(1)} ${unit[unit.length - 1]}`;
    }
  }
}
