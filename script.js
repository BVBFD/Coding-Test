function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let tmp = Array.from({ length: m }, () => 0);
  let ch = Array.from({ length: n }, () => 0);

  function DFS(depth) {
    if (depth === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[depth] = arr[i];
          DFS(depth + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
