// Userlist data array for filling in info box
var userlistdata = [];

// DOM Ready =============================================================
$(document).ready(() => {
    // Populate the user table on initial page load
    populateTable();
});

// Functions =============================================================
// Fill table with data
function populateTable() {
    // empty content sharing
    var tablecontent = '';
    //jquery ajax call for json 
    $.getJSON('/users/userlist', function(data) {
        // foreach item in json, add table row and cells to content sharing
        $.each(data, function() {
            tablecontent += '<tr>';
            tablecontent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tablecontent += '<td><a href="mailto:' + this.email + '">' + this.email + '</a></td>';
            tablecontent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tablecontent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userlist table tbody').html(tablecontent);
    });
}