//your JS code here. If required.
let level=document.getElementById("level");
let c=0;
while(level)
{
    c++;
    level=level.parentElement
}
alert(c);