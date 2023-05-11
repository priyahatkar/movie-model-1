console.log("hello world");

const cl = console.log;
let movieArr = [];
const showModelBtn = document.getElementById("showModelBtn");

const myModel = document.getElementById("myModel");
const movieClose = [...document.querySelectorAll(".movieClose")]
const backDrop = document.getElementById("backDrop");
const title = document.getElementById("title");
const imgUrl = document.getElementById("imgUrl");
const rating = document.getElementById("rating");
const moviesContainer = document.getElementById("moviesContainer");
const movieForm = document.getElementById("movieForm");



let drama = (str) =>{
    let result = "";
    str.forEach(arr =>{
        result += `
        <div class="col-md-4 col-sm-6 mb-20">
                    <div class="card-group">
                        <div class="card border-0">
                            <div class="card-header bg-primary text-white">
                                <h2>${arr.movie_title}</h2>
                            </div>
                            <div class="card-body">
                                <img src="${arr.movie_imageUrl}"
                                    class="" alt="">
                            </div>
                            <div class="card-footer">
                                <p>${arr.movie_rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
                        `
    })
    moviesContainer.innerHTML=result
}


const modelShowHideHandler = () =>{
    myModel.classList.toggle("visible");
    backDrop.classList.toggle("visible");
}
const onSubmitMovieHandler = (e) =>{
    e.preventDefault();

    movieObj ={
        movie_title : title.value,
        movie_imageUrl : imgUrl.value,
        movie_rating : rating.value
    }
    movieArr.push(movieObj);
    drama(movieArr)
    e.target.reset();
    myModel.classList.toggle("visible");
    backDrop.classList.toggle("visible");
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Movie Added Successfully',
        showConfirmButton: false,
        timer: 3000
    })
}

showModelBtn.addEventListener("click", modelShowHideHandler);
movieClose.forEach(ele =>ele.addEventListener("click", modelShowHideHandler));
movieForm.addEventListener("submit", onSubmitMovieHandler);