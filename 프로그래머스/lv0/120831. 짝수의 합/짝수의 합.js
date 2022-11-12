function solution(n) {
    let cnt = 1;
    let value = 0;
    while(cnt <= n){
        if(cnt % 2 === 0){
            value += cnt;
        }
        cnt ++;
    }
    return value;
}
// n보다 이하, 짝수
