function solution(array) {
    let sortedArray = array.sort((a,b)=> a-b);
    let cnt = 0;
    let mode = -1; //최빈값이 뭔지
    let modeRepeat = 0; //몇번 반복해서 최빈값이된건지
    let repeatCnt = 0;  //현재 똑같은 숫자가 몇번 등장
    let beforeNum = -1; //지금 보고 있는 숫자 이전
    let isDupMode = false; //최빈값이 중복됐는지
    while(cnt < array.length){
        if(beforeNum !== array[cnt]){
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        
        if(repeatCnt === modeRepeat){
            if(mode !== array[cnt]){
                isDupMode = true;
            }
        }
        
        if(repeatCnt > modeRepeat){
            mode = array[cnt];
            modeRepeat = repeatCnt;
            isDupMode = false;
        }
        beforeNum = array[cnt];
        cnt = cnt + 1;
    }
    if(isDupMode) return -1;
    return mode;
}