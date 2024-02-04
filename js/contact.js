// $(document).ready(function () {
//   $(".centered").animate({ left: "50%" }, 2000);

//   $("#contactForm").submit(function (e) {
//     e.preventDefault();
//     if (validateForm()) {
//       openPopup();
//     }
//   });
//   function animateWords() {
//     $("#con_query span").each(function (index) {
//       $(this).delay(index * 300).animate({ opacity: 1, transform: "translateY(0)" }, 500);
//     });
//   }
//   animateWords();

//   // Function to validate name
//   function validateName() {
//     var name = $("#exampleInputName").val();
//     var nameRegex = /^[a-zA-Z]{8,}$/; // Updated regex to enforce at least 8 letters
  
//     if (!name.match(nameRegex)) {
//       $("#nameError").text("Name must be at least 8 letters and contain only letters.");
//       return false;
//     } else {
//       $("#nameError").text("");
//       return true;
//     }
//   }
  
//   // Function to validate email
//   function validateEmail() {
//     var email = $("#exampleInputEmail").val();
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email.match(emailRegex)) {
//       $("#emailError").text("Please enter a valid email address.");
//       return false;
//     } else {
//       $("#emailError").text("");
//       return true;
//     }
//   }

//   // Function to validate the entire form
//   function validateForm() {
//     return validateName() && validateEmail();
//     // Add additional validations if needed...
//   }

//   var container = $(".containerr");
//   function isElementInViewport(el) {
//     var rect = el[0].getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function addAnimationIfVisible() {
//     if (isElementInViewport(container)) {
//       $(".animate-from-bottom").addClass("animate");
//     }
//   }
//   addAnimationIfVisible();
//   $(window).scroll(function () {
//     addAnimationIfVisible();
//   });

//   var container2 = $(".containerr2");
//   function addAnimationIfVisible2() {
//     if (isElementInViewport(container2)) {
//       $(".animate-left").addClass("animate");
//       $(".animate-right").addClass("animate");
//     }
//   }
//   addAnimationIfVisible2();
//   $(window).scroll(function () {
//     addAnimationIfVisible2();
//   });

//   // Popup handling
//   let popup = document.getElementById("popup");

//   function openPopup() {
//     // Add conditions if needed before displaying the popup
//     popup.classList.add("open-popup");
//   }

//   function closePopup() {
//     popup.classList.remove("open-popup");
//     resetForm();
//   }

//   // Function to reset the form
//   function resetForm() {
//     $("#contactForm")[0].reset(); // Reset form fields
//     $("#nameError").text("");      // Clear name error message
//     $("#emailError").text("");     // Clear email error message
//   }

//   // Clear form content when the page is reloaded
//   $(window).on('beforeunload', function () {
//     resetForm();
//   });
// });


$(document).ready(function () {
  $(".centered").animate({ left: "50%" }, 2000);

  $("#contactForm").submit(function (e) {
    e.preventDefault();
    if (validateForm()) {
      openPopup();
    }
  });

  function animateWords() {
    $("#con_query span").each(function (index) {
      $(this).delay(index * 300).animate({ opacity: 1, transform: "translateY(0)" }, 500);
    });
  }
  animateWords();

  // Function to validate name
  function validateName() {
    var name = $("#exampleInputName").val();
    var nameRegex = /^[a-zA-Z]{8,}$/; // Updated regex to enforce at least 8 letters

    if (!name.match(nameRegex)) {
      $("#nameError").text("Name must be at least 8 letters and contain only letters.");
      return false;
    } else {
      $("#nameError").text("");
      return true;
    }
  }

  // Function to validate email
  function validateEmail() {
    var email = $("#exampleInputEmail").val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
      $("#emailError").text("Please enter a valid email address.");
      return false;
    } else {
      $("#emailError").text("");
      return true;
    }
  }

  // Function to validate the entire form
  function validateForm() {
    return validateName() && validateEmail();
    // Add additional validations if needed...
  }

  var container = $(".containerr");
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addAnimationIfVisible() {
    if (isElementInViewport(container)) {
      $(".animate-from-bottom").addClass("animate");
    }
  }
  addAnimationIfVisible();
  $(window).scroll(function () {
    addAnimationIfVisible();
  });

  var container2 = $(".containerr2");
  function addAnimationIfVisible2() {
    if (isElementInViewport(container2)) {
      $(".animate-left").addClass("animate");
      $(".animate-right").addClass("animate");
    }
  }
  addAnimationIfVisible2();
  $(window).scroll(function () {
    addAnimationIfVisible2();
  });

  // Popup handling
  let popup = document.getElementById("popup");

  function openPopup() {
    // Add conditions if needed before displaying the popup
    popup.classList.add("open-popup");
  }

  function closePopup() {
    popup.classList.remove("open-popup");
    resetForm();
  }

  // Event listener for the "OK" button in the popup
  $("#popupOkButton").click(function () {
    closePopup();
  });

  // Function to reset the form
  function resetForm() {
    $("#contactForm")[0].reset(); // Reset form fields
    $("#nameError").text("");      // Clear name error message
    $("#emailError").text("");     // Clear email error message
  }

  // Clear form content when the page is reloaded
  $(window).on('beforeunload', function () {
    resetForm();
  });
});



//////////////////////////Animation Starts////////////////////////////////

$(document).ready(function () {
  var container = $(".containerr");
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addAnimationIfVisible() {
    if (isElementInViewport(container)) {
      $(".animate-from-bottom").addClass("animate");
    }
  }
  addAnimationIfVisible();
  $(window).scroll(function () {
    addAnimationIfVisible();
  });
});

///////////////////////////////////////////////////


$(document).ready(function () {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation class if the element is in the viewport
  function addAnimationIfVisible(container, animationClass) {
    if (isElementInViewport(container)) {
      container.addClass(animationClass);
    }
  }

  // Map animation
  var mapContainer = $(".map.animate-from-top");
  addAnimationIfVisible(mapContainer, "animate");

  // Form animation
  var formContainer = $(".form_map.animate-from-top");
  addAnimationIfVisible(formContainer, "animate");

  // Scroll event listener
  $(window).scroll(function () {
    // Update the class and element for the map
    addAnimationIfVisible($(".map.animate-from-top"), "animate");
    addAnimationIfVisible($(".form_map.animate-from-top"), "animate");
  });

});
//////////////////////////////Animation Ends/////////////////////////////////





