$(document).ready(function() {
    if ($('body').is('.userBody')) {
        document.getElementById("searchUserButton").addEventListener('click', function (){
            updateUserPages();
            updateUsers(false)
        });
        document.getElementById("selectUserType").addEventListener('change', function (){
            updateUserPages();
            updateUsers(false)
        });
        document.getElementById("selectPage").addEventListener("change", function() {
            updateUsers(true);
        });
        updateUserPages();
        updateUsers(false);
    }
});

function updateUsers(checkSelectedPage){
    let actionUrl = "/ajax/filterUsers/"
    let containStr = document.getElementById("searchTextBox").value;
    let userTypeId = document.getElementById("selectUserType").value;
    actionUrl += userTypeId+"/"+getSelectedPage(checkSelectedPage);

    ajaxCallGetUsers(actionUrl, containStr);
}

function updateUserPages(){
    let containStr = document.getElementById("searchTextBox").value;
    let userTypeId = document.getElementById("selectUserType").value;
    let actionUrl = "/ajax/filterUsersGetPages/" + userTypeId;

    let loadingHTML = '<div class="align-self-center spinner-border" role="status">\n' +
        '  <span class="sr-only">Loading...</span>\n' +
        '</div>';
    $('#resultBlock').html(loadingHTML);

    ajaxCallGetPages(actionUrl, {containStr: containStr})
}

function ajaxCallGetUsers(actionUrl, containStr){
    $.ajax({
        method: 'GET',
        url: actionUrl,
        data:{containStr: containStr},

        success: function (result) {
            let innerHTML="";
            let users = JSON.parse(result);

            for (let user of users){
                let usersHTML =
                    '<div class="userCard card col mb-4 shadow bg-light p-0"> ' +
                    '    <a href="/user/'+user.userId+'/edit" class="text-decoration-none text-dark"> ' +
                    '       <img class="card-img-top img-fluid" src="/static/images/ItemImages/userIcon.png" alt="Card image cap">' +
                    '       <div class="card-body text-center"> ' +
                    '           <h5 class="card-title">ID: '+user.userId+'</h5> ' +
                    '           <div class="p-1"> ' +
                    '               <p class="m-0">Name: '+user.name+'</p> ' +
                    '               <p class="m-0">Surname: '+user.surname+'</p> ' +
                    '               <p class="m-0">Username: '+user.username+'</p> ' +
                    '               <p class="m-0">Email: '+user.email+'</p> ' +
                    '           </div> ' +
                    '       </div> ' +
                    '     </a> ' +
                    '</div>';
                innerHTML += usersHTML;
            }
            $('#resultBlock').html(innerHTML);
        }
    });
}