Webcam.set({width:250,
    height:250,
image_format:"png",
png_quality:90}
);
camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("snapshot").innerHTML="<img id='pic' src='"+data_uri+"'>";
        }
    )
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xTahLLg0D/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelload");
}
function identify(){img = document.getElementById("pic"); classifier.classify(img, gotResult);
}
function gotResult(error,result){

if(error){
    console.error(error);
}else{
    console.log(result);
    document.getElementById("object").innerHTML=result[0].label;
    percentage=(result[0].confidence.toFixed(2))*100
    document.getElementById("Accuracy").innerHTML=percentage

}
}
