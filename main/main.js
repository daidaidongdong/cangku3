module.exports = function main(str) {
    //write your code
    var num;
    var result=0;
    num=parseInt(str);    
    while(num>=10)
        {
            result=result+num%10;
            num=num/10;
        }
        result=result+num;
    return result;
};
