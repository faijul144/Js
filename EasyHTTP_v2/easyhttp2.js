/*

@version 2
@with fetch

*/

class EasyHTTP {
    //Make Get Request
    get(url) {
         // parenthesis needed if their is more than one paramiter
        return new Promise((resolve, reject) => {
            fetch(url)
                // No need of parenthesis if their is only one paramiter
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }
//Make Post Request
    post(url,data) {
        // parenthesis needed if their is more than one paramiter
       return new Promise((resolve, reject) => {
           fetch(url,{
               method : 'POST',
               header: {
                   'Content-type' : 'application/json'
               },
               body: JSON.stringify(data)
           })
               // No need of parenthesis if their is only one paramiter
               .then(res => res.json())
               .then(data => resolve(data))
               .catch(err => reject(err));
       });

   }
//Make Update Request
   put(url,data) {
    // parenthesis needed if their is more than one paramiter
   return new Promise((resolve, reject) => {
       fetch(url,{
           method : 'PUT',
           header: {
               'Content-type' : 'application/json'
           },
           body: JSON.stringify(data)
       })
           // No need of parenthesis if their is only one paramiter
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err));
   });

}
//Make Delete Request
delete(url) {
    // parenthesis needed if their is more than one paramiter
   return new Promise((resolve, reject) => {
       fetch(url,{
           method : 'DELETE',
           header: {
               'Content-type' : 'application/json'
           }
       })
           // No need of parenthesis if their is only one paramiter
           .then(res => res.json())
           .then(data => resolve('Data Deleted'))
           .catch(err => reject(err));
   });

}
}