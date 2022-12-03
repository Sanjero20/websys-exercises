$('.postImg').click(() => {
  $('.postImg').css('width', '150px');
  $('.postImg').css('height', 'auto');
});

$('p.desc > span').click(() => {
  $('.right').remove();
});
