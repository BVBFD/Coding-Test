function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  // 갈수 있는 방향 그래프 그리기
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  // console.log(graph);

  // v라는 정점에서 i로 갈수 있느냐?
  function DFS(v) {
    if (v === n) {
      answer++;
      // console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          // 트리에서 그 전 트리로 다시 올라갈땐 다시 pop해줘서 빼줘야함
          path.pop();
        }
      }
    }
  }

  // 1은 출발점이니깐 무조건 들어가야함
  path.push(1);
  // 처음에 8가지가 나오는데 ch[1] 체크를 안해줘서 그런거임
  ch[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
