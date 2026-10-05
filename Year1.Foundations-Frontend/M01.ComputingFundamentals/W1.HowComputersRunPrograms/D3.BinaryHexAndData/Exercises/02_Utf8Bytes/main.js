/**
 * byteReport('é') → { characters: 1, bytes: 2, hex: 'c3 a9' }
 */
export function byteReport(text) {
  const characters = [...text].length;
  const encoder = new TextEncoder();
  const bytes = encoder.encode(text);

  let hex = [];
  for (const byte of bytes) {
    hex.push(byte.toString(16).padStart(2, "0"));
  }
  hex = hex.join(" ");

  return { characters, bytes: bytes.length, hex };
}
