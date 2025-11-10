/**
 * Валидация email адреса
 * @param {string} email - Email для валидации
 * @returns {string|null} - Сообщение об ошибке или null если валидно
 */
export const validateEmail = (email) => {
  if (!email) {
    return 'Email is required'
  }
  
  const trimmedEmail = email.trim()
  
  // Проверка на минимальную длину (a@b.cd = 4 символов минимум)
  if (trimmedEmail.length < 4) {
    return 'Email is too short (minimum 4 characters)'
  }
  
  // Проверка на максимальную длину (стандарт RFC 5321)
  if (trimmedEmail.length > 254) {
    return 'Email is too long (maximum 254 characters)'
  }
  
  // Основной regex для email
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  if (!emailRegex.test(trimmedEmail)) {
    return 'Please enter a valid email address'
  }
  
  // Дополнительная проверка на наличие точки в доменной части
  const parts = trimmedEmail.split('@')
  if (parts.length !== 2) {
    return 'Invalid email format'
  }
  
  const domain = parts[1]
  if (!domain.includes('.')) {
    return 'Email domain must contain a dot'
  }
  
  // Проверка что после последней точки есть минимум 2 символа
  const domainParts = domain.split('.')
  const tld = domainParts[domainParts.length - 1]
  if (tld.length < 2) {
    return 'Invalid domain extension'
  }
  
  // Проверка на пробелы
  if (email.includes(' ')) {
    return 'Email should not contain spaces'
  }
  
  // Проверка на несколько @
  if ((email.match(/@/g) || []).length > 1) {
    return 'Email should contain only one @'
  }
  
  return null // Email валиден
}
