const fs = require('fs');

// fs.mkdir('nodetutor', (err)=>{
//   if(err)
//     console.log(err);
//   else{
//     fs.writeFile('./nodetutor/example.txt','1234567 bebeh',(err)=>{
//       if(err)
//         console.log(err);
//       else{
//         console.log('successfully created file');
//       }
//     });
//   }
// });
fs.unlink('./nodetutor/example.txt', (err)=> {
  if(err)
    console.log(err);
  else{
    console.log('successfully removed the files');}
      fs.rmdir('nodetutor',(err)=>{
      if(err)
      console.log(err);
    else{
      console.log('deleted folder');}
  });
});

// create a file
// fs.writeFile('example.txt', "this is an example", (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log('File successfully created');
//     // if not specify utf8 data will be in binary 
//     fs.readFile('example.txt','utf8',(err, file)=>{
//       if(err)
//         console.log(err);
//       else
//         console.log(file);
//     });
// });


// fs.rename('example.txt', 'example2.txt',(err)=>{
//   if(err) 
//     console.log(err);
//   else
//     console.log('Successfully renamed the file!!');

// });

// fs.appendFile('example2.txt', 'Some data beig appended', (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log('Successfully appended data to file');
// });

// fs.unlink('example2.txt', (err)=>{
//   if(err)
//    console.log(err);
//    else
//    console.log('Successfully deleted the file');
// });