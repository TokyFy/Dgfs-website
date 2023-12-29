function formatNumber(phoneNumber) {

    if (!phoneNumber) return;
    // Remove any non-numeric characters
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Define the desired format
    const format = [3, 2, 3, 2];

    // Initialize the formatted phone number
    let formattedPhoneNumber = '';

    // Apply the format
    format.forEach((count, index) => {
        formattedPhoneNumber += phoneNumber.substr(0, count);
        phoneNumber = phoneNumber.substr(count);

        if (index < format.length - 1 && phoneNumber.length > 0) {
            formattedPhoneNumber += ' ';
        }
    });

    return formattedPhoneNumber;
}

export default formatNumber;