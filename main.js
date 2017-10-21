$(document).ready(function() {
    var strings = [ /*['W','e','b', ' ', 'A', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's']]*/ 'Web Applications', 'Desktop Applications', 'Web APIs', 'Distributed Systems'];
    var cout = 1;
    var $change = $("h2#introChange");
    console.log($change);
    $change.html(strings[0]);
    setInterval(function() {
        $change.html(strings[cout]);
        cout == strings.length - 1 ? cout = 0 : cout++;
    }, 2000);

});