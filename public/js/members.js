$(document).ready(function(){
    console.log('in members.js')
    $.ajax({
        type: "GET",
        url: "/api/members"
    }).done(function(res) {
        console.log(res)
    })

    $.ajax({
        type: "GET",
        url: "/api/members/:username"
    }).done(function(res) {
        console.log(res)
    })

    $.ajax({
        type: "GET",
        url: "/api/members/:username"
    }).done(function(res) {
        console.log(res)
    })
})