module.exports = function check(str, bracketsConfig) {
  //---------------
  
var b=bracketsConfig;
var a=[];
var cnt=0;

for(var i=0;i<str.length;i++)
{
    
    for (var j=0;j<b.length;j++)
    {
        //console.log(b[j].indexOf(str[i]));
        if(b[j].indexOf(str[i])==0 && b[j][1]!=b[j][0])  a.push(str[i]);  //---добавить в стэк   -  если скобка открыта
         else if(b[j].indexOf(str[i])==0 && b[j][1]==b[j][0] && cnt%2==0) {a.push(str[i]); cnt++; break;}
         else if(b[j].indexOf(str[i])==0 && b[j][1]==b[j][0] && cnt%2!=0 && str[i]==a[a.length-1]) {a.pop(); cnt--; break;}

        else if(b[j].indexOf(str[i])==1 && b[j][0]==a[a.length-1]) a.pop();
        else if (b[j].indexOf(str[i])==1 && b[j][0]!=a[a.length-1]) return false ;
        
    }
    
}

if (a.length==0)return true;
else return false;

  // your solution
}
