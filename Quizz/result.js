let resultPhrase = ""

function resultPhraseF(){
    if(score == 0){
        return resultPhrase = "r1";
    }
    
    if(score > 0 && score < 6){
        return resultPhrase = "r2";
    }
    
    if(score > 5 && score < 11){
        return resultPhrase = "r3";
    }
    
    if(score > 10 && score < 16){
        return resultPhrase = "r4";
    }
    
    if(score > 15 && score < 20){
        return resultPhrase = "r5";
    }
    
    if(score == 20){
        return resultPhrase = "r6"
    }
}

