var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')


upload.addEventListener('change', function () {

    var file = upload.files[0]

    if (!file)
        return

    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = `hinh anh phai duoc dinh dang JPEG`
        return
    }else{
        error.innerHTML = ``
    }

    if (file.size / (1024 *1024) > 5 ) {
        error.innerHTML = `chi duoc upload anh < 5MB`
        return
    }else{
        error.innerHTML = ``
    }

    var img = document.createElement('img')
    
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = function (e) {
        img.src = e.target.result
    }

    preview.appendChild(img)
})