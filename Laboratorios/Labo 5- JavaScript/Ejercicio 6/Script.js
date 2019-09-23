function seis(a) {
  for (let i = 0; i < a.length; i++) {
    b = a[0];

    if (a[i] < b) {
      b = a[i];
    } else {
      if (a[i] > b) {
        b = b;
      }
    }
  }
  return a;
}
