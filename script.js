function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let tmp = Array.from({ length: m }, () => 0);
  let ch = Array.from({ length: n }, () => 0);

  function DFS(depth) {
    if (depth === m) {
      answer.push(tmp.slice());
    } else {
      // for 문으로 일단 가지를 뻗는다.
      for (let i = 0; i < n; i++) {
        // 그 전 가지 단계에서 어떤 변수 쓰고 왔다면 넘긴다.
        if (ch[i] === 0) {
          // 가지를 뻗을 때 ch배열 1로 만들어서 썼음을 표시함.
          ch[i] = 1;
          // tmp 임시배열에 해당 변수 넣고.
          tmp[depth] = arr[i];
          // 그 바로 다음 단계에서 DFS를 돌려 다시 가지를 뻗음.
          DFS(depth + 1);
          // 그리고 마지막 DFS 트리 단계에서 다시 백할때 ch확인 배열 0으로 만듦
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
