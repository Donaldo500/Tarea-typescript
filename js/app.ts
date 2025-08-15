const today: number[] = [14, 8, 2025];

const age = (day:number, month:number, year:number):number => {
    let ageNow:number = 0;
    ageNow = (today[2] as number) - year;

    if ((today[1] as number) < month){
        ageNow--;
    }else if(((today[1] as number) = month) && ((today[0] as number) < day)){
        ageNow--;
    }

    return ageNow;
}

console.log(`Tu edad es de: ${age(12,1,2010)} años`);