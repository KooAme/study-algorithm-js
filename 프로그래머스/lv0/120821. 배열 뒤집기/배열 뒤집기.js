function solution(num_list) {
    const result = [];
    let cnt = num_list.length - 1; //마지막 원소
    while(cnt >= 0){
        result.push(num_list[cnt]);
        cnt --;
    }
    return result;
}