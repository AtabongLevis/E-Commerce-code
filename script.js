function performSearch() {
    let searchTerm = document.getElementById("searchInput").value.trim();
    let resultElement = document.getElementById("searchResult");

    if (searchTerm) {
        resultElement.textContent = You searched for: "${searchTerm}";
    } else {
        resultElement.textContent = "Please enter something to search.";
    }
}