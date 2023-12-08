$(document).ready(function(){
   const slide = $('#imagebox');
   const name = $("#imgname");
    const position =$("#imgpost");
    let slideimages =['test.jpg','test1.jpg','testimonial-1.jpg','test2.jpg','test3.jpg'];
    const len= slideimages.length
    console.log(len)
    let imgnames=["TONY","DOMNIC","JAMES","PAUL","HOBBS"];
    let post=["Bath,AB2","Bath,BAS2","Bath,BA2","Bath,ACC2","Bath,HBA2"]
    let i=0;

    function change(){
        if(i<len){
            console.log(slideimages[i])
            slide.attr('src', slideimages[i]);
            name.text(imgnames[i]);
            position.text(post[i]);
            updateDots(i);
            i++
        }else{
            i=0;
        }
        setTimeout(change,4000)
    }

    $('#previous').click(function(){
        console.log("haiii")
        const lenind =len-1;
        console.log(lenind)
        if(i>=0){
            let ind =i-1
            if(i>0){
            let img_a = slideimages[ind];
            let nametag_a = imgnames[ind];
            let pos_a = post[ind];
            slide.attr('src',img_a);
            name.text(nametag_a);
            position.text(pos_a);
            i--;
            }else{
                let img_b = slideimages[lenind];
                let nametag_b = imgnames[lenind];
                let pos_b = post[lenind];
                slide.attr('src',img_b);
                name.text(nametag_b);
                position.text(pos_b);
                i=lenind
                updateDots(i);
            }
            
        }
        else{
            i=lenind
        }
    });
    $('#next').click(function(){
        if(i<=len-1){
    
            let img_c = slideimages[i];
            let nametag_c = imgnames[i]
            let pos_c = post[i];
            slide.attr('src',img_c);
            name.text(nametag_c);
            position.text(pos_c);
            updateDots(i);
            i++;
        }else{
            i=0
        }
    })

    function updateDots(activeIndex) {
        $('.dot').each(function(index, dot) {
            $(dot).removeClass('active');
            if (index === activeIndex) {
                $(dot).addClass('active');
            }
        });
    }
    

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax_info.json");
    xhr.send()
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                let datas =JSON.parse(xhr.responseText);
                console.log(datas)
                let dtslen = datas.length
                console .log("===",dtslen)
                $("#main-1").click(function(){
                    $("#prntmain-1").addClass('selected')
                    $("#prntmain-1").removeClass('unselected')
                    $("#prntmain-2").removeClass('selected')
                    $("#prntmain-3").removeClass('selected')
                    $("#prntmain-2").addClass('unselected')
                    $("#prntmain-3").addClass('unselected')
                  let inputs = datas[0]
                  console.log("====>>0",inputs)
                    $("#grid-1").text(inputs.Q1);
                    $("#grid-1-1").text(inputs.A1);
                    $("#grid-2").text(inputs.Q2);
                    $("#grid-2-2").text(inputs.A2);
                    $("#grid-2-3").html(inputs.A-2-2);
                    $("#grid-3").text(inputs.Q3);
                    $("#grid-3-2").text(inputs.A3);
                    $("#grid-4").text(inputs.Q4);
                    $("#grid-4-2").text(inputs.A4);
                    $("#grid-5").text(inputs.Q5);
                    $("#grid-5-2").text(inputs.A5);
                    $("#grid-6").text(inputs.Q6);
                    $("#grid-6-2").text(inputs.A6);
                })

                $("#main-2").click(function(){
                    $("#prntmain-2").addClass('selected')
                    $("#prntmain-2").removeClass('unselected')
                    $("#prntmain-1").removeClass('selected')
                    $("#prntmain-3").removeClass('selected')
                    $("#prntmain-1").addClass('unselected')
                    $("#prntmain-3").addClass('unselected')
                    console.log("daaataaaa",datas)
                  let inputs1 = datas[1]
                  console.log("====>>1",inputs1)
                    $("#grid-1").text(inputs1.Q1);
                    $("#grid-1-1").text(inputs1.A1);
                    $("#grid-2").text(inputs1.Q2);
                    $("#grid-2-2").text(inputs1.A2);
                    $("#grid-2-3").html(inputs1.A-2-2);
                    $("#grid-3").text(inputs1.Q3);
                    $("#grid-3-2").text(inputs1.A3);
                    $("#grid-4").text(inputs1.Q4);
                    $("#grid-4-2").text(inputs1.A4);
                    $("#grid-5").text(inputs1.Q5);
                    $("#grid-5-2").text(inputs1.A5);
                    $("#grid-6").text(inputs1.Q6);
                    $("#grid-6-2").text(inputs1.A6);
                })

                $("#main-3").click(function(){
                    $("#prntmain-3").addClass('selected')
                    $("#prntmain-3").removeClass('unselected')
                    $("#prntmain-2").removeClass('selected')
                    $("#prntmain-1").removeClass('selected')
                    $("#prntmain-2").addClass('unselected')
                    $("#prntmain-1").addClass('unselected')
                  let inputs2 = datas[2]
                  console.log("====>>2",inputs2)
                    $("#grid-1").text(inputs2.Q1);
                    $("#grid-1-1").text(inputs2.A1);
                    $("#grid-2").text(inputs2.Q2);
                    $("#grid-2-2").text(inputs2.A2);
                    $("#grid-2-3").html(inputs2.A-2-2);
                    $("#grid-3").text(inputs2.Q3);
                    $("#grid-3-2").text(inputs2.A3);
                    $("#grid-4").text(inputs2.Q4);
                    $("#grid-4-2").text(inputs2.A4);
                    $("#grid-5").text(inputs2.Q5);
                    $("#grid-5-2").text(inputs2.A5);
                    $("#grid-6").text(inputs2.Q6);
                    $("#grid-6-2").text(inputs2.A6);
                })
            }
        }
    } 

   
     
    window.onload = change;
});
