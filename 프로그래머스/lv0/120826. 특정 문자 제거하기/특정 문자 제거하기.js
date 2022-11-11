function solution(my_string, letter) {
    var answer = '';
    let cnt = 0;
    while(cnt < my_string.length){
        if(my_string[cnt] !== letter){
            answer = answer + my_string[cnt];
        } 
        cnt++;
    }
    return answer;
}
//filter와 split을 사용해서도 가능