const deg=6,hr=document.getElementById("hr"),mn=document.getElementById("mn"),sc=document.getElementById("sc");setInterval(()=>{let e=new Date,t=30*e.getHours(),n=6*e.getMinutes(),r=6*e.getSeconds();hr.style.transform=`rotateZ(${t+n/12}deg)`,mn.style.transform=`rotateZ(${n}deg)`,sc.style.transform=`rotateZ(${r}deg)`});