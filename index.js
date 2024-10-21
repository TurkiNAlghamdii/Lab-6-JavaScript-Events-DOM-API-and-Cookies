const initialLikes = 100;
const initialDislikes = 20;

let likesCount = initialLikes;
let dislikeCount = initialDislikes;

const likesBtn = document.getElementById("likeBtn");
const dislikesBtn = document.getElementById("dislikeBtn");
const commentBox = document.getElementById("commentBox");
const submit = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const commentsList = document.getElementById("commentsList")

likesBtn.innerText = "👍" + initialLikes;
dislikesBtn.innerText = "👎" + initialDislikes;

likesBtn.addEventListener("click", () => {
    likesCount++;
    likesBtn.innerText = "👍" + likesCount;
    setCookie();
});



dislikesBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikesBtn.innerText = "👎" + dislikeCount;    
    setCookie();
});


submit.addEventListener("click", ()=>{
    const pElem = document.createElement("p");
    pElem.innerText = commentBox.value.trim();
    commentsList.appendChild(pElem);
    commentBox.value = "";
    setCookie();
})

clearBtn.addEventListener("click", ()=>{
    commentBox.value = "";
    document.cookie = "voted=true; path=/; expires=" + new Date(0).toUTCString();

    console.log("cookie Cleared");
})


function setCookie() {
    const expireOn = new Date(Date.now() + 60000);
    const cookieString = "voted=true; ;path=/; expires=" + expireOn.toUTCString();
    document.cookie = cookieString;
}


window.onload = function(){
    if(document.cookie.indexOf("voted=true") > -1){
        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        submit.disabled = true;
    }
}