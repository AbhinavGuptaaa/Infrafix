// script.js

document.addEventListener("DOMContentLoaded", function () {
  const uploadInput = document.getElementById("image-upload");
  const previewBtn = document.getElementById("preview-btn");
  const previewArea = document.querySelector(".ai-preview");
  const beforeDiv = document.querySelector(".preview-before");
  const afterDiv = document.querySelector(".preview-after");

  // Optional: your pre-saved "AI improved" image file
  // Example: place a file named "ai-after.jpg" inside your images/ folder
  const presetAfterImage = "image/preview-after.png";

  let userImageURL = null;

  // When user selects an image
  uploadInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      userImageURL = URL.createObjectURL(file);
      beforeDiv.style.backgroundImage = `url('${userImageURL}')`;
      afterDiv.style.backgroundImage = ""; // clear old preview
    }
  });

  // When user clicks the preview button
  previewBtn.addEventListener("click", function () {
    if (!userImageURL) {
      alert("Please upload an image first!");
      return;
    }

    // Show the "preset AI-improved" image
    afterDiv.style.backgroundImage = `url('${presetAfterImage}')`;

    // Make sure both layers are visible
    beforeDiv.style.opacity = 1;
    afterDiv.style.opacity = 1;

    // Add a simple fade-in animation for the after image
    afterDiv.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 800,
      easing: "ease-out",
    });
  });
});
