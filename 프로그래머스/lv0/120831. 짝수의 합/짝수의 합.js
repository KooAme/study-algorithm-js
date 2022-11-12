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
//let value = Math.floor(n/2);
//return value*(value+1);
