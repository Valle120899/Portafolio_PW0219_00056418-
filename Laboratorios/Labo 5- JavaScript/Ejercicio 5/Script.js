function cinco(b) {
  for (let i = 0; i < b.length; i++) {
    if (b[i] == b[b.length - 1 - i]) d++;
  }
  if (d == b.length) return "Es palíndrome";
  else return "NEl";
}
