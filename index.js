console.log("hello this is the basic calculator app ");

let input_ele=document.querySelector('input');

//! by cliking the value get an number 
{
    
    function clickMe(event)
    {
        if(input_ele.value=="Syntax Error")
        {
            clearing();

        }
        input_ele.value+=event.target.value;
    }
}

//! claring of the input filed
{
    function clearing()
    {
        input_ele.value="";
    }
}

//! manin calcultion part 
{
    function change(stAns)
    {
        stAns = stAns.replaceAll('÷', '/');
        stAns = stAns.replaceAll('x', '*');
        return stAns ;
    }
    //* print the error if the input start with % / *
    function calculation()
    {
        let stAns=input_ele.value;
        stAns=change(stAns);
        console.log(stAns);
        if(stAns[0]=='%'|| stAns[0]=='÷'||stAns[0]=='x')
        {
            input_ele.value="Syntax Error"
            return ;
        }
        else
        {
            try 
            {
                let result = eval(stAns);
                input_ele.value = result;
            } 
            catch 
            {
                input_ele.value="Syntax Error";
            }
        }
    }
    
}

//! change status
{
    function changeSign(event)
    {
        let str =input_ele.value;
        if(event.target.value=='%')
        {
            let num =parseInt(str);
            num=num/100;
            input_ele.value=num;
        }
        else 
        {
            str="-"+str;
            input_ele.value=str;
        }
    }
}
