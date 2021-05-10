const changeStage = (destination) => {

    let arrStage = ["stage1", "stage2", "stage3", "stage4"];

    arrStage = arrStage.filter(val => !destination.includes(val));

    document.getElementById(destination).style.display = "block";

    for(let _stage of arrStage){
        document.getElementById(_stage).style.display = "none";
    }
}

