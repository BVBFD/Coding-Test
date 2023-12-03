function solution(n, f) {
  let answer, flag;

  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);

  // 조합수 구하기
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  function combi(n, r) {
    if (dy[n][r]) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  // 조합수 구하기

  // 순열구하기
  // 중복 순열은 여기서 ch(체크배열)만 빼면 됨.
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  // 중복 순열은 여기서 ch(체크배열)만 빼면 됨.
  // 순열구하기

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
