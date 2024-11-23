const phone = "01616292567";
const encodingMgs = "Hey there, How's going?";
const baseUrl = "https://api.whatsapp.com/send/";

export const url = `${baseUrl}?phone=${phone}&text=${encodingMgs}&type=phone_number&app_absent=0`;
