function solution(age) {
    var answer = '';
    const str = String(age);
    let cnt = 0;
    
    while(cnt < str.length){
        answer += String.fromCharCode(str[cnt].charCodeAt(0) + 49);
        cnt ++;
    }
    return answer;
}