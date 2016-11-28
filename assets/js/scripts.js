/**
 * Created by Robin on 2016-11-24.
 */
$(function () {
    var calulateAge = function() {
        var today = new Date();
        var birthDate = new Date("1991-05-24");
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById('age').innerText = age;
    };
    calulateAge();
});
