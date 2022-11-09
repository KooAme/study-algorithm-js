function solution(my_string, n) {
    var answer = '';
    let cnt = 0;
    while(cnt < my_string.length){
        const char = my_string[cnt];
        let repeatCnt = 0;
        
        while(repeatCnt < n){
            answer = answer + char;
            repeatCnt ++;
        }
        cnt ++;
    }
    return answer;
}