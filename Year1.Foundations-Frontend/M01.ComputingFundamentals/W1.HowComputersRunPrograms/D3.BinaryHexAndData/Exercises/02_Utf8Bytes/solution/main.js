export function byteReport(text) {
  const characters = [...text].length; // spreading a string splits it into real code points
  const bytes = new TextEncoder().encode(text);
  const hex = [...bytes].map((b) => b.toString(16).padStart(2, '0')).join(' ');
  return { characters, bytes: bytes.length, hex };
}

// Think-about-it answer: 5 emoji = 5 characters but 20 bytes. A 10-BYTE column
// either rejects the insert or silently cuts the text mid-character (corrupting it),
// depending on the database. Always know whether a limit counts bytes or characters.
