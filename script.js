document.addEventListener('DOMContentLoaded', function() {
    var photos = [];
    var fileNames = [];
    var imageList = [];
    var openList = '<li id="photo">';
    var closeList = '</li>';
    var openCaptionTag = "<div class='caption'>";
    var closeCaptionTag = "</div>";
    var openDescTag = "<div class='description'>";
    var closeDescTag = "</div>";
    
    var captionTexts = [
        "Caption 1", "Caption 2", "Caption 3", "Caption 4", "Caption 5", 
        "Caption 6", "Caption 7", "Caption 8", "Caption 9", "Caption 10"
    ];
    
    var descTexts = [
        "Description 1", "Description 2", "Description 3", "Description 4", "Description 5", 
        "Description 6", "Description 7", "Description 8", "Description 9", "Description 10"
    ];

    var popupTexts = [
        "Text 1", "Text 2", "Text 3", "Text 4", "Text 5",
        "Text 6", "Text 7", "Text 8", "Text 9", "Text 10"
    ];

    var closeText = "Click This To Close"; // Close button text

    for (var i = 0; i < 10; i++) {
        fileNames.push("winterland" + (i + 1));  
        photos.push("<img src='images/" + fileNames[i] + ".jpg'>");
        var caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
        var description = openDescTag + descTexts[i] + closeDescTag;
        var image = openList + photos[i] + caption + description + closeList;
        imageList.push(image);
    }

    document.getElementById("album").innerHTML = imageList.join("");

    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description, index) {
        description.addEventListener('click', function() {
            document.getElementById('info-heading').innerHTML = captionTexts[index];
            document.getElementById('info-text').innerHTML = popupTexts[index];
            document.getElementById('info-close').innerHTML = closeText;
            document.getElementById('info-box').style.visibility = 'visible';
        });
    });

    document.getElementById('info-close').addEventListener('click', function() {
        document.getElementById('info-box').style.visibility = 'hidden';
    });

});


document.addEventListener('DOMContentLoaded', function() {
    var contactMethodSelect = document.getElementById('contact-method');
    var emailInputDiv = document.getElementById('email-input');
    var phoneInputDiv = document.getElementById('phone-input');

    contactMethodSelect.addEventListener('change', function() {
        var selectedValue = contactMethodSelect.value;
        emailInputDiv.classList.add('hidden');
        phoneInputDiv.classList.add('hidden');

        if (selectedValue === 'email') {
            emailInputDiv.classList.remove('hidden');
        } else if (selectedValue === 'phone') {
            phoneInputDiv.classList.remove('hidden');
        }
    });
});
