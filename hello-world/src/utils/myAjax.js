
export function myAjax(url, method = 'GET', postBody = {}){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        console.log(url)
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    console.log(xhr.response)
                    resolve(xhr.response)
                } else {
                    reject(false)
                }
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText, e);
        };
    
        xhr.open(method, url, true);
        xhr.responseType = 'json'
        if(method === 'GET'){
            xhr.send(null);
        }else {
            xhr.send(postBody)
        }
    })

}