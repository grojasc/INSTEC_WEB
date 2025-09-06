export const formatWhatsAppNumber = (number: string): string => {
  return number.replace(/[^\d]/g, '');
};

export const generateWhatsAppURL = (
  phoneNumber: string,
  message: string = ''
): string => {
  const formattedNumber = formatWhatsAppNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedNumber}${message ? `?text=${encodedMessage}` : ''}`;
};

export const openWhatsApp = (
  phoneNumber: string,
  message: string = '',
  newWindow: boolean = true
): void => {
  const url = generateWhatsAppURL(phoneNumber, message);
  
  if (newWindow) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
};