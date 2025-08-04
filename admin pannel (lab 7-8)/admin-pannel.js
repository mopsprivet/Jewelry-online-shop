const mainPage = document.getElementById('go-to-main-page'); 
const statistics = document.getElementById('go-to-statistics');
const personalCabinet = document.getElementById('go-to-personal-cabinet'); 

mainPage.addEventListener('click', function() {
    window.location.href = '/Users/Anastasiya/Desktop/Web-technologies/Project /main page/main_project.html'; 
});

statistics.addEventListener('click', function() {
    window.location.href = '/Users/Anastasiya/Desktop/Web-technologies/Project /admin pannel (lab 7-8)/admin-pannel.html'; 
});

personalCabinet.addEventListener('click', function() {
    window.location.href = '/Users/Anastasiya/Desktop/Web-technologies/Project /personal cabinet/personal-cabinet.html'; 
});
