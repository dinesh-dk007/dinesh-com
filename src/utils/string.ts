export function decodeEmail(email: string) {
  return atob(email);
  // return email.replace(/\[at\]/g, "@").replace(/\[dot\]/g, ".");
}
