const line = [
    [130, 14, "N"],
    [125, 9, "Y"],
    [125, 9, "N"],
    [110, 15, "Y"],
    [120, 12, "N"],
    [119, 13, "Y"],
] 








function thudnercoaster(linelength, linesarray){
    let people_allowed = 0
    for(let i = 0; i < linelength; i++)
    {
        if(linesarray[i][0] >= 120 )
        {
            if(linesarray[i][1] >= 12)
            {people_allowed +=1;}

            else if(linesarray[i][2] >= "Y")
            {people_allowed +=1;}
        }
    }
    return people_allowed
}

console.log(thudnercoaster(line.length, line));