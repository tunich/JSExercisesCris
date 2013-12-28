function myFunction()
{
x=document.getElementById('target')
if (x.style.display.match("none"))
  {
  x.style.display="block";
  }
else
  {
  x.style.display="none";
  }
}