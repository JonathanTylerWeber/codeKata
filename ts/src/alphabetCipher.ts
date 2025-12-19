export type CipherResult = {
  keyword: string;
  input: string;
  output: string;
};

/**
 * Alphabet Cipher (Vigenère-style)
 *
 * Rules for this kata starter:
 * - Treat letters as a-z only
 * - Normalize by lowercasing
 * - Ignore non [a-z] characters in BOTH message and keyword
 * - Output is lowercase a-z only
 */

//    ABCDEFGHIJKLMNOPQRSTUVWXYZ
//  A abcdefghijklmnopqrstuvwxyz
//  B bcdefghijklmnopqrstuvwxyza
//  C cdefghijklmnopqrstuvwxyzab
//  D defghijklmnopqrstuvwxyzabc
//  E efghijklmnopqrstuvwxyzabcd
//  F fghijklmnopqrstuvwxyzabcde
//  G ghijklmnopqrstuvwxyzabcdef
//  H hijklmnopqrstuvwxyzabcdefg
//  I ijklmnopqrstuvwxyzabcdefgh
//  J jklmnopqrstuvwxyzabcdefghi
//  K klmnopqrstuvwxyzabcdefghij
//  L lmnopqrstuvwxyzabcdefghijk
//  M mnopqrstuvwxyzabcdefghijkl
//  N nopqrstuvwxyzabcdefghijklm
//  O opqrstuvwxyzabcdefghijklmn
//  P pqrstuvwxyzabcdefghijklmno
//  Q qrstuvwxyzabcdefghijklmnop
//  R rstuvwxyzabcdefghijklmnopq
//  S stuvwxyzabcdefghijklmnopqr
//  T tuvwxyzabcdefghijklmnopqrs
//  U uvwxyzabcdefghijklmnopqrst
//  V vwxyzabcdefghijklmnopqrstu
//  W wxyzabcdefghijklmnopqrstuv
//  X xyzabcdefghijklmnopqrstuvw
//  Y yzabcdefghijklmnopqrstuvwx
//  Z zabcdefghijklmnopqrstuvwxy

const alphabet: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// encode
// 0-25 letters (26 total)
// have array with alphabet
// loop over message, for each char we need to move over keyword number of times

export function encode(message: string, keyword: string): string {
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let msgIdx = message[i];
    let keyIdx = keyword[i % keyword.length];

    if (msgIdx && keyIdx) {
      let msgChar = alphabet.indexOf(msgIdx);
      let keyChar = alphabet.indexOf(keyIdx);
      let newIdx = (msgChar + keyChar) % 26;
      result += alphabet[newIdx];
    }
  }

  return result;
}

export function decode(ciphertext: string, keyword: string): string {
  // TODO: implement
  throw new Error("Not implemented");
}
