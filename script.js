// دالة البحث عن الأدوات
function searchTools() {
    const query = document.getElementById('search').value.toLowerCase();
    const tools = document.querySelectorAll('.tool-card');

    tools.forEach(tool => {
        const title = tool.querySelector('h3').innerText.toLowerCase();
        if (title.includes(query)) {
            tool.style.display = 'inline-block';
        } else {
            tool.style.display = 'none';
        }
    });
}