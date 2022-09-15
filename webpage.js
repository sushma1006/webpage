var about = document.getElementsByClassName("about")[0];
about.onclick = function()
{
    if (this.className == "clicked")
    {
        this.className = "about";
        document.body.style.backgroundColor = "";
    }
    else{
        this.className = "clicked";
        document.body.style.background = "rgb(234, 241, 243)";
        
        
        // var containers = document.getElementsByClassName('container');
        // containers.style.backgroundColor = "red";
        // var image = document.getElementsByClassName('image');
        // var style = document.createElement('style');
        // style.innerHTML = `
        // container.innerHTML = `{
        //     background-color:red;
        // }`;
        //     .image{
        //         position: $child-position;
        //         left:120px;
        //         border:2px solid red;
        //     }
        // }`;
       
    }
}