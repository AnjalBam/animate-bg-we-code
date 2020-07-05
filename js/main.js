// const headerEl = document.getElementById("header");
// const skillsEl = document.getElementById("skills");
// const projectsEl = document.getElementById("projects");
// const aboutEl = document.getElementById("about");

// const headerPos = headerEl.offsetTop;
// const skillsPos = skillsEl.offsetTop;
// const projectsPos = projectsEl.offsetTop;
// const aboutPos = aboutEl.offsetTop;
// // console.log(headerPos);
// // console.log(skillsPos);
// // console.log(projectsPos);
// // console.log(aboutPos);
// let initialScrollPos = window.pageYOffset;
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (initialScrollPos < currentScrollPos) {
//     checkScrollDown();
//   } else {
//     checkScrollUp();
//   }
//   console.log(initialScrollPos);
//   initialScrollPos = window.pageYOffset;
//   console.log(initialScrollPos);
// };

// const checkScrollDown = () => {
//   if (pageYOffset >= aboutPos) {
//     window.scrollTo({
//       top: aboutPos,
//       behavior: "smooth",
//     });
//   } else if (pageYOffset > projectsPos + 20) {
//     window.scrollTo({
//       top: aboutPos,
//       behavior: "smooth",
//     });
//   } else if (pageYOffset > skillsPos + 20) {
//     window.scrollTo({
//       top: projectsPos,
//       behavior: "smooth",
//     });
//   } else if (pageYOffset > headerPos + 20) {
//     window.scrollTo({
//       top: skillsPos,
//       behavior: "smooth",
//     });
//   }
// };

// const checkScrollUp = () => {
//   if (pageYOffset < skillsPos) {
//     window.scrollTo({
//       top: headerPos,
//       behavior: "smooth",
//     });
//   } else if (pageYOffset < projectsPos) {
//     window.scrollTo({
//       top: skillsPos,
//       behavior: "smooth",
//     });
//   } else if (pageYOffset < aboutPos) {
//     window.scrollTo({
//       top: projectsPos,
//       behavior: "smooth",
//     });
//   } else {
//     window.scrollTo({
//       top: projectsPos,
//       behavior: "smooth",
//     });
//   }
// };
