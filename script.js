function solution(n) {
  function DFS(L) {
    if (L == 0) {
      return;
    } else {
      // 스택에 하나 하나 쌓이기 전에 실행
      DFS(L - 1);
      // 스택에 다 쌓이고 나서 실행
      console.log(L);
    }
  }

  DFS(n);
}

console.log(solution(3));
