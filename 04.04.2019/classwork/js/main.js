"use strict";

//const tagInput = document.getElementById('tag_input');
const tagInput = document.querySelector('#tag_input');
const tags = document.querySelector('.tags');
// tagInput.addEventListener("keyup", function()
// {

// })

// tagInput.onfocus = () =>
// {
//     tagInput.style.backgroundColor = "yellow";
// }

// tagInput.onpaste = function(e)
// {
//     alert("Ilkin");
//     return false;
// }

// tagInput.onblur = function()
// {
//     this.style.backgroundColor = "white";
// }


tagInput.onkeydown = function(e)
{
    if(e.keyCode === 13 || e.keyCode === 9)
    {
        e.preventDefault();
        const tagText = tagInput.value.trim();

        if(tagText.length > 0)
        {
            // let foundTag;
            // for(let i = 0; i < allTags.length; i++)
            // {
            //     if(allTags[i].innerText === tagText)
            //     {
            //         foundTag = allTags[i];
            //         break;
            //     }
            // }

            //first check whether name exists
            const allTags = tags.querySelectorAll(".tag");
            const foundTag = [...allTags].find(el => el.innerText === tagText);
            
            if(foundTag !== undefined)
            {
                //there is duplicate
                tags.insertBefore(foundTag, tagInput);
                tagInput.value = "";
                return;

                //foundTag.remove();
            }

            //1. create new empty div
            //2. Add tag class to new div
            //3. Write user tag text to innerText of newDiv
            //4. Add icon inside new div
            //5. Append new div to .tags div

            const newDiv = document.createElement("div");
            newDiv.classList.add("tag");
            newDiv.innerText = tagText;
            
            const iClass = document.createElement('i');
            iClass.classList.add("fas","fa-times");

            iClass.onclick = function() { 
                // this.parentElement.style.width = "0px";
                // this.parentElement.style.padding = "0px";
                // setTimeout(() => {
                this.parentElement.remove();
                // }, 1000);
            }

            newDiv.appendChild(iClass);
            
            tags.insertBefore(newDiv, tagInput);
            tagInput.value = "";
            
            //if tab pressed, then prevent default action and focu input
            // if(e.keyCode === 9) 
            // {
            //     e.preventDefault();
            //     tagInput.focus();
            // }
        }
        
    }

}
