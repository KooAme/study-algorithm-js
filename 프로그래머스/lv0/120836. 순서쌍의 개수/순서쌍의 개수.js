function solution(n) {
    var answer = 0;
    // let cnt = 0;
    // while(true){
    //     if(cnt > n){
    //         break;
    //     }
    //     if(n % cnt === 0){
    //         answer = answer + 1;
    //     }
    //     cnt ++;
    // }
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            answer = answer + 1;
        }
    }
    return answer;
}