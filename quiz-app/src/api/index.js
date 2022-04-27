import ky from 'ky';

export function fetch() {
  return ky('https://opentdb.com/api.php?amount=10').json();
}
