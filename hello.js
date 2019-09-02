function BubbleSort(){
    var input = document.getElementById("myInput").value;
    var para = document.getElementById("para");
    var arr = input.split("");
    var array = para.innerHTML = arr;
    console.log(array);

    var swapp;
    var n = array.length-1;
    var x=array;
do {
    swapp = false;
    for (var i=0; i < n; i++)
            {
            if (x[i] > x[i+1])
                {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
                }
            }
    n--;
    } while (swapp);
    para2.innerHTML = x;
    console.log(x);
}