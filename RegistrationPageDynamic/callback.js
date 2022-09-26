const posts = [
    {title : 'Post 1',body : 'This is post One.',createdAt : new Date().getTime()},
    {title : 'Post 2',body : 'This is post Two.',createdAt : new Date().getTime()}
];

let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    // setTimeout(() => {
    intervalId =  setInterval(() => {
        let output = '';
        posts.forEach((post)=>{
            let createdDate = new Date(post.createdAt);
            output+=`<li>${post.title} ----- Created At: ${createdDate.getHours()}:${createdDate.getMinutes()}:${createdDate.getSeconds()} ----- Last updated: ${Math.trunc((new Date().getTime() - post.createdAt)/1000)} seconds ago</li>`;
        });
        // for(let i = 0; i<posts.length;i++){
        //     output+=`<li>${posts[i].title}</li>`;
        // }
        document.body.innerHTML = output;
    },1000);    
    // },1000);
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt : new Date().getTime()}); //Spread operator to handle multiple adding of posts
        // getPosts(); //Or we use callback
        callback();
    },2000);
}

function create4thPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt : new Date().getTime()});
        callback();
    },6000);
}

// getPosts();
createPost({title : 'Post 3',body : 'This is post Three.'},getPosts);
create4thPost({title : 'Post 4',body : 'This is post Four.'},getPosts);