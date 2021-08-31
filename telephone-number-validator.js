function telephoneCheck(phone) {

    let last7nums = /(\d{3}[- .]?\d{4})$/;
    let end = phone.match(last7nums);
    if(!end){return false;}

    let start = phone.replace(last7nums, '');


    let parens = /1?[- .]?[(]\d{3}[)][- .]?/;
    let areaCode = start.match(parens);
    if (areaCode){
        let extraChars = start.replace(parens,'');
        let final = extraChars.length ? false : true;
        return final;
    }else{
        let noParens = /1?[- .]?\d{3}[- .]?/;
        let areaCode2 = start.match(noParens);
        if (areaCode2){
            let extraChars = start.replace(noParens,'');
            let final = extraChars.length ? false : true;
            return final;
        }
    }

    return false;
}

telephoneCheck("555-555-5555");