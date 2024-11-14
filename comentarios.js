document.getElementById('submitComment').addEventListener('click', function() {
    var commentText = document.getElementById('commentInput').value;
    if (commentText.trim() !== "") {
      var commentItem = document.createElement('li');
      commentItem.className = 'list-group-item';
      commentItem.textContent = commentText;
      document.getElementById('commentsList').appendChild(commentItem);
      document.getElementById('commentInput').value = '';  // Limpiar el textarea después de enviar
    }
  });
  