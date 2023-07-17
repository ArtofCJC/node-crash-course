const fs = require('fs')

// fs.readFile('./blog.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('hi samp');

// fs.writeFile('./blog.txt', 'humhmsnshfmgsifsnjfkchk!@#$%^&*(76543', () =>{
//     console.log('file was written');
// });
// fs.writeFile('./blog2.txt', 'humhmsfk!@#$%^&*(76543', () =>{
//     console.log('file was written');
// });

// if(fs.existsSync('./assets')){
// fs.mkdir('./assets', err => {
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// });
// }else{
//     fs.rmdir('./assets', (err) =>{
//         if(err){
//             console.log((err));
//         }
//         console.log('folder deleted');
//     })
// }



// deleting files (above is create then delete)

if (fs.existsSync('./delete.txt')) {
    fs.unlink('./delete.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}