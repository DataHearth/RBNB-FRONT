import $ from 'jquery';

$('input[type=date]').change(() => {
  const start = $('#date-start').val();
  const end = $('#date-end').val();

  if (start !== '' && end !== '') {
    const date1 = new Date(start);
    const date2 = new Date(end);
    if (date1 < date2) {
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const price = parseInt($('#price').html());
      const tot = (diffDays * price);
      $('#calc-price').append(`${price}€ x ${diffDays} nuit(s) = ${tot}€`);
    }
  }
});
