const array_names = ["mama","papa","shagun","swastik"];
const array_picts = ["IMG_0086.JPG","DSC03226.JPG","IMG_8544.jpg","DSC02232.JPG"];

var i = 0;

function update(){
    i++;
    var number_of_family_members_in_array = 3;
    if (i > number_of_family_members_in_array){
        i = 0;
    }
    var updatedImage = array_picts[i];
    var updatedName = array_names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}