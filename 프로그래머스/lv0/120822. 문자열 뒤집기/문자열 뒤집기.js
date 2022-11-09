function solution(my_string) {
    var answer = '';
    let result = my_string.length - 1;
    while(result >= 0){
        answer += my_string[result];
        result --;
    }
    return answer;
}