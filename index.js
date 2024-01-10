function addingEventListener () {
  const input = document.getElementById('button');
  function clickAlert() {
    return alert('I was clicked!');
  }
  input.addEventListener('click', clickAlert);
}