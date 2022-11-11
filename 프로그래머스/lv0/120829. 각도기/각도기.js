function solution(angle) {
    if(angle > 0  && angle < 90){
        return 1;
    }
    if(angle === 90){
        return 2;
    }
    if(angle > 90  && angle < 180){
        return 3;
    }
    return 4;
}
//return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;