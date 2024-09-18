const fs = require("fs");

// fs.writeFile("./contents/newdemo.txt", "file write using node", function (err, done) {
//     if (err) {
//         console.log("error is: ", err)
//     }
//     else {
//         console.log("success in file write")
//     }
// })

// handle result using callback
// function myWrite(filename, content, cb) {
//     fs.writeFile("./contents/" + filename, content, function (err, done) {
//         if (err) {
//             // console.log("error is: ", err);
//             cb(err)
//         }
//         else {
//             // console.log("success in file write");
//             cb(null, 'success in file write')
//         }
//     })
// }

// myWrite('ourfile.txt', 'hi from our file', function (err, done) {
//     if(err){
//         console.log("error: ",err)
//     }
//     else{
//         console.log("success: ", done)
//     }
// });
// myWrite("nextfile.txt", "welcome to node js");

// make it functional
// export it
// import it from another file

function myWrite(filename, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile("./contents/" + filename, content, function (err, done) {
      if (err) {
        reject(err);
      } else {
        resolve("done");
      }
    });
  });
}

// myWrite('newmypromise.txt', 'handling result using promise')
//     .then(function (done) {
//         console.log("success in file write", done)
//     })
//     .catch(function (err) {
//         console.log("error in file write: ", err)
//     })

function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile("./contents/" + filename, "utf-8", function (err, done) {
      if (err) {
        reject(err);
      } else {
        resolve(done);
      }
    });
  });
}

function renameFile(oldfile, newfilename){
    return new Promise(function(resolve, reject){
        fs.rename("./contents" + oldfile, "./contents"+ newfilename, function(err, done){
            if(err){
                reject(err)
            } else {
                resolve(done)
            }
        })
    })
}



module.exports = {
  mywrite: myWrite,
  readFile: readFile,
  renameFile: renameFile,
};
