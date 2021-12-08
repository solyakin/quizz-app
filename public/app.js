const toggleBtn = document.querySelector('#toggle-btn');
const catergory = document.querySelector(".sub-category-img")
let dropArea = document.getElementById("drop-area");
const uploadImage = document.querySelector(".upload-image");
const uploadBtn = document.getElementById("upload-btn");
const selectImage = document.querySelector(".select-image");
const pasteUrl = document.querySelector(".paste-url");
const pasteBtn = document.getElementById("paste-btn");
const selectBtn = document.getElementById("select-btn");
const uploadImage2 = document.querySelector(".upload-image-2");
const uploadBtn2 = document.getElementById("upload-btn-2");
const selectImage2 = document.querySelector(".select-image-2");
const pasteUrl2 = document.querySelector(".paste-url-2");
const pasteBtn2 = document.getElementById("paste-btn-2");
const selectBtn2 = document.getElementById("select-btn-2");
const uploadImage3 = document.querySelector(".upload-image-3");
const uploadBtn3 = document.getElementById("upload-btn-3");
const selectImage3 = document.querySelector(".select-image-3");
const pasteUrl3 = document.querySelector(".paste-url-3");
const pasteBtn3 = document.getElementById("paste-btn-3");
const selectBtn3 = document.getElementById("select-btn-3");
const showImage = document.getElementById("show-image");
const content = document.querySelector(".category-content_");
const showVideo = document.getElementById("show-video");
const content2 = document.querySelector(".category-content_2")
const showGif = document.getElementById("show-gif");
const content3 = document.querySelector(".category-content_3")
const answer = document.querySelector("#answer");
const box1 = document.querySelector(".box-1");
const correct = document.querySelector("#Correct");
const box2 = document.querySelector(".box-2");
const settings = document.querySelector("#settings");
const box3 = document.querySelector(".box-3");
const addText = document.getElementById("add-text");
const addIncentive = document.getElementById("add-incentive");
const addMedia = document.getElementById("add-media");
const editBtn = document.getElementById("edit-btn");
const toggleText = document.querySelector(".toggle-content");


if(toggleBtn){
  toggleBtn.addEventListener("click", ()=> {
    catergory.classList.toggle("sub-category-img")
  })
  showImage.addEventListener("click", () => {
    content.classList.toggle('category-content_')
  })
  showVideo.addEventListener("click", () => {
    content2.classList.toggle('category-content_2')
  })
  showGif.addEventListener("click", () => {
    content3.classList.toggle('category-content_3')
  })
}

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)   
    document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
})
  
;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})
  
  // Handle dropped files
  dropArea.addEventListener('drop', handleDrop, false)
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  
  function highlight(e) {
    dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
    dropArea.classList.remove('active')
  }
  
  function handleDrop(e) {
    var dt = e.dataTransfer
    var files = dt.files
    console.log(files)
    handleFiles(files)
}

let uploadProgress = []
let progressBar = document.getElementById('progress-bar')

function initializeProgress(numFiles) {
  progressBar.value = 0
  uploadProgress = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
  }
}

function updateProgress(fileNumber, percent) {
  uploadProgress[fileNumber] = percent
  let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
  console.debug('update', fileNumber, percent, total)
  progressBar.value = total
}

function handleFiles(files) {
  files = [...files]
  initializeProgress(files.length)
}

//handling display of upload image in edit quizz
uploadBtn.addEventListener("click", () => {
  uploadImage.style.display = "block";
  uploadBtn.classList.add("active")
  selectImage.style.display = "none";
  pasteUrl.style.display = "none";
  pasteBtn.classList.remove("active");
  selectBtn.classList.remove("active");
})
pasteBtn.addEventListener("click", () => {
  uploadImage.style.display = "none";
  selectImage.style.display = "none";
  pasteUrl.style.display = "block";
  pasteBtn.classList.add("active");
  uploadBtn.classList.remove("active");
  selectBtn.classList.remove("active");
})
selectBtn.addEventListener("click", () => {
  uploadImage.style.display = "none";
  selectImage.style.display = "block";
  pasteUrl.style.display = "none";
  selectBtn.classList.add("active")
  pasteBtn.classList.remove("active");
  uploadBtn.classList.remove("active");
})

//handling display of upload video in edit quizz
uploadBtn2.addEventListener("click", () => {
  uploadImage2.style.display = "block";
  uploadBtn2.classList.add("active")
  selectImage2.style.display = "none";
  pasteUrl2.style.display = "none";
  pasteBtn2.classList.remove("active");
  selectBtn2.classList.remove("active");
})
pasteBtn2.addEventListener("click", () => {
  uploadImage2.style.display = "none";
  selectImage2.style.display = "none";
  pasteUrl2.style.display = "block";
  pasteBtn2.classList.add("active");
  uploadBtn2.classList.remove("active");
  selectBtn2.classList.remove("active");
})
selectBtn2.addEventListener("click", () => {
  uploadImage2.style.display = "none";
  selectImage2.style.display = "block";
  pasteUrl2.style.display = "none";
  selectBtn2.classList.add("active")
  pasteBtn2.classList.remove("active");
  uploadBtn2.classList.remove("active");
})


//handling display of upload video in edit quizz
uploadBtn3.addEventListener("click", () => {
  uploadImage3.style.display = "block";
  uploadBtn3.classList.add("active")
  selectImage3.style.display = "none";
  pasteUrl3.style.display = "none";
  pasteBtn3.classList.remove("active");
  selectBtn3.classList.remove("active");
})
pasteBtn3.addEventListener("click", () => {
  uploadImage3.style.display = "none";
  selectImage3.style.display = "none";
  pasteUrl3.style.display = "block";
  pasteBtn3.classList.add("active");
  uploadBtn3.classList.remove("active");
  selectBtn3.classList.remove("active");
})
selectBtn3.addEventListener("click", () => {
  uploadImage3.style.display = "none";
  selectImage3.style.display = "block";
  pasteUrl3.style.display = "none";
  selectBtn3.classList.add("active")
  pasteBtn3.classList.remove("active");
  uploadBtn3.classList.remove("active");
})


// $(".dragg-item").draggable({
//   classes: {
//   "ui-draggable": "move"
//   }
// })

if(answer){
  answer.addEventListener("click", () => {
    box1.classList.toggle("box-1");
  })
  correct.addEventListener("click", () => {
    box2.classList.toggle("box-2");
  })
  settings.addEventListener("click", () => {
    box3.classList.toggle("box-3");
  })
}


//ADD-EDIT RESULT
addText.addEventListener("click", () => {
  toggleText.classList.toggle("toggle-content");

});
const showMedia = document.querySelector(".social-content");

addMedia.addEventListener("click", () => {
  showMedia.classList.toggle("social-content");
})

const showIncentive = document.querySelector(".incentive-content");
addIncentive.addEventListener("click", () => {
  showIncentive.classList.toggle("incentive-content");
})

const showBtns = document.querySelector(".btns-list");
editBtn.addEventListener("click", () => {
  showBtns.classList.toggle("btns-list");
});


