function seis(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; i < a.length - i - 1; j++) {
      if (a[i] < a[i + 1]) {
        c = a[j + 1];
        a[j + 1] = a[j];
        a[j] = c;
      }
    }
  }
}
