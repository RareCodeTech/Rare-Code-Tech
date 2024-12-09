  // Load Sidebar
  fetch('sidebar.html')
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log('Sidebar data:', data);
      document.getElementById('sidebar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));
