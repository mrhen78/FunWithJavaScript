
/*Create New Paragraphs*/
var numberCreatedParagraphs = -1;
document.querySelector("#blogButton").addEventListener("click", function () {
  numberCreatedParagraphs++;
  var newParagraph = document.createElement("span");
  var today = Date();
  var todayEdited = today.slice(0, 24);
  var paragraphContent = document.querySelector(".blogTextArea").value;

  newParagraph.innerHTML =
    "<button class='unhideButton hideAll'>" +
    "X Unhide" +
    "</button>" +
    "<p class='mainParagraph'>" +
    "<strong class='dateFix'>" +
    todayEdited.toLocaleString() +
    "</strong>" +
    "<button class='deleteButton'>" +
    "X Delete" +
    "</button>" +
    "<button class='hideButton'>" +
    "X Hide" +
    "</button>" +
    "<span class='actualParagraph'>" +
    paragraphContent +
    "</span>" +
    "<span class='bottomLine'>" +
    "Like: " +
    "</span>" +
    "<button class='likeButton'>" +
    "<svg class='thumbsUp' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16'>" +
    "<path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/>" +
    "</svg>" +
    " " +
    "<span class='likeCountSpan'>" +
    0 +
    "</span>" +
    "</button>" +
    "  " +
    "<span class='bottomLine'>" +
    "Dislike: " +
    "</span>" +
    "<button class='dislikeButton'>" +
    "<svg class='thumbsDown' role='presentation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
    "<path d='M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1'/>" +
    "</svg>" +
    " " +
    "<span class='dislikeCountSpan'>" +
    0 +
    "</span>" +
    "</button>" +
    "  " +
    "<span class='bottomLine'>" +
    "Comment: " +
    "</span>" +
    "<button class='commentButton'>" +
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
    "<path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105'/>" +
    "</svg>" +
    "</button>" +
    "<br>" +
    "<textarea placeholder='Comment' class='commentBox hideAll'>" +
    "</textarea>" +
    "<span class='commentLine hideAll'>" +
    "Comments:" +
    "</span>" +
    "<br>" +
    "<span class='commentContainer'>" +
    "</span>" +
    "</p>";

  document.querySelector(".paragraphContainer").append(newParagraph);

  document.querySelector(".blogTextArea").value = "";

  var numberDislikeClicks = 0;
  var numberDislikes = 0;
  var numberClicks = 0;
  var numberLikes = 0;

  /*Like Button*/

  document
    .querySelectorAll(".likeButton")
  [numberCreatedParagraphs].addEventListener("click", function () {
    if (numberDislikes !== 1) {
      numberClicks++;

      if (numberClicks % 2 !== 0) {
        numberLikes++;
        this.querySelector(".likeCountSpan").style.color = "red";
        this.querySelector(".thumbsUp").classList.add("likeButtonAnimation");
      } else {
        numberLikes--;
        this.querySelector(".likeCountSpan").style.color = "black";
        this.querySelector(".thumbsUp").classList.remove(
          "likeButtonAnimation"
        );
      }

      this.querySelector(".likeCountSpan").textContent = numberLikes;
    }
  });

  /*Dislike Button*/

  document
    .querySelectorAll(".dislikeButton")
  [numberCreatedParagraphs].addEventListener("click", function () {
    if (numberLikes !== 1) {
      numberDislikeClicks++;
      if (numberDislikeClicks % 2 !== 0) {
        numberDislikes++;
        this.querySelector(".dislikeCountSpan").style.color = "red";
      } else {
        numberDislikes--;
        this.querySelector(".dislikeCountSpan").style.color = "black";
      }

      this.querySelector(".dislikeCountSpan").textContent = numberDislikes;
    }
  });

  /*Hide Button*/

  document
    .querySelectorAll(".hideButton")
  [numberCreatedParagraphs].addEventListener("click", function (event) {
    this.parentElement.parentElement
      .querySelector(".mainParagraph")
      .classList.add("hideAll");
    this.parentElement.parentElement
      .querySelector(".unhideButton")
      .classList.remove("hideAll");

    /*Unhide Button*/

    this.parentElement.parentElement
      .querySelector(".unhideButton")
      .addEventListener("click", function () {
        this.classList.add("hideAll");
        this.parentElement
          .querySelector(".mainParagraph")
          .classList.remove("hideAll");
      });

    /*End of Hide Button*/
  });

  /*Delete Button*/

  document
    .querySelectorAll(".deleteButton")
  [numberCreatedParagraphs].addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this?")) {
      this.parentNode.remove();
      numberCreatedParagraphs--;
    }
  });

  /*Comment Section*/

  /*Comment Button*/

  var numberCommentClicks = 0;
  document
    .querySelectorAll(".commentButton")
  [numberCreatedParagraphs].addEventListener("click", function () {
    numberCommentClicks++;

    if (numberCommentClicks % 2 !== 0) {
      this.parentElement
        .querySelector(".commentBox")
        .classList.remove("hideAll");
    } else {
      this.parentElement
        .querySelector(".commentBox")
        .classList.add("hideAll");
    }
  });

  /*Actual Comments*/

  var numberComments = -1;
  document
    .querySelectorAll(".commentBox")
  [numberCreatedParagraphs].addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      numberComments++;
      var todayComment = Date();
      var todayCommentEdited = todayComment.slice(0, 24);
      var newComment = document.createElement("span");
      var commentContent = this.value;

      newComment.innerHTML =
        "<p class='commentWhole'>" +
        "<strong class='dateFix'>" +
        todayCommentEdited.toLocaleString() +
        "</strong>" +
        "<button class='deleteCommentButton'>" +
        "X Delete" +
        "</button>" +
        "<span class='commentActualParagraph'>" +
        commentContent +
        "</span>" +
        "<button class='likeCommentButton' >" +
        "<span class='bottomCommentLine'>" +
        "Like: " +
        "</span>" +
        "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16'>" +
        "<path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/>" +
        "</svg>" +
        " " +
        "<span class='likeCommentSpan'>" +
        0 +
        "</span>" +
        "</button>" +
        " " +
        "<button class='dislikeCommentButton'>" +
        "<span class='bottomCommentLine'>" +
        "Dislike: " +
        "</span>" +
        "<svg role='presentation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
        "<path d='M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1'/>" +
        "</svg>" +
        " " +
        "<span class='dislikeCountCommentSpan'>" +
        0 +
        "</span>" +
        "</button>" +
        " " +
        "<button class='replyCommentButton'>" +
        "<span class='bottomCommentLine'>" +
        "Reply: " +
        "</span>" +
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
        "<path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105'/>" +
        "</svg>" +
        "</button>" +
        "</p>" +
        "<textarea placeholder='Reply' class='commentReplyBox hideAll'>" +
        "</textarea>" +
        "<span class='commentReplyContainer'>" +
        "</span>";

      this.parentElement
        .querySelector(".commentLine")
        .classList.remove("hideAll");

      this.parentElement
        .querySelector(".commentContainer")
        .append(newComment);

      event.preventDefault();

      this.parentElement.querySelector(".commentBox").value = "";

      this.parentElement.querySelector(".commentBox").setSelectionRange(0, 0);

      /*Delete Comment Button*/

      this.parentElement
        .querySelectorAll(".deleteCommentButton")
      [numberComments].addEventListener("click", function () {
        numberComments--;

        if (numberComments === -1) {
          this.parentElement.parentElement.parentElement.parentElement
            .querySelector(".commentLine")
            .classList.add("hideAll");
        }

        this.parentElement.parentElement.remove();
      });

      /*Like Comment Button*/

      var numberDislikeCommentClicks = 0;
      var numberDislikesComments = 0;
      var numberClicksComments = 0;
      var numberLikesComments = 0;

      this.parentElement
        .querySelectorAll(".likeCommentButton")
      [numberComments].addEventListener("click", function () {
        if (numberDislikesComments !== 1) {
          numberClicksComments++;

          if (numberClicksComments % 2 !== 0) {
            numberLikesComments++;
            this.parentElement.querySelector(
              ".likeCommentSpan"
            ).style.color = "red";
          } else {
            numberLikesComments--;
            this.parentElement.querySelector(
              ".likeCommentSpan"
            ).style.color = "black";
          }

          this.parentElement.querySelector(".likeCommentSpan").textContent =
            numberLikesComments;
        }
      });

      /*Dislike Comment Button*/

      this.parentElement
        .querySelectorAll(".dislikeCommentButton")
      [numberComments].addEventListener("click", function () {
        if (numberLikesComments !== 1) {
          numberDislikeCommentClicks++;
          if (numberDislikeCommentClicks % 2 !== 0) {
            numberDislikesComments++;
            this.parentElement.querySelector(
              ".dislikeCountCommentSpan"
            ).style.color = "red";
          } else {
            numberDislikesComments--;
            this.parentElement.querySelector(
              ".dislikeCountCommentSpan"
            ).style.color = "black";
          }

          this.parentElement.querySelector(
            ".dislikeCountCommentSpan"
          ).textContent = numberDislikesComments;
        }
      });

      /*Reply Comment Button*/

      var numberReplyCommentClicks = 0;
      this.parentElement
        .querySelectorAll(".replyCommentButton")
      [numberComments].addEventListener("click", function () {
        numberReplyCommentClicks++;

        if (numberReplyCommentClicks % 2 !== 0) {
          this.parentElement.parentElement
            .querySelector(".commentReplyBox")
            .classList.remove("hideAll");
        } else {
          this.parentElement.parentElement
            .querySelector(".commentReplyBox")
            .classList.add("hideAll");
        }
      });

      /*Actual Reply*/

      var numberReplyComments = -1;
      this.parentElement
        .querySelectorAll(".commentReplyBox")
      [numberComments].addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          numberReplyComments++;
          var todayReplyComment = Date();
          var todayReplyCommentEdited = todayReplyComment.slice(0, 24);
          var newReplyComment = document.createElement("span");
          var commentReplyContent = this.value;

          newReplyComment.innerHTML =
            "<p class='commentReplyWhole'>" +
            "<strong class='dateFix'>" +
            todayReplyCommentEdited.toLocaleString() +
            "</strong>" +
            "<button class='deleteCommentReplyButton'>" +
            "X Delete" +
            "</button>" +
            "<span class='commentActualReplyParagraph'>" +
            commentReplyContent +
            "</span>" +
            "<button class='likeCommentReplyButton' >" +
            "<span class='bottomCommentReplyLine'>" +
            "Like: " +
            "</span>" +
            "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16'>" +
            "<path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/>" +
            "</svg>" +
            " " +
            "<span class='likeCommentReplySpan'>" +
            0 +
            "</span>" +
            "</button>" +
            " " +
            "<button class='dislikeCommentReplyButton'>" +
            "<span class='bottomCommentReplyLine'>" +
            "Dislike: " +
            "</span>" +
            "<svg role='presentation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
            "<path d='M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1'/>" +
            "</svg>" +
            " " +
            "<span class='dislikeCountCommentReplySpan'>" +
            0 +
            "</span>" +
            "</button>" +
            " " +
            "<button class='replyCommentReplyButton'>" +
            "<span class='bottomCommentReplyLine'>" +
            "Reply: " +
            "</span>" +
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
            "<path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105'/>" +
            "</svg>" +
            "</button>" +
            "</p>" +
            "<textarea placeholder='Reply' class='commentReplyBox hideAll'>" +
            "</textarea>" +
            "<span class='commentReplyContainer2'>" +
            "</span>";

          this.parentElement
            .querySelector(".commentReplyContainer")
            .append(newReplyComment);

          event.preventDefault();

          this.parentElement.parentElement.querySelector(
            ".commentReplyBox"
          ).value = "";

          this.parentElement.parentElement
            .querySelector(".commentReplyBox")
            .setSelectionRange(0, 0);

          /*Delete Comment Reply Button*/

          this.parentElement
            .querySelectorAll(".deleteCommentReplyButton")
          [numberReplyComments].addEventListener("click", function () {
            this.parentElement.parentElement.remove();

            numberReplyComments--;
          });

          /*Like Comment Reply Button*/

          var numberDislikeCommentReplyClicks = 0;
          var numberDislikesCommentReplies = 0;
          var numberClicksCommentReply = 0;
          var numberLikesCommentReply = 0;

          this.parentElement
            .querySelectorAll(".likeCommentReplyButton")
          [numberReplyComments].addEventListener("click", function () {
            if (numberDislikesCommentReplies !== 1) {
              numberClicksCommentReply++;

              if (numberClicksCommentReply % 2 !== 0) {
                numberLikesCommentReply++;
                this.parentElement.querySelector(
                  ".likeCommentReplySpan"
                ).style.color = "red";
              } else {
                numberLikesCommentReply--;
                this.parentElement.querySelector(
                  ".likeCommentReplySpan"
                ).style.color = "black";
              }

              this.parentElement.querySelector(
                ".likeCommentReplySpan"
              ).textContent = numberLikesCommentReply;
            }
          });

          /*Dislike Comment Reply Button*/

          this.parentElement
            .querySelectorAll(".dislikeCommentReplyButton")
          [numberReplyComments].addEventListener("click", function () {
            if (numberLikesCommentReply !== 1) {
              numberDislikeCommentReplyClicks++;
              if (numberDislikeCommentReplyClicks % 2 !== 0) {
                numberDislikesCommentReplies++;
                this.parentElement.querySelector(
                  ".dislikeCountCommentReplySpan"
                ).style.color = "red";
              } else {
                numberDislikesCommentReplies--;
                this.parentElement.querySelector(
                  ".dislikeCountCommentReplySpan"
                ).style.color = "black";
              }

              this.parentElement.querySelector(
                ".dislikeCountCommentReplySpan"
              ).textContent = numberDislikesCommentReplies;
            }
          });

          /*Reply Comment Reply Button*/

          var numberReplyCommentReplyClicks = 0;
          this.parentElement
            .querySelectorAll(".replyCommentReplyButton")
          [numberReplyComments].addEventListener("click", function () {
            numberReplyCommentReplyClicks++;

            if (numberReplyCommentReplyClicks % 2 !== 0) {
              this.parentElement.parentElement
                .querySelector(".commentReplyBox")
                .classList.remove("hideAll");
            } else {
              this.parentElement.parentElement
                .querySelector(".commentReplyBox")
                .classList.add("hideAll");
            }

            /*Replies to Replies*/

            this.parentElement.parentElement
              .querySelectorAll(".commentReplyBox")
            [numberReplyComments].addEventListener(
              "keydown",
              function (event) {
                if (event.key === "Enter") {
                  numberReplyComments++;
                  var todayReplyComment = Date();
                  var todayReplyCommentEdited = todayReplyComment.slice(
                    0,
                    24
                  );
                  var newReplyComment = document.createElement("span");
                  var commentReplyContent = this.value;

                  newReplyComment.innerHTML =
                    "<p class='commentReplyWhole'>" +
                    "<strong class='dateFix'>" +
                    todayReplyCommentEdited.toLocaleString() +
                    "</strong>" +
                    "<button class='deleteCommentReplyButton'>" +
                    "X Delete" +
                    "</button>" +
                    "<span class='commentActualReplyParagraph'>" +
                    commentReplyContent +
                    "</span>" +
                    "<button class='likeCommentReplyButton' >" +
                    "<span class='bottomCommentReplyLine'>" +
                    "Like: " +
                    "</span>" +
                    "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16'>" +
                    "<path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/>" +
                    "</svg>" +
                    " " +
                    "<span class='likeCommentReplySpan'>" +
                    0 +
                    "</span>" +
                    "</button>" +
                    " " +
                    "<button class='dislikeCommentReplyButton'>" +
                    "<span class='bottomCommentReplyLine'>" +
                    "Dislike: " +
                    "</span>" +
                    "<svg role='presentation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
                    "<path d='M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1'/>" +
                    "</svg>" +
                    " " +
                    "<span class='dislikeCountCommentReplySpan'>" +
                    0 +
                    "</span>" +
                    "</button>" +
                    " " +
                    "<button class='replyCommentReplyButton'>" +
                    "<span class='bottomCommentReplyLine'>" +
                    "Reply: " +
                    "</span>" +
                    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
                    "<path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105'/>" +
                    "</svg>" +
                    "</button>" +
                    "</p>" +
                    "<textarea placeholder='Reply' class='commentReplyBox hideAll'>" +
                    "</textarea>" +
                    "<span class='commentReplyContainer2'>" +
                    "</span>";

                  this.parentElement
                    .querySelector(".commentReplyContainer2")
                    .append(newReplyComment);

                  event.preventDefault();

                  this.parentElement.parentElement.querySelector(
                    ".commentReplyBox"
                  ).value = "";

                  this.parentElement.parentElement
                    .querySelector(".commentReplyBox")
                    .setSelectionRange(0, 0);

                  /*Delete Comment Reply Reply Button*/

                  this.parentElement.parentElement
                    .querySelectorAll(".deleteCommentReplyButton")
                  [numberReplyComments].addEventListener(
                    "click",
                    function () {
                      this.parentElement.parentElement.remove();
                      numberReplyComments--;
                    }
                  );

                  /*Like Comment Reply Reply Button*/

                  var numberDislikeCommentReplyReplyClicks = 0;
                  var numberDislikesCommentReplyReplies = 0;
                  var numberClicksCommentReplyReply = 0;
                  var numberLikesCommentReplyReply = 0;

                  this.parentElement.parentElement
                    .querySelectorAll(".likeCommentReplyButton")
                  [numberReplyComments].addEventListener(
                    "click",
                    function () {
                      if (numberDislikesCommentReplyReplies !== 1) {
                        numberClicksCommentReplyReply++;

                        if (numberClicksCommentReplyReply % 2 !== 0) {
                          numberLikesCommentReplyReply++;
                          this.parentElement.querySelector(
                            ".likeCommentReplySpan"
                          ).style.color = "red";
                        } else {
                          numberLikesCommentReplyReply--;
                          this.parentElement.querySelector(
                            ".likeCommentReplySpan"
                          ).style.color = "black";
                        }

                        this.parentElement.querySelector(
                          ".likeCommentReplySpan"
                        ).textContent = numberLikesCommentReplyReply;
                      }
                    }
                  );

                  /*Dislike Comment Reply Reply Button*/

                  this.parentElement.parentElement
                    .querySelectorAll(".dislikeCommentReplyButton")
                  [numberReplyComments].addEventListener(
                    "click",
                    function () {
                      if (numberLikesCommentReplyReply !== 1) {
                        numberDislikeCommentReplyReplyClicks++;
                        if (
                          numberDislikeCommentReplyReplyClicks % 2 !==
                          0
                        ) {
                          numberDislikesCommentReplyReplies++;
                          this.parentElement.querySelector(
                            ".dislikeCountCommentReplySpan"
                          ).style.color = "red";
                        } else {
                          numberDislikesCommentReplyReplies--;
                          this.parentElement.querySelector(
                            ".dislikeCountCommentReplySpan"
                          ).style.color = "black";
                        }

                        this.parentElement.querySelector(
                          ".dislikeCountCommentReplySpan"
                        ).textContent =
                          numberDislikesCommentReplyReplies;
                      }
                    }
                  );

                  /*Reply Comment Reply Button AGAIN*/

                  var numberReplyCommentReplyClicks = 0;
                  this.parentElement
                    .querySelectorAll(".replyCommentReplyButton")
                  [numberReplyComments].addEventListener(
                    "click",
                    function () {
                      numberReplyCommentReplyClicks++;

                      if (numberReplyCommentReplyClicks % 2 !== 0) {
                        this.parentElement.parentElement
                          .querySelector(".commentReplyBox")
                          .classList.remove("hideAll");
                      } else {
                        this.parentElement.parentElement
                          .querySelector(".commentReplyBox")
                          .classList.add("hideAll");
                      }
                    }
                  );

                  /*LAST Reply to Reply*/
                  var finalReplyReplies = 0;

                  this.parentElement.parentElement
                    .querySelectorAll(".commentReplyBox")
                  [numberReplyComments].addEventListener(
                    "keydown",
                    function (event) {
                      if (event.key === "Enter") {

                        finalReplyReplies++;
                        numberReplyComments++;
                        var todayReplyComment = Date();
                        var todayReplyCommentEdited =
                          todayReplyComment.slice(0, 24);
                        var newReplyComment =
                          document.createElement("span");
                        var commentReplyContent = this.value;

                        newReplyComment.innerHTML =
                          "<p class='commentReplyWhole'>" +
                          "<strong class='dateFix'>" +
                          todayReplyCommentEdited.toLocaleString() +
                          "</strong>" +
                          "<button class='deleteCommentReplyButton'>" +
                          "X Delete" +
                          "</button>" +
                          "<span class='commentActualReplyParagraph'>" +
                          commentReplyContent +
                          "</span>" +
                          "<button class='likeCommentReplyButton' >" +
                          "<span class='bottomCommentReplyLine'>" +
                          "Like: " +
                          "</span>" +
                          "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16'>" +
                          "<path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/>" +
                          "</svg>" +
                          " " +
                          "<span class='likeCommentReplySpan'>" +
                          0 +
                          "</span>" +
                          "</button>" +
                          " " +
                          "<button class='dislikeCommentReplyButton'>" +
                          "<span class='bottomCommentReplyLine'>" +
                          "Dislike: " +
                          "</span>" +
                          "<svg role='presentation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
                          "<path d='M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1'/>" +
                          "</svg>" +
                          " " +
                          "<span class='dislikeCountCommentReplySpan'>" +
                          0 +
                          "</span>" +
                          "</button>" +
                          " " +
                          "<button class='replyCommentReplyButton'>" +
                          "<span class='bottomCommentReplyLine'>" +
                          "Reply: " +
                          "</span>" +
                          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
                          "<path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105'/>" +
                          "</svg>" +
                          "</button>" +
                          "</p>" +
                          "<textarea placeholder='Reply' class='commentReplyBox hideAll'>" +
                          "</textarea>" +
                          "<span class='commentReplyContainer2'>" +
                          "</span>";

                        this.parentElement
                          .querySelector(".commentReplyContainer2")
                          .append(newReplyComment);

                        event.preventDefault();

                        this.parentElement.parentElement.querySelector(
                          ".commentReplyBox"
                        ).value = "";

                        this.parentElement.parentElement
                          .querySelector(".commentReplyBox")
                          .setSelectionRange(0, 0);

                        /*Delete Comment Reply Reply LAST Button*/

                        document
                          .querySelectorAll(
                            ".deleteCommentReplyButton"
                          )
                        [numberReplyComments].addEventListener(
                          "click",
                          function () {
                            this.parentElement.parentElement.remove();
                            numberReplyComments--;
                          }
                        );

                        /*Like Comment Reply Reply LAST Button*/

                        var numberDislikeCommentReplyReplyClicks = 0;
                        var numberDislikesCommentReplyReplies = 0;
                        var numberClicksCommentReplyReply = 0;
                        var numberLikesCommentReplyReply = 0;

                        document
                          .querySelectorAll(".likeCommentReplyButton")
                        [numberReplyComments].addEventListener(
                          "click",
                          function () {
                            if (
                              numberDislikesCommentReplyReplies !==
                              1
                            ) {
                              numberClicksCommentReplyReply++;

                              if (
                                numberClicksCommentReplyReply %
                                2 !==
                                0
                              ) {
                                numberLikesCommentReplyReply++;
                                this.parentElement.querySelector(
                                  ".likeCommentReplySpan"
                                ).style.color = "red";
                              } else {
                                numberLikesCommentReplyReply--;
                                this.parentElement.querySelector(
                                  ".likeCommentReplySpan"
                                ).style.color = "black";
                              }

                              this.parentElement.querySelector(
                                ".likeCommentReplySpan"
                              ).textContent =
                                numberLikesCommentReplyReply;
                            }
                          }
                        );

                        /*Dislike Comment Reply Reply LAST Button*/

                        document
                          .querySelectorAll(
                            ".dislikeCommentReplyButton"
                          )
                        [numberReplyComments].addEventListener(
                          "click",
                          function () {
                            if (
                              numberLikesCommentReplyReply !== 1
                            ) {
                              numberDislikeCommentReplyReplyClicks++;
                              if (
                                numberDislikeCommentReplyReplyClicks %
                                2 !==
                                0
                              ) {
                                numberDislikesCommentReplyReplies++;
                                this.parentElement.querySelector(
                                  ".dislikeCountCommentReplySpan"
                                ).style.color = "red";
                              } else {
                                numberDislikesCommentReplyReplies--;
                                this.parentElement.querySelector(
                                  ".dislikeCountCommentReplySpan"
                                ).style.color = "black";
                              }

                              this.parentElement.querySelector(
                                ".dislikeCountCommentReplySpan"
                              ).textContent =
                                numberDislikesCommentReplyReplies;
                            }
                          }
                        );

                        /*Reply Comment Reply Button LAST AGAIN*/

                        var numberReplyCommentReplyClicks = 0;
                        document
                          .querySelectorAll(
                            ".replyCommentReplyButton"
                          )
                        [numberReplyComments].addEventListener(
                          "click",
                          function () {
                            numberReplyCommentReplyClicks++;

                            if (
                              numberReplyCommentReplyClicks % 2 !==
                              0
                            ) {
                              this.parentElement.parentElement
                                .querySelector(".commentReplyBox")
                                .classList.remove("hideAll");
                            } else {
                              this.parentElement.parentElement
                                .querySelector(".commentReplyBox")
                                .classList.add("hideAll");
                            }
                          }
                        );

                        /*LAST LAST Reply to Reply*/
                        var finalReplyReplies = 0;

                        this.parentElement.parentElement.parentElement
                          .querySelectorAll(".commentReplyBox")
                        [numberReplyComments].addEventListener(
                          "keydown",
                          function (event) {
                            if (event.key === "Enter") {

                              numberReplyComments++;
                              var todayReplyComment = Date();
                              var todayReplyCommentEdited =
                                todayReplyComment.slice(0, 24);
                              var newReplyComment =
                                document.createElement("span");
                              var commentReplyContent = this.value;

                              newReplyComment.innerHTML =
                                "<p class='commentReplyWhole'>" +
                                "<strong class='dateFix'>" +
                                todayReplyCommentEdited.toLocaleString() +
                                "</strong>" +
                                "<button class='deleteCommentReplyButton'>" +
                                "X Delete" +
                                "</button>" +
                                "<span class='commentActualReplyParagraph'>" +
                                commentReplyContent +
                                "</span>" +
                                "<button class='likeCommentReplyButton' >" +
                                "<span class='bottomCommentReplyLine'>" +
                                "Like: " +
                                "</span>" +
                                "<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 16 16'>" +
                                "<path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/>" +
                                "</svg>" +
                                " " +
                                "<span class='likeCommentReplySpan'>" +
                                0 +
                                "</span>" +
                                "</button>" +
                                " " +
                                "<button class='dislikeCommentReplyButton'>" +
                                "<span class='bottomCommentReplyLine'>" +
                                "Dislike: " +
                                "</span>" +
                                "<svg role='presentation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
                                "<path d='M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1'/>" +
                                "</svg>" +
                                " " +
                                "<span class='dislikeCountCommentReplySpan'>" +
                                0 +
                                "</span>" +
                                "</button>" +
                                " " +
                                "<button class='replyCommentReplyButton'>" +
                                "<span class='bottomCommentReplyLine'>" +
                                "Reply: " +
                                "</span>" +
                                "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>" +
                                "<path d='M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105'/>" +
                                "</svg>" +
                                "</button>" +
                                "</p>" +
                                "<textarea placeholder='Reply' class='commentReplyBox hideAll'>" +
                                "</textarea>" +
                                "<span class='commentReplyContainer2'>" +
                                "</span>";

                              this.parentElement
                                .querySelector(
                                  ".commentReplyContainer2"
                                )
                                .append(newReplyComment);

                              event.preventDefault();

                              this.parentElement.parentElement.querySelector(
                                ".commentReplyBox"
                              ).value = "";

                              this.parentElement.parentElement
                                .querySelector(".commentReplyBox")
                                .setSelectionRange(0, 0);

                              /*Delete Comment Reply Reply LAST LAST Button*/

                              document
                                .querySelectorAll(
                                  ".deleteCommentReplyButton"
                                )
                              [
                                numberReplyComments
                              ].addEventListener(
                                "click",
                                function () {
                                  this.parentElement.parentElement.remove();
                                  numberReplyComments--;
                                }
                              );

                              /*Like Comment Reply Reply LAST LAST Button*/

                              var numberDislikeCommentReplyReplyClicks = 0;
                              var numberDislikesCommentReplyReplies = 0;
                              var numberClicksCommentReplyReply = 0;
                              var numberLikesCommentReplyReply = 0;

                              document
                                .querySelectorAll(
                                  ".likeCommentReplyButton"
                                )
                              [
                                numberReplyComments
                              ].addEventListener(
                                "click",
                                function () {
                                  if (
                                    numberDislikesCommentReplyReplies !==
                                    1
                                  ) {
                                    numberClicksCommentReplyReply++;

                                    if (
                                      numberClicksCommentReplyReply %
                                      2 !==
                                      0
                                    ) {
                                      numberLikesCommentReplyReply++;
                                      this.parentElement.querySelector(
                                        ".likeCommentReplySpan"
                                      ).style.color = "red";
                                    } else {
                                      numberLikesCommentReplyReply--;
                                      this.parentElement.querySelector(
                                        ".likeCommentReplySpan"
                                      ).style.color = "black";
                                    }

                                    this.parentElement.querySelector(
                                      ".likeCommentReplySpan"
                                    ).textContent =
                                      numberLikesCommentReplyReply;
                                  }
                                }
                              );

                              /*Dislike Comment Reply Reply LAST LAST Button*/

                              document
                                .querySelectorAll(
                                  ".dislikeCommentReplyButton"
                                )
                              [
                                numberReplyComments
                              ].addEventListener(
                                "click",
                                function () {
                                  if (
                                    numberLikesCommentReplyReply !==
                                    1
                                  ) {
                                    numberDislikeCommentReplyReplyClicks++;
                                    if (
                                      numberDislikeCommentReplyReplyClicks %
                                      2 !==
                                      0
                                    ) {
                                      numberDislikesCommentReplyReplies++;
                                      this.parentElement.querySelector(
                                        ".dislikeCountCommentReplySpan"
                                      ).style.color = "red";
                                    } else {
                                      numberDislikesCommentReplyReplies--;
                                      this.parentElement.querySelector(
                                        ".dislikeCountCommentReplySpan"
                                      ).style.color = "black";
                                    }

                                    this.parentElement.querySelector(
                                      ".dislikeCountCommentReplySpan"
                                    ).textContent =
                                      numberDislikesCommentReplyReplies;
                                  }
                                }
                              );

                              /*Reply Comment Reply Button LAST LAST AGAIN*/

                              var numberReplyCommentReplyClicks = 0;
                              document
                                .querySelectorAll(
                                  ".replyCommentReplyButton"
                                )
                              [
                                numberReplyComments
                              ].addEventListener(
                                "click",
                                function () {
                                  numberReplyCommentReplyClicks++;

                                  alert(
                                    "There will be no more replies.  You have reached the limitations of my current abilities and knowledge."
                                  );
                                }
                              );

                              /*End of LAST LAST Reply to Reply Enter*/
                            }
                            /*End of LAST LAST Reply to Reply Keydown*/
                          }
                        );

                        /*End of Last Reply to Reply Enter*/
                      }
                      /*End of Last Reply to Reply Keydown*/
                    }
                  );

                  /*End of Reply to Reply  Enter */
                }

                /*End of Reply to Reply Key down*/
              }
            );

            /*End of Reply Comment Reply Button*/
          });

          /*End of Hit Enter for Comment Reply Box*/
        }
        /*End of keydown for Comment Reply Box*/
      });

      /*End of Enter If Statement For Comments*/
    }

    /*End of Hit Key Function For Comments*/
  });

  /*End of Adding New Paragraph*/
});

function limitWords(textarea, limit) {
  var words = textarea.value.trim().split(/\s+/);
  var wordCountElement = document.getElementById('wordCount');

  if (words.length > limit) {
    textarea.value = words.slice(0, limit).join(' ');
  }
  wordCountElement.textContent = words.length > limit ? limit : words.length;
}