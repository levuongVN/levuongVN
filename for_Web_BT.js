const dong_ho = document.getElementById("clock");
const gio = document.getElementById("hour");
const phut = document.getElementById("minute")
const giay = document.getElementById("second");
const am_pm= document.getElementById("AM_or_PM");
var gio_hien_tai= new Date();
var Hour;
var Minute;
var Second;
const anh = document.getElementById("img");
Hour= gio_hien_tai.getHours();
setInterval(function(){
    var gio_hien_tai= new Date();
    Hour= gio_hien_tai.getHours();
    Minute= gio_hien_tai.getMinutes();
    Second= gio_hien_tai.getSeconds();
     gio.textContent=Hour;
     phut.textContent=Minute;
     giay.textContent=Second;
     if(Hour>=0&&Hour<12){
        am_pm.textContent="AM!";
     }else if(Hour>=12 &&Hour<24){
        am_pm.textContent="PM!"
     }
},1000)// Set thoi gian chay lai cuar chuong trinh, tuc la cu 1s la se reset lai mot lan.
var user_set_wake= document.getElementById("Wake");
var gio_tu_set=Hour+":";
var user_set_lunch = document.getElementById("Lunch");
var gio_tu_set_lunch=Hour+":";
var user_set_sleep=document.getElementById("Sleep");
var gio_tu_set_sleep=Hour+":";
setInterval(function(){
    user_set_wake.addEventListener("change",function (){// Set time cho Wake up
        var new_time_wake = user_set_wake.value; 
        for(var i=0;i<=59;i++){
           if(gio_hien_tai.getMinutes()==i){
         gio_tu_set=Hour+":"+i;
        }
       }
       console.log(gio_tu_set)
       if(new_time_wake== gio_tu_set){
    anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";   
    document.getElementById("text_in_img").textContent='"Good morning"'
       }
    }
    )
    user_set_lunch.addEventListener("change",function(){// Set time cho Lunch
    var new_time_lunch = user_set_lunch.value;
    for(var i=0;i<=59;i++){
       if(gio_hien_tai.getMinutes()==i){
           gio_tu_set_lunch= Hour+":"+i;
       }
    }
    if(new_time_lunch== gio_tu_set_lunch){
       anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"; 
       document.getElementById("text_in_img").textContent="LET'S HAVE SOME LUNCH!"
    }
    }
    )
    user_set_sleep.addEventListener("change",function(){// Set time cho sleep
    var new_time_sleep = user_set_sleep.value;
    for(var i=0;i<=59;i++){
       if(gio_hien_tai.getMinutes()==i){
           gio_tu_set_sleep=Hour+":"+i;
       }
    }
    if(new_time_sleep== gio_tu_set_sleep){
       anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
       document.getElementById("text_in_img").textContent="i'm sleeping"
    }
    })
}, 1000)// reset khi nguoi dung thay doi value vao the input khac vd la the lunch sang wake

if( Hour >=6 &&Hour<=11){
    anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    document.getElementById("text_in_img").textContent='"Good morning"'
}
else if(Hour>=12 && Hour <=13){
    anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg"; 
    document.getElementById("text_in_img").textContent="LET'S HAVE SOME LUNCH!"
}
else if(Hour>=14&&Hour<=17){
    anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"
    document.getElementById("text_in_img").textContent="Good afternoon"
}else if(Hour>=18&& Hour<=21){
    anh.src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    anh.style.width="35%"
    document.getElementById("text_in_img").textContent='"Good evening"'
}else{
    anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    document.getElementById("text_in_img").textContent="i'm sleeping"
}
var anh1=true;

function bam(){
    if(anh1==true){
        anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg"// Thay đổi đường dẫn của ảnh
        document.getElementById("text_in_img").textContent="Let's Party!"
        document.getElementById("btn").innerHTML="Party over"
        anh1=false;// chuyển trạng thái thành false để kích hoạt lệnh else ở dưới
    }else{
        if(Hour >=6&&Hour<=11 ){
            anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
            document.getElementById("text_in_img").textContent="Good morning!"
            document.getElementById("btn").innerHTML="Party time ^^ ";
        }else if(Hour>=12 && Hour <=13){
            anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
            document.getElementById("text_in_img").textContent="Lunch time :3!"
            document.getElementById("btn").innerHTML="Party time ^^ ";
        }else if(Hour>=12&&Hour<=17){// affernoon
            anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"
            document.getElementById("text_in_img").textContent="Good afternoon!"
            document.getElementById("btn").innerHTML="Party time ^^ "
        }else if (Hour >=18 &&Hour<=21){// sleep
            anh.src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg"
            document.getElementById("text_in_img").textContent="Good night!"
            document.getElementById("btn").innerHTML="Party time ^^ "
        }else{
            anh.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
            document.getElementById("text_in_img").textContent="i'm Sleeping!"
            document.getElementById("btn").innerHTML="Party over ^^ ";
        }
        anh1=true;
    }   
}// Bam de vao party time
