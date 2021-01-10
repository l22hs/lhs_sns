<div id="time"></div>
<script>
function showTime(){
    var d = new Date();
    var h = d.getHours();
    if(h >= 12) var oo = "PM ";
    else var oo = "AM ";
    if(h > 12) h -= 12;
    document.getElementById("time").innerHTML = oo + h + ":" + d.getMinutes();
}
window.setInterval("showTime()", 1000);
</script>
