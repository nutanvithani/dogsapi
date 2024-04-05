const get = async () => {
    document.getElementById("img").innerHTML ="";
    try{
        let dog = await fetch("https://dog.ceo/api/breeds/image/random");
        let data = await dog.json();

        let img = document.createElement("img");
        img.src = data.message;

        document.getElementById("img").appendChild(img);
    }
    catch(err){
        console.log(err);
    }
}
document.getElementById("btn").addEventListener("click",()=>{

    get();
})