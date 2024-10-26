const url="https://api.github.com/users/";
const search_text=document.getElementById("search_text");
const search_btn=document.getElementById("search_btn");
const pro_containerEl=document.getElementById("pro_container");
const pro_loadingEl=document.getElementById("pro_loading");
const generateProfile=(profileData)=>{
    return(`<div class="profile">
    <div class="top_section">
        <div class="left_sec">
            <div class="pic">
                <img src="${profileData.avatar_url}">
            </div>
            <div class="self">
                <h1>${profileData.name}</h1>
                <p>${profileData.login}</p>
            </div>
        </div>
        <a href="${profileData.html_url}" target="blank">
        <button class="pri-btn">Check Profile</button>
        </a>
        
    </div>
    <div class="about">
        <h2>About</h2>
        <p>${profileData.bio}</p>
    </div>
    <div class="status">
        <div class="status_item">
            <h4>Followers</h4>
            <p>${profileData.followers}</p>
        </div>
        <div class="status_item">
            <h4>Followings</h4>
            <p>${profileData.following}</p>
        </div>
        <div class="status_item">
            <h4>Repos</h4>
            <p>${profileData.public_repos}</p>
        </div>
    </div>
</div>
</div>`);
};
const fetchProfile= async()=>{
    const username=search_text.value;
  
            pro_loadingEl.innerText="Loading........";
            pro_loadingEl.style.color="Black";
    try {
        const res=await fetch(`${url}${username}`);
        const data=await res.json();
        if(data.bio){

            pro_loadingEl.innerText="";
            pro_containerEl.innerHTML=generateProfile(data);
        }else{
            pro_containerEl.innerText="";
            pro_loadingEl.innerHTML=data.message;
            pro_loadingEl.style.color="red";
        }
        console.log("details",data);
    } catch (error) {
        console.log({error});
        pro_loadingEl.innerText="";
    }
};
search_btn.addEventListener('click',fetchProfile);
