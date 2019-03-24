/*

@version 3
@with async and await

*/

class EasyHTTP {
    //Make Get Request
    async get(url) {
            const response = await fetch(url);
            const resData = await response.json();
            return resData;
    }
//Make Post Request
    async post(url,data) {


        const response = await fetch(url,{
               method : 'POST',
               headers: {
                   'Content-type' : 'application/json'
               },
               body: JSON.stringify(data)
           })
           const resData = await response.json();
           return resData;


   }
//Make Update Request
async put(url, data) {
    const response = await fetch(url,{
           method : 'PUT',
           headers: {
               'Content-type' : 'application/json'
           },
           body: JSON.stringify(data)
       })
       const resData = await response.json();
       return resData;

}
//Make Delete Request
async delete(url) {

    const response = await fetch(url,{
           method : 'DELETE',
           headers: {
               'Content-type' : 'application/json'
           }
       })
       const resData = await 'Data Deleted';
       return resData;

}
}