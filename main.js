nosex = 0
nosey = 0
leftEarx = 0
lefteary = 0
rightearx = 0
righteary = 0
lefteyex= 0
lefteyey=0

function preload() {
    clownnose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
    codmask=loadImage("https://i.postimg.cc/bN25c3Ch/794469d92431bd6d291755f35a4a6530-removebg-preview.png")
    thanos=loadImage ("https://i.postimg.cc/P5qcPTKm/R75G17D.png")
    ironman=loadImage ("https://i.postimg.cc/3NK1VFcg/hqdefault-removebg-preview.png")
    Fullmask=loadImage ("https://i.postimg.cc/Wp6f8hHG/N169-1000-Wx1000-H-removebg-preview.png")
    mask=loadImage ("https://i.postimg.cc/ZYphSbDn/white-face-mask-mydesignation-image-removebg-preview.png")



}


function setup() {

    canvas = createCanvas(550, 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)

}

function modelLoaded() {
    console.log("model is loaded")
}

function gotPoses(results) {

    console.log(results)
    console.log(results[0].pose.nose.x)
    console.log(results[0].pose.nose.y)
    nosex = results[0].pose.nose.x - 70
    nosey = results[0].pose.nose.y - 70
    leftearx = results[0].pose.leftEar.x
    lefteary = results[0].pose.leftEar.y
    rightearx = results[0].pose.rightEar.x
    righteary = results[0].pose.rightEar.y
    lefteyex= results[0].pose.leftEye.x-200
    lefteyey= results[0].pose.leftEye.y-300
}


function draw() {
    image(video, 0, 0, 550, 400)
    var select = document.getElementById('fite');
    var value = select.options[select.selectedIndex].value;
    if (value=="clown") {
        image(clownnose, nosex, nosey, 30, 30)
    } else if(value=="codmask"){ 
        
        image(codmask, lefteyex,lefteyey,500,400 )
    }

    else if(value=="thanos"){ 
        
        image(thanos, lefteyex,lefteyey,500,400 )
    }

    else if(value=="ironman"){ 
        
        image(ironman, lefteyex,lefteyey,500,400 )
    }

    else if(value=="Fullmask"){ 
        
        image(Fullmask, lefteyex,lefteyey,500,400 )
    }

    else if(value=="mask"){ 
        
        image(mask, lefteyex,lefteyey,500,400 )
    }

}