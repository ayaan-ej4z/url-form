function showAlert() {
    alert("Hello, this is a test alert!");
}

function saveData() {

    const doctorName = document.getElementById('doctorName').value;
    const doctorDegree = document.getElementById('doctorDegree').value;
    const whatsappNumber = document.getElementById('whatsappNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const websiteUrl = document.getElementById('websiteUrl').value;
    const facebookProfileUrl = document.getElementById('facebookProfileUrl').value;
    const facebookPageUrl = document.getElementById('facebookPageUrl').value;
    const instagram = document.getElementById('instagram').value;

    const jsonObj = {
        Doctor_Image: "",
        Doctor_Name: doctorName,
        Doctor_Degree: doctorDegree,
        WhatsApp_Number: whatsappNumber,
        Email_Address: emailAddress,
        Website_URL: websiteUrl,
        Facebook_Profile_URL: facebookProfileUrl,
        Facebook_Page_URL: facebookPageUrl,
        Instagram_: instagram,

    }

    console.log('data', jsonObj);

}