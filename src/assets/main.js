$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/hawortDe.json',
    dataType: 'jsonp',
    success: function(response) {
      populateBadges(response.courses.completed)
    }
  });

  function populateBadges(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

});
