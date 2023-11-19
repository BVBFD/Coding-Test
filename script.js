function solution(n) {
  let answer = [];
  const ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(depth) {
    if (depth === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n + 1; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[depth] = 1;
      // 먼저 첫번쨰 DFS에서 끝까지 가지가 뻗고,
      DFS(depth + 1);
      // 가지를 끝까지 뻗었으면 그 전으로 다시 빽해서
      ch[depth] = 0;
      // 다른 쪽으로 또 가지를 뻗는다.
      DFS(depth + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
