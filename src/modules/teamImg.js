const imgTeam = () => {
  let teamImg = document.querySelectorAll('.command__photo'),
    src, data;

  teamImg.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      src = e.target.src;
      data = e.target.dataset.img;
      e.target.src = e.target.dataset.img;
      e.target.dataset.img = src;
    });
    item.addEventListener('mouseout', (e) => {
      src = e.target.src;
      data = e.target.dataset.img;
      e.target.src = e.target.dataset.img;
      e.target.dataset.img = src;

    });
  });
}
export default imgTeam;