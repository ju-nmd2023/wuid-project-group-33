document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var form = document.forms["submit-to-google-sheet"];

    
    form.addEventListener("click", function () {
      
      form.elements["Name"].value = "Markus Ekerheim";
      form.elements["nummber"].value = "1234193620123469";
      form.elements["Date of Expiration"].value = "01/25";
      form.elements["CCV"].value = "420";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var form = document.forms["submit-to-google-sheet2"];

    
    form.addEventListener("click", function () {
      
      form.elements["Street"].value = "Gjuterigatan 5";
      form.elements["Zipcode"].value = "553 18";
      form.elements["City"].value = "Jönköping";
      form.elements["Telephone"].value = "076-6969696";
    });
  });

  function redirectToPage() {
    window.location.href = "adresspage.html";
    return false; 
  }

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("loading").classList.add("hidden");
      document.getElementById("thanks").classList.remove("hidden");
    }, 5000);
  });