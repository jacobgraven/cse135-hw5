// Array to store posts
var posts = [];
var editing = false;
var currPostObj, currPost;

// Initial Page Features
const createButton = document.getElementById("create-button");
const dialogTemplate = document.getElementById("create-dialog");
const outputTag = document.getElementById("output-info");
const postContainer = document.getElementById("post-container");

// Dialog Input Fields
let titleInput = document.getElementById("input-title");
let dateInput = document.getElementById("input-date");
let textInput = document.getElementById("input-text");

// Dialog Form Buttons
const inputButton = document.getElementById("submit-dialog");
const cancelButton = document.getElementById("cancel-dialog");

window.addEventListener("load", () => {
    initPage();
});

function initPage() {
    if (localStorage.getItem("localPosts") != null) {
        let storedPosts = JSON.parse(localStorage.getItem("localPosts"));
        for (let i = 0; i < storedPosts.length; i++) {
            createPost(storedPosts[i]);
        }
    }
}

dialogTemplate.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        titleInput.value = "";
        dateInput.value = "";
        textInput.value = "";
        outputTag.value = "Submission cancelled";
    }
});

cancelButton.addEventListener("click", () => {
    titleInput.value = "";
    dateInput.value = "";
    textInput.value = "";
    outputTag.value = "Submission cancelled";
});

createButton.addEventListener("click", () => {
    outputTag.value = "";
    dialogTemplate.showModal();
});

inputButton.addEventListener("click", () => {
    // Form Validation
    if (!editing && titleInput.value != "" && dateInput.value != "" && textInput.value != "") {
        let title = DOMPurify.sanitize(titleInput.value);
        let text = DOMPurify.sanitize(textInput.value);
        let post = { title: title, date: dateInput.value, text: text };
        titleInput.value = "";
        dateInput.value = "";
        textInput.value = "";
        createPost(post);
    } else if (!editing) {
        outputTag.value = "Please fill out every field!";
    }

    if (editing) {
        if (titleInput.value != "" && dateInput.value != "" && textInput.value != "") {
            let title = DOMPurify.sanitize(titleInput.value);
            let date = dateInput.value;
            let text = DOMPurify.sanitize(textInput.value);

            currPost.childNodes[0].textContent = `${title}`;
            currPost.childNodes[2].textContent = `${date}`;
            currPost.childNodes[4].textContent = `${text}`;

            let newPostObj = { title: title, date: date, text: text };
            deletePost(currPostObj, currPost);
            createPost(newPostObj);
        } else {
            outputTag.value = "Please fill out every field in order to edit!";
        }
        titleInput.value = "";
        dateInput.value = "";
        textInput.value = "";
        editing = false;
    }
});

function createPost(postObj) {
    let newPost = document.createElement("div");
    newPost.className = "post-div";
    newPost.innerHTML = `<h3 id="title">${postObj.title}</h3>
                         <p id="date">${postObj.date}<p>
                         <p id="text">${postObj.text}</p>`

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deletePost(postObj, newPost);
    });

    let editButton = document.createElement("button");
    editButton.textContent = "Edit"
    editButton.addEventListener("click", function () {
        editPost(postObj, newPost);
    });

    newPost.append(editButton, deleteButton);
    postContainer.append(newPost);
    posts.push(postObj);

    localStorage.setItem("localPosts", JSON.stringify(posts));


}

function deletePost(postObj, post) {
    post.remove();
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title == postObj.title && posts[i].date == postObj.date && posts[i].text == postObj.text) {
            posts.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("localPosts", JSON.stringify(posts));
    console.log(posts);
}

function editPost(postObj, post) {
    editing = true;
    currPostObj = postObj;
    currPost = post;
    outputTag.value = "";
    titleInput.value = postObj.title;
    dateInput.value = postObj.date;
    textInput.value = postObj.text;
    dialogTemplate.showModal();
}