const endDate = "22 march 2024 12:00 PM";
document.getElementById("endDate").innerText = endDate;

const inputs= document.querySelectorAll("input")

function clock(){
    const end=new Date(endDate)
    const now=new Date()

    const diff=(end-now)/1000;

    if (diff<0)return;

    // covcer to days
    inputs[0].value=Math.floor(diff/3600/24);
    //convert to hours
    inputs[1].value=Math.floor(diff/3600)%24;
    //conver to minutes
    inputs[2].value=Math.floor(diff/60)%60;
    // conver to second
    inputs[3].value=Math.floor(diff)%60;

}
clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)

// 60min=3600sec.