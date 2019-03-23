const http = new easyHTTP;

// Get Post
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
//     if(err){
//     console.log(err);
//     }else{
//     console.log(posts);
//     }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,posts){
//     if(err){
//     console.log(err);
//     }else{
//     console.log(posts);
//     }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This Is A Custom Post'
};

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,posts){
//         if(err){
//         console.log(err);
//         }else{
//         console.log(posts);
//         }
// })

// update post
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,posts){
//         if(err){
//         console.log(err);
//         }else{
//         console.log(posts);
//         }
// })

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
    console.log(err);
    }else{
    console.log(response);
    }
});
