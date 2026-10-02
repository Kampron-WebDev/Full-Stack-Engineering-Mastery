/**
 * formatBytes(1536) → '1.5 KB'
 * See README.md for all the rules.
 */
export function formatBytes(bytes) {
  let value = bytes;
  let units = ["B", "KB", "MB", "GB", "TB"];
  let unit = "";
  let count = 1;

  if (value < 0) {
    throw new RangeError("Bytes must be >= 0");
  }
  if (value < 1024) {
    unit = units[0];
    return `${value} ${unit}`;
  }

  while (value >= 1024 && unit !== "TB") {
    value = value / 1024;
    value = Number(value.toFixed(1)); //what does the output look like right at the boundary?" 1048575 / 1024 = 1023.99, so it should be 1024.0, which is 1.0 MB"

    unit = units[count];
    count++;
  }

  return `${value.toFixed(1)} ${unit}`;
}
